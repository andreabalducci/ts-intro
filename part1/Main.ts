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
					id: e.sku,
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

	function configure(){
		/* Handlers setup */
		EventStore.Bus.Default.On(Inventory.RegisterItem.Type, new Inventory.RegisterItemHandler());
		EventStore.Bus.Default.On(Inventory.DisableItem.Type, new Inventory.DisableItemHandler());

		/* eventstream subscriptions */
		EventStore.Bus.Default.subscribe(itemsList);
	}

	function run(){
		EventStore.Bus.Default.send(new Inventory.RegisterItem("item_1","abc","a new item"));
		EventStore.Bus.Default.send(new Inventory.DisableItem("item_1"));
		itemsList.print();
	}

	configure();
	run();
	
	EventStore.Persistence.dump();


//	var macbook = new Inventory.Item('1');
//	macbook.register('mbp', 'macbook pro');
//	macbook.load(10);
//	macbook.unLoad(4);
//	macbook.unLoad(8);
//	try {
//		macbook.disable();
//	} catch (err) {
//		if (err instanceof Inventory.ItemCannotBeDisabledError) {
//			console.error('Still available:', (<Inventory.ItemCannotBeDisabledError>err).inStock);
//		}
//	}
//
//
//	var iphone = new Inventory.Item('2');
//	iphone.register('iphone', 'Iphone 5');

}