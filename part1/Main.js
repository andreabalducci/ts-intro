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
            this.allItems = {};
            this.Register(EventStore.getClassName(Inventory.ItemCreated), function (e) {
                _this.allItems[e.id] = {
                    id: e.id,
                    description: e.description,
                    active: true
                };
            });
            this.Register(EventStore.getClassName(Inventory.ItemDisabled), function (e) {
            });
        }
        ItemsList.prototype.print = function () {
            console.log("----------------------------");
            console.log("Item list");
            console.log("----------------------------");
            console.log(this.allItems);
            console.log("----------------------------");
        };
        return ItemsList;
    })(EventStore.Projection);
    var itemsList = new ItemsList();
    EventStore.Bus.Default.subscribe(itemsList);
    var item = new Inventory.Item();
    item.create('abc', 'first item');
    item.disable();
    itemsList.print();
})(Program || (Program = {}));
//# sourceMappingURL=Main.js.map