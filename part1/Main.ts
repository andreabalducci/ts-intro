/// <reference path="Collections.ts"/>
/// <reference path="Item.ts"/>

module Program {
	interface ItemReadModel {
		id: string;
		description: string;
		active: boolean;
	}

	class ItemsList extends EventStore.Projection {
		allItems: Collections.IDictionary<ItemReadModel> = new Collections.Dictionary<ItemReadModel>();

		constructor() {
			super();

			this.Register<Inventory.ItemCreated>(EventStore.getClassName(Inventory.ItemCreated), e => {
				this.allItems.add(e.id, {
					id: e.id,
					description: e.description,
					active: true
				});
			});

			this.Register(EventStore.getClassName(Inventory.ItemDisabled), e => {

			});
		}

		print() {
			console.log("----------------------------")
			console.log("Item list");
			console.log("----------------------------")
			console.log(this.allItems.values());
			console.log("----------------------------")
		}
	}

	var itemsList = new ItemsList();
	EventStore.Bus.Default.subscribe(itemsList);

	var macbook = new Inventory.Item();
	macbook.create('mbp', 'macbook pro');
	macbook.disable();
	
	var iphone = new Inventory.Item();
	iphone.create('iphone', 'Iphone 5');
	
	itemsList.print();
}