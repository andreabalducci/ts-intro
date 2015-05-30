var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
/// <reference path="EventStore.ts"/>
var Inventory;
(function (Inventory) {
    var ItemState = (function (_super) {
        __extends(ItemState, _super);
        function ItemState() {
            _super.call(this);
            this.Register(EventStore.getClassName(ItemCreated), function (e) {
                console.log('Item was actually created', e);
            });
            this.Register(EventStore.getClassName(ItemDisabled), function (e) {
                console.log('Item was disabled', e);
            });
        }
        return ItemState;
    })(EventStore.AggregateState);
    var Item = (function (_super) {
        __extends(Item, _super);
        function Item() {
            _super.call(this, new ItemState());
        }
        Item.prototype.create = function (id, description) {
            this.RaiseEvent(new ItemCreated(id, description));
        };
        Item.prototype.disable = function () {
            this.RaiseEvent(new ItemDisabled());
        };
        return Item;
    })(EventStore.Aggregate);
    Inventory.Item = Item;
    /* events */
    var ItemCreated = (function (_super) {
        __extends(ItemCreated, _super);
        function ItemCreated(id, description) {
            _super.call(this);
            this.id = id;
            this.description = description;
        }
        return ItemCreated;
    })(EventStore.Event);
    Inventory.ItemCreated = ItemCreated;
    var ItemDisabled = (function (_super) {
        __extends(ItemDisabled, _super);
        function ItemDisabled() {
            _super.call(this);
        }
        return ItemDisabled;
    })(EventStore.Event);
    Inventory.ItemDisabled = ItemDisabled;
})(Inventory || (Inventory = {}));
//# sourceMappingURL=Item.js.map