/// <reference path="EventStore.ts"/>
module Inventory {
	class ItemState extends EventStore.AggregateState {
		private disabled: boolean = false;
		private inStock : number = 0;
		constructor() {
			super();
			this.On(ItemDisabled.Type, e=> this.disabled = true);
			this.On(ItemLoaded.Type,e=> this.inStock += e.quantity);
			this.On(ItemPicked.Type,e=> this.inStock -= e.quantity);
		}

		hasBeenDisabled(): boolean { return this.disabled };
		stockLevel():number {return this.inStock;}
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

		load(quantity: number): void {
			this.RaiseEvent(new ItemLoaded(quantity))
		}

		unLoad(quantity: number): void {
			var currentStock = this.State.stockLevel();
			if(currentStock >= quantity){
				this.RaiseEvent(new ItemPicked(quantity))
			}else{
				this.RaiseEvent(new ItemPickingFailed(quantity, currentStock));			
			}
		}
	}
	
	/* events */
	export class ItemCreated extends EventStore.Event {
		static Type: ItemCreated = new ItemCreated(null, null);
		constructor(public id: string, public description: string) {
			super();
		}
	}

	export class ItemDisabled extends EventStore.Event {
		static Type: ItemDisabled = new ItemDisabled();
		constructor() {
			super();
		}
	}

	export class ItemLoaded extends EventStore.Event {
		static Type: ItemLoaded = new ItemLoaded(0);
		constructor(public quantity: number) {
			super();
		}
	}


	export class ItemPicked extends EventStore.Event {
		static Type: ItemPicked = new ItemPicked(0);
		constructor(public quantity: number) {
			super();
		}
	}
	export class ItemPickingFailed extends EventStore.Event {
		static Type: ItemPickingFailed = new ItemPickingFailed(0,0);
		constructor(public requested: number, public inStock : number) {
			super();
		}
	}
}