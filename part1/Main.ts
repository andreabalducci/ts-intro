/// <reference path="Collections.ts"/>
/// <reference path="Item.ts"/>

module Program {
	interface ItemReadModel {
		id: string;
		description: string;
		active: boolean;
		inStock: number;
	}

	class ItemsList extends EventStore.Projection {
		allItems: Collections.IDictionary<ItemReadModel> = new Collections.Dictionary<ItemReadModel>();

		constructor() {
			super();

			this.On(Inventory.ItemCreated.Type, e => {
				this.allItems.add(e.streamId, {
					id: e.sku,
					description: e.description,
					active: true,
					inStock: 0
				});
			});

			this.On(Inventory.ItemDisabled.Type, e => {
				this.allItems.getValue(e.streamId).active = false;
			});

			this.On(EventStore.Event.Type, e => {
				console.log('generic handler for ', e);
			})

			this.On(Inventory.ItemLoaded.Type, e=> this.allItems.getValue(e.streamId).inStock += e.quantity);
			this.On(Inventory.ItemPicked.Type, e=> this.allItems.getValue(e.streamId).inStock -= e.quantity);


		}

		print() {
			console.log("----------------------------")
			console.log("Item list");
			console.log("----------------------------")
			this.allItems.values().forEach(e => console.log(e));
			console.log("----------------------------")
		}
	}

	var bus = EventStore.Bus.Default;
	var itemsList = new ItemsList();

	function configure() {
		/* Handlers setup */
		Inventory.Handlers.Register(bus);
		bus.subscribe(itemsList);
	}

	function run() {
		try {
			bus.send(new Inventory.RegisterItem("item_1", "abc", "a new item"));
			bus.send(new Inventory.LoadItem("item_1", 100));
			bus.send(new Inventory.PickItem("item_1", 69));
			bus.send(new Inventory.DisableItem("item_1"));
		} catch (error) {
			console.error(error.message);
		}
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