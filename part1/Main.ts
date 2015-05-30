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
			
			this.On(Inventory.ItemCreated.Type, e => {
				this.allItems.add(e.streamId, {
					id: e.id,
					description: e.description,
					active: true
				});
			});			
			
			this.On(Inventory.ItemDisabled.Type, e => {
				this.allItems.getValue(e.streamId).active = false;
			});
			
			this.On(EventStore.Event.Type, e => {
				console.log('generic handler for ', e);
			})
		}

		print() {
			console.log("----------------------------")
			console.log("Item list");
			console.log("----------------------------")
			this.allItems.values().forEach(e => console.log(e));
			console.log("----------------------------")
		}
	}

	var itemsList = new ItemsList();
	EventStore.Bus.Default.subscribe(itemsList);

	var macbook = new Inventory.Item('1');
	macbook.register('mbp', 'macbook pro');
	macbook.disable();
	macbook.load(10);
	macbook.unLoad(4);
	macbook.unLoad(8);

	
	var iphone = new Inventory.Item('2');
	iphone.register('iphone', 'Iphone 5');
	
	itemsList.print();
}