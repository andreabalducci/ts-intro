module EventStore {
	/* Interfaces */
	export interface ICommand {
		commandId: string;
	}

	export interface ICommandHandler<T extends ICommand> {
		Handle(command: T): void;
	}

	export interface IEvent {
		streamId: string;
		eventId: string;
		GetType(): string;
	}

	export interface IEventHandler<T extends IEvent> {
		(event: T): void;
	}

	export interface IBus {
		send(command: ICommand): void;
		publish(event: IEvent): void;
	}
	
	/* Implementations */
	/**
	 * getType from object instance
	 */
	function getType(o): string {
		var funcNameRegex = /function (.{1,})\(/;
        var results = (funcNameRegex).exec((<any> o).constructor.toString());
        return (results && results.length > 1) ? results[1] : "";
	}

	/**
	 * Get class name from type
	 */
	function getClassName(o): string {
		var funcNameRegex = /function (.{1,})\(/;
        var results = (funcNameRegex).exec((<any> o).toString());
        return (results && results.length > 1) ? results[1] : "";
	}

	export class DomainError implements Error {
		name: string;

		constructor(public message?: string) {
			this.name = getType(this);
		}
	}
	
	export class InvariantViolatedException extends DomainError{
		InvariantViolatedException = "";
	}

	export class Command implements ICommand {
		static CommandCounter: number = 0;
		commandId: string;

		constructor() {
			this.commandId = "cmd_" + Command.CommandCounter++;
		}

		GetType(): string {
			return getType(this);
		}
	}


	export class Event implements IEvent {
		static EventCounter: number = 0;
		static Type: Event = new Event();
		streamId: string;
		eventId: string;
		constructor() {
			this.eventId = "evt_" + Event.EventCounter++;
		}

		GetType(): string {
			return getType(this);
		}
	}

	export class Projection {
		private handlers: Array<IEventHandler<IEvent>> = new Array<IEventHandler<IEvent>>();
		protected On<T extends IEvent>(event: T, handler: IEventHandler<T>) {
			var name = getType(event);
			this.handlers[name] = handler;
		}

		public Handle(event: IEvent) {
			this.HandleEvent(event.GetType(), event);
			this.HandleEvent(getType(Event.Type), event);
		}

		private HandleEvent(typeName: string, event: IEvent) {
			var handler = this.handlers[typeName];
			if (handler)
				handler(event);
		}
	}

	interface IAggregate {
		getAggregateType(): string;
		getAggregateId(): string;
		getUncommitedEvents(): IEvent[];
		checkInvariants();
	}

	interface InvariantCheck{
		rule:string;
		ensure<T extends AggregateState>():Boolean;
	}

	export class AggregateState extends Projection {
		private _checks = new  Array<InvariantCheck>();
		apply(event: IEvent): void {
			this.Handle(event);
		}
		
		protected addCheck(check:InvariantCheck){
			this._checks.push(check);
		}
		
		checkInvariants(){
			this._checks.forEach(c => {
				if(!c.ensure()){
					console.log("rule \'"+c.rule + "\' has been violated");
					throw new InvariantViolatedException(c.rule);
				}
			});
		}
	}

	export interface IAggregateFactory {
		Factory(id: string): IAggregateFactory;
	}

	export class Aggregate<TState extends AggregateState> implements IAggregate {
		private Events: Array<IEvent> = new Array<IEvent>();

		constructor(protected aggregateId: string, protected State: TState) {

		}

		protected RaiseEvent(event: IEvent): void {
			event.streamId = this.aggregateId;
			this.Events.push(event);
			this.State.apply(event);
		}

		getAggregateType() {
			return getType(this);
		}
		getAggregateId() {
			return this.aggregateId;
		}
		getUncommitedEvents(): IEvent[] {
			return this.Events;
		}
		checkInvariants(){
			this.State.checkInvariants();
		}
	}

	export class Repository {
		static getById<T extends IAggregateFactory>(type: T, id: string): T {
			var aggregate =  <T>type.Factory(id);
			// TODO read from stream
			return aggregate;
		}

		static save(aggregate: IAggregate) {
			console.log('saving ' + aggregate.getAggregateType() + "["+ aggregate.getAggregateId()+"]");
			aggregate.checkInvariants();
			
			// TODO save on stream
			
			aggregate.getUncommitedEvents().forEach(e=>{
				Bus.Default.publish(e);
			});			
		}
	}


	export class Bus implements IBus {
		static Default = new Bus();
		private Consumers = new Array<Projection>();
		private Handlers = new Collections.Dictionary<ICommandHandler<ICommand>>();

		send(command: ICommand): void {
			var name = getType(command);
			var handler = this.Handlers.getValue(name);
			if (!handler) {
				throw "missing handler for " + name;
			}

			handler.Handle(command);
		}

		publish(event: IEvent): void {
			this.Consumers.forEach(consumer=> consumer.Handle(event));
		}

		subscribe(consumer: Projection): void {
			this.Consumers.push(consumer);
		}

		On<T extends ICommand>(command: T, handler: ICommandHandler<T>) {
			var name = getType(command);
			this.Handlers.add(name, handler);
		}
	}
}