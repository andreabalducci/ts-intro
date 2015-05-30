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
            var createdEvent = Inventory.ItemCreated;
            console.log("event is ", createdEvent);
            this.On(EventStore.getClassName(Inventory.ItemCreated), function (e) {
                _this.allItems.add(e.streamId, {
                    id: e.id,
                    description: e.description,
                    active: true
                });
            });
            this.On(EventStore.getClassName(Inventory.ItemDisabled), function (e) {
                _this.allItems.getValue(e.streamId).active = false;
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
    EventStore.Bus.Default.subscribe(itemsList);
    var macbook = new Inventory.Item('1');
    macbook.create('mbp', 'macbook pro');
    macbook.disable();
    macbook.disable();
    var iphone = new Inventory.Item('2');
    iphone.create('iphone', 'Iphone 5');
    itemsList.print();
})(Program || (Program = {}));
//# sourceMappingURL=Main.js.map