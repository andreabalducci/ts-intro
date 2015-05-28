/// <reference path="Quantity.ts"/>
var Inventory;
(function (Inventory) {
    var Item = (function () {
        function Item(id) {
            this.id = id;
            this._quantity = 0;
            var q = new Inventory.Quantity(10, "pz");
            q.add(new Inventory.Quantity(10, "pcs"));
        }
        Item.prototype.load = function (quantity) {
            this._quantity += quantity;
        };
        Item.prototype.unload = function (quantity) {
            if (this._quantity >= quantity) {
                this._quantity -= quantity;
            }
            else {
                throw "Quantity " + quantity + " not available";
            }
        };
        return Item;
    })();
    var i = new Item("abc");
})(Inventory || (Inventory = {}));
//# sourceMappingURL=Item.js.map