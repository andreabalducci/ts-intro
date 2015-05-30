/// <reference path="EventStore.ts"/>
module Inventory {
	class ItemState extends EventStore.AggregateState {
		private disabled: boolean;

		constructor() {
			super();

			this.On<ItemCreated>(EventStore.getClassName(ItemCreated), e => {
				console.log('Item was actually created', e);
			});

			this.On<ItemDisabled>(EventStore.getClassName(ItemDisabled), e=> {
				console.log('Item was disabled', e);
			});
		}

		hasBeenDisabled(): boolean { return this.disabled };

	}

	export class Item extends EventStore.Aggregate<ItemState> {
		constructor(id: string) {
			super(id, new ItemState())
		}

		create(id: string, description: string) {
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
		constructor(public id: string, public description: string) {
			super();
		}
	}

	export class ItemDisabled extends EventStore.Event {
		constructor() {
			super();
		}
	}
}