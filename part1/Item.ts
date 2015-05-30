/// <reference path="EventStore.ts"/>
module Inventory {
	class ItemState extends EventStore.AggregateState {
		constructor() {
			super();

			this.Register(ItemCreated.GetType(), e => {
				console.log('Item was actually created', e);
			});

			this.Register(ItemDisabled.GetType(), e=> {
				console.log('Item was disabled', e);
			});
		}
	}

	export class Item extends EventStore.Aggregate {
		constructor() {
			super(new ItemState())
		}

		create(id: string, description: string) {
			this.RaiseEvent(new ItemCreated(id, description));
		}
		
		disable(){
			this.RaiseEvent(new ItemDisabled());
		}
	}
	
	
	/* events */
	export class ItemCreated extends EventStore.Event {
		static GetType(): string {
			return "ItemCreated";
		}
		constructor(public id: string, public description: string) {
			super();
		}
	}

	export class ItemDisabled extends EventStore.Event {
		static GetType(): string {
			return "ItemDisabled";
		}
		
		constructor() {
			super();
		}
	}
}