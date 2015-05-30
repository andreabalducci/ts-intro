/// <reference path="Item.ts"/>

module Program {
	interface ItemReadModel {
		id: string;
		description: string;
		active: boolean;
	}

	class ItemsList extends EventStore.Projection {
		allItems: { [id: string]: ItemReadModel } = {};

		constructor() {
			super();

			this.Register<Inventory.ItemCreated>(EventStore.getClassName(Inventory.ItemCreated), e => {
				this.allItems[e.id] = {
					id: e.id,
					description: e.description,
					active: true
				};
			});

			this.Register(EventStore.getClassName(Inventory.ItemDisabled), e => {

			});
		}

		print() {
			console.log("----------------------------")
			console.log("Item list");
			console.log("----------------------------")
			console.log(this.allItems);
			console.log("----------------------------")
		}
	}

	var itemsList = new ItemsList();
	EventStore.Bus.Default.subscribe(itemsList);

	var item = new Inventory.Item();
	item.create('abc', 'first item');
	item.disable();
	
	itemsList.print();
}