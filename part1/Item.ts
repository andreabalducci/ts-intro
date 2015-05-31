/// <reference path="EventStore.ts"/>
module Inventory {
	/* ERRORS */
	export class ItemCannotBeDisabledError extends EventStore.DomainError {
		constructor(public inStock:number){
			super("In stock " + inStock);
		}
	}

	/* state & aggregate */

	class ItemState extends EventStore.AggregateState  {
		private disabled: boolean = false;
		private inStock: number = 0;
		constructor() {
			super();
			this.On(ItemDisabled.Type, e=> this.disabled = true);
			this.On(ItemLoaded.Type, e=> this.inStock += e.quantity);
			this.On(ItemPicked.Type, e=> this.inStock -= e.quantity);
						
			this.addCheck({rule:"Item in stock should not be disabled", ensure : ()=>
				this.stockLevel() == 0 || (this.stockLevel() > 0 && !this.hasBeenDisabled())
			});
		}

		hasBeenDisabled(): boolean { return this.disabled };
		stockLevel(): number { return this.inStock; }
	}

	/* Commands */
	export class RegisterItem extends EventStore.Command{
		static Type: RegisterItem = new RegisterItem(null,null,null);
		__registerItem = null;
		constructor(public itemId:string, public sku:string, public description:string){
			super();
		}
	}
	
	export class DisableItem extends EventStore.Command{
		static Type: DisableItem = new DisableItem(null);
		__disableItem = null;
		constructor(public itemId:string){
			super();
		}
	}
	
	/* handlers */
	export class RegisterItemHandler implements EventStore.ICommandHandler<RegisterItem>{
		Handle(command : RegisterItem){
			var item = EventStore.Repository.getById(Item.Type, command.itemId);
			item.register(command.sku, command.description);
			EventStore.Repository.save(item, command.commandId, h =>{
				h.add('ts', Date())
			});
		}
	}
	
	export class DisableItemHandler implements EventStore.ICommandHandler<DisableItem>{
		Handle(command : DisableItem){
			var item = EventStore.Repository.getById(Item.Type, command.itemId);
			item.disable();
			EventStore.Repository.save(item, command.commandId, h =>{
				h.add('ts', Date())
			});
		}
	}
	
	/* events */
	export class ItemCreated extends EventStore.Event {
		static Type: ItemCreated = new ItemCreated(null, null);
		constructor(public sku: string, public description: string) {
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
		static Type: ItemPickingFailed = new ItemPickingFailed(0, 0);
		constructor(public requested: number, public inStock: number) {
			super();
		}
	}
	
	
	/* AGGREGATE */
	
	export class Item extends EventStore.Aggregate<ItemState> implements EventStore.IAggregateFactory {
		static Type: Item = new Item(null);
		constructor(id: string) {
			super(id, new ItemState())
		}

		register(id: string, description: string) {
			this.RaiseEvent(new ItemCreated(id, description));
		}

		disable() {
			if (this.State.stockLevel() > 0) {
				throw new ItemCannotBeDisabledError(this.State.stockLevel());
			}

			if (!this.State.hasBeenDisabled()) {
				this.RaiseEvent(new ItemDisabled());
			}
		}

		load(quantity: number): void {
			Error()
			this.RaiseEvent(new ItemLoaded(quantity))
		}

		unLoad(quantity: number): void {
			var currentStock = this.State.stockLevel();
			if (currentStock >= quantity) {
				this.RaiseEvent(new ItemPicked(quantity))
			} else {
				this.RaiseEvent(new ItemPickingFailed(quantity, currentStock));
			}
		}
		
		Factory(id:string){
			return new Item(id);
		}
	}
}