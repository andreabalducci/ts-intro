module EventStore {
	/* Interfaces */
	export interface ICommand {
		commandId: string;
	}

	export interface ICommandHandler {
		Handle(command: ICommand): void;
	}

	export interface IEvent {
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
		protected Register<T extends IEvent>(name: string, handler: IEventHandler<T>) {
			console.log('registered handler', name, handler);
			this.handlers[name] = handler;
		}

		public On(event: IEvent) {
			var name = event.GetType();
			var handler = this.handlers[name];
			console.log('handling ', name, handler);
			handler(event);
		}
	}

	export class AggregateState extends Projection {
		Apply(event: IEvent): void {
			this.On(event);
		}
	}

	export class Aggregate {
		private events: Array<IEvent> = new Array<IEvent>();

		constructor(protected state: AggregateState) {

		}

		protected RaiseEvent(event: IEvent): void {
			this.events.push(event);
			this.state.Apply(event);
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
				consumer.On(event);
			}, this);
		}
		
		subscribe(consumer : Projection) : void{
			this.Consumers.push(consumer);
		}
	}
}