module EventStore {
	/* Interfaces */
	export interface ICommand {
		commandId: string;
	}

	export interface ICommandHandler {
		Handle(command: ICommand): void;
	}

	export interface IEvent {
		streamId : string;
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
	export function getType(o): string {
		var funcNameRegex = /function (.{1,})\(/;
        var results = (funcNameRegex).exec((<any> o).constructor.toString());
        return (results && results.length > 1) ? results[1] : "";
	}

	export function getClassName(o): string {
		var funcNameRegex = /function (.{1,})\(/;
        var results = (funcNameRegex).exec((<any> o).toString());
        return (results && results.length > 1) ? results[1] : "";
	}

	export class Event {
		static EventCounter: number = 0;
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
		protected On<T extends IEvent>(name: string, handler: IEventHandler<T>) {
			
			console.log('registered handler', name, handler);
			this.handlers[name] = handler;
		}

		public Handle(event: IEvent) {
			var name = event.GetType();
			var handler = this.handlers[name];
			console.log('handling ', name, handler);
			if(handler)
				handler(event);
		}
	}

	export class AggregateState extends Projection {
		Apply(event: IEvent): void {
			this.Handle(event);
		}
	}

	export class Aggregate<TState extends AggregateState> {
		private Events: Array<IEvent> = new Array<IEvent>();

		constructor(protected id:string, protected State: TState) {

		}

		protected RaiseEvent(event: IEvent): void {
			event.streamId = this.id;
			this.Events.push(event);
			this.State.Apply(event);
			Bus.Default.publish(event);
		}
	}
	
	export class Bus implements IBus{
		static Default : Bus  = new Bus();
		private Consumers : Array<Projection> = new Array<Projection>();
		
		send(command : ICommand):void{
			
		}
		
		publish(event :IEvent):void{
			this.Consumers.forEach(function(consumer:Projection) {
				consumer.Handle(event);
			}, this);
		}
		
		subscribe(consumer : Projection) : void{
			this.Consumers.push(consumer);
		}
	}
}