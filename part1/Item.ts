/// <reference path="EventStore.ts"/>
module Inventory {
	class ItemState extends EventStore.AggregateState {
		private disabled: boolean;

		constructor() {
			super();

			this.On(ItemCreated.Type, e => {
			});

			this.On(ItemDisabled.Type, e=> {
				this.disabled = true;
			});
		}

		hasBeenDisabled(): boolean { return this.disabled };

	}

	export class Item extends EventStore.Aggregate<ItemState> {
		constructor(id: string) {
			super(id, new ItemState())
		}

		register(id: string, description: string) {
			this.RaiseEvent(new ItemCreated(id, description));
		}

		disable() {
			if (!this.State.hasBeenDisabled()) {
				this.RaiseEvent(new ItemDisabled());
			}
		}
	}
	
	/* events */
	export class ItemCreated extends EventStore.Event {
		static Type : ItemCreated = new ItemCreated(null,null);
		constructor(public id: string, public description: string) {
			super();
		}
	}

	export class ItemDisabled extends EventStore.Event {
		static Type : ItemDisabled = new ItemDisabled();
		constructor() {
			super();
		}
	}
}