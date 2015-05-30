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
            var _this = this;
            _super.call(this);
            this.On(ItemCreated.Type, function (e) {
            });
            this.On(ItemDisabled.Type, function (e) {
                _this.disabled = true;
            });
        }
        ItemState.prototype.hasBeenDisabled = function () { return this.disabled; };
        ;
        return ItemState;
    })(EventStore.AggregateState);
    var Item = (function (_super) {
        __extends(Item, _super);
        function Item(id) {
            _super.call(this, id, new ItemState());
        }
        Item.prototype.register = function (id, description) {
            this.RaiseEvent(new ItemCreated(id, description));
        };
        Item.prototype.disable = function () {
            if (!this.State.hasBeenDisabled()) {
                this.RaiseEvent(new ItemDisabled());
            }
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
        ItemCreated.Type = new ItemCreated(null, null);
        return ItemCreated;
    })(EventStore.Event);
    Inventory.ItemCreated = ItemCreated;
    var ItemDisabled = (function (_super) {
        __extends(ItemDisabled, _super);
        function ItemDisabled() {
            _super.call(this);
        }
        ItemDisabled.Type = new ItemDisabled();
        return ItemDisabled;
    })(EventStore.Event);
    Inventory.ItemDisabled = ItemDisabled;
})(Inventory || (Inventory = {}));
//# sourceMappingURL=Item.js.map