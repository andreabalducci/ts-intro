/// <reference path="Collections.ts"/>
/// <reference path="Item.ts"/>
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var Program;
(function (Program) {
    var ItemsList = (function (_super) {
        __extends(ItemsList, _super);
        function ItemsList() {
            var _this = this;
            _super.call(this);
            this.allItems = new Collections.Dictionary();
            this.On(Inventory.ItemCreated.Type, function (e) {
                _this.allItems.add(e.streamId, {
                    id: e.sku,
                    description: e.description,
                    active: true
                });
            });
            this.On(Inventory.ItemDisabled.Type, function (e) {
                _this.allItems.getValue(e.streamId).active = false;
            });
            this.On(EventStore.Event.Type, function (e) {
                console.log('generic handler for ', e);
            });
        }
        ItemsList.prototype.print = function () {
            console.log("----------------------------");
            console.log("Item list");
            console.log("----------------------------");
            this.allItems.values().forEach(function (e) { return console.log(e); });
            console.log("----------------------------");
        };
        return ItemsList;
    })(EventStore.Projection);
    var itemsList = new ItemsList();
    function configure() {
        /* Handlers setup */
        EventStore.Bus.Default.On(Inventory.RegisterItem.Type, new Inventory.RegisterItemHandler());
        EventStore.Bus.Default.On(Inventory.DisableItem.Type, new Inventory.DisableItemHandler());
        /* eventstream subscriptions */
        EventStore.Bus.Default.subscribe(itemsList);
    }
    function run() {
        EventStore.Bus.Default.send(new Inventory.RegisterItem("item_1", "abc", "a new item"));
        EventStore.Bus.Default.send(new Inventory.DisableItem("item_1"));
        itemsList.print();
    }
    configure();
    run();
    EventStore.Persistence.dump();
})(Program || (Program = {}));
//# sourceMappingURL=Main.js.map