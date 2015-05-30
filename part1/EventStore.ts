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
		GetType() : string;
	}

	export interface IEventHandler {
		(event: IEvent): void;
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

	export class Event {
		static EventCounter: number = 0;

		eventId: string;
		constructor() {
			this.eventId = "evt_" + Event.EventCounter++;
		}
		
		GetType():string{
			return getType(this);
		}
	}

	export class Projection {
		private handlers: Array<IEventHandler> = new Array<IEventHandler>();
		protected Register(name:string, handler: IEventHandler){
			console.log('registered handler', name, handler);
			this.handlers[name] = handler;
		}

		protected On(event: IEvent) {
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
		}
	}
}