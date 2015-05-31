var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
/// <reference path="EventStore.ts"/>
var Inventory;
(function (Inventory) {
    /* state & aggregate */
    var ItemState = (function (_super) {
        __extends(ItemState, _super);
        function ItemState() {
            var _this = this;
            _super.call(this);
            this.disabled = false;
            this.inStock = 0;
            this.sku = null;
            this.On(ItemDisabled.Type, function (e) { return _this.disabled = true; });
            this.On(ItemLoaded.Type, function (e) { return _this.inStock += e.quantity; });
            this.On(ItemPicked.Type, function (e) { return _this.inStock -= e.quantity; });
            this.On(ItemCreated.Type, function (e) { return _this.sku = e.sku; });
            this.addCheck({ name: "Item must have a SKU", rule: function () {
                    return _this.sku != null;
                }
            });
            this.addCheck({ name: "Item in stock must not be disabled", rule: function () {
                    return _this.stockLevel() == 0 || (_this.stockLevel() > 0 && !_this.hasBeenDisabled());
                }
            });
        }
        ItemState.prototype.hasBeenDisabled = function () { return this.disabled; };
        ;
        ItemState.prototype.stockLevel = function () { return this.inStock; };
        return ItemState;
    })(EventStore.AggregateState);
    /* Commands */
    var RegisterItem = (function (_super) {
        __extends(RegisterItem, _super);
        function RegisterItem(itemId, sku, description) {
            _super.call(this);
            this.itemId = itemId;
            this.sku = sku;
            this.description = description;
            this.__registerItem = null;
        }
        RegisterItem.Type = new RegisterItem(null, null, null);
        return RegisterItem;
    })(EventStore.Command);
    Inventory.RegisterItem = RegisterItem;
    var DisableItem = (function (_super) {
        __extends(DisableItem, _super);
        function DisableItem(itemId) {
            _super.call(this);
            this.itemId = itemId;
            this.__disableItem = null;
        }
        DisableItem.Type = new DisableItem(null);
        return DisableItem;
    })(EventStore.Command);
    Inventory.DisableItem = DisableItem;
    var LoadItem = (function (_super) {
        __extends(LoadItem, _super);
        function LoadItem(itemId, quantity) {
            _super.call(this);
            this.itemId = itemId;
            this.quantity = quantity;
            this.__loadItem = null;
        }
        LoadItem.Type = new LoadItem(null, 0);
        return LoadItem;
    })(EventStore.Command);
    Inventory.LoadItem = LoadItem;
    var PickItem = (function (_super) {
        __extends(PickItem, _super);
        function PickItem(itemId, quantity) {
            _super.call(this);
            this.itemId = itemId;
            this.quantity = quantity;
            this.__loadItem = null;
        }
        PickItem.Type = new PickItem(null, 0);
        return PickItem;
    })(EventStore.Command);
    Inventory.PickItem = PickItem;
    /* handlers */
    var RegisterItemHandler = (function () {
        function RegisterItemHandler(bus) {
            bus.On(Inventory.RegisterItem.Type, this);
        }
        RegisterItemHandler.prototype.Handle = function (command) {
            var item = EventStore.Repository.getById(Item.Type, command.itemId);
            item.register(command.sku, command.description);
            EventStore.Repository.save(item, command.commandId, function (h) {
                h.add('ts', Date());
            });
        };
        return RegisterItemHandler;
    })();
    Inventory.RegisterItemHandler = RegisterItemHandler;
    var DisableItemHandler = (function () {
        function DisableItemHandler(bus) {
            bus.On(Inventory.DisableItem.Type, this);
        }
        DisableItemHandler.prototype.Handle = function (command) {
            var item = EventStore.Repository.getById(Item.Type, command.itemId);
            item.disable();
            EventStore.Repository.save(item, command.commandId, function (h) {
                h.add('ts', Date());
            });
        };
        return DisableItemHandler;
    })();
    Inventory.DisableItemHandler = DisableItemHandler;
    var LoadItemHandler = (function () {
        function LoadItemHandler(bus) {
            bus.On(Inventory.LoadItem.Type, this);
        }
        LoadItemHandler.prototype.Handle = function (command) {
            var item = EventStore.Repository.getById(Item.Type, command.itemId);
            item.load(command.quantity);
            EventStore.Repository.save(item, command.commandId);
        };
        return LoadItemHandler;
    })();
    Inventory.LoadItemHandler = LoadItemHandler;
    var PickItemHandler = (function () {
        function PickItemHandler(bus) {
            bus.On(Inventory.PickItem.Type, this);
        }
        PickItemHandler.prototype.Handle = function (command) {
            var item = EventStore.Repository.getById(Item.Type, command.itemId);
            item.unLoad(command.quantity);
            EventStore.Repository.save(item, command.commandId);
        };
        return PickItemHandler;
    })();
    Inventory.PickItemHandler = PickItemHandler;
    var Handlers = (function () {
        function Handlers() {
        }
        Handlers.Register = function (bus) {
            new Inventory.RegisterItemHandler(bus);
            new Inventory.DisableItemHandler(bus);
            new Inventory.LoadItemHandler(bus);
            new Inventory.PickItemHandler(bus);
        };
        return Handlers;
    })();
    Inventory.Handlers = Handlers;
    /* events */
    var ItemCreated = (function (_super) {
        __extends(ItemCreated, _super);
        function ItemCreated(sku, description) {
            _super.call(this);
            this.sku = sku;
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
    var ItemLoaded = (function (_super) {
        __extends(ItemLoaded, _super);
        function ItemLoaded(quantity) {
            _super.call(this);
            this.quantity = quantity;
        }
        ItemLoaded.Type = new ItemLoaded(0);
        return ItemLoaded;
    })(EventStore.Event);
    Inventory.ItemLoaded = ItemLoaded;
    var ItemPicked = (function (_super) {
        __extends(ItemPicked, _super);
        function ItemPicked(quantity) {
            _super.call(this);
            this.quantity = quantity;
        }
        ItemPicked.Type = new ItemPicked(0);
        return ItemPicked;
    })(EventStore.Event);
    Inventory.ItemPicked = ItemPicked;
    var ItemPickingFailed = (function (_super) {
        __extends(ItemPickingFailed, _super);
        function ItemPickingFailed(requested, inStock) {
            _super.call(this);
            this.requested = requested;
            this.inStock = inStock;
        }
        ItemPickingFailed.Type = new ItemPickingFailed(0, 0);
        return ItemPickingFailed;
    })(EventStore.Event);
    Inventory.ItemPickingFailed = ItemPickingFailed;
    /* AGGREGATE */
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
        Item.prototype.load = function (quantity) {
            Error();
            this.RaiseEvent(new ItemLoaded(quantity));
        };
        Item.prototype.unLoad = function (quantity) {
            var currentStock = this.State.stockLevel();
            if (currentStock >= quantity) {
                this.RaiseEvent(new ItemPicked(quantity));
            }
            else {
                this.RaiseEvent(new ItemPickingFailed(quantity, currentStock));
            }
        };
        Item.prototype.Factory = function (id) {
            return new Item(id);
        };
        Item.Type = new Item(null);
        return Item;
    })(EventStore.Aggregate);
    Inventory.Item = Item;
})(Inventory || (Inventory = {}));
//# sourceMappingURL=Item.js.map