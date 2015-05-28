var Inventory;
(function (Inventory) {
    var Quantity = (function () {
        function Quantity(value, uom) {
            this.value = value;
            this.uom = uom;
        }
        Quantity.prototype.add = function (q) {
            if (q.uom !== this.uom) {
                throw "Cannot add " + q.uom + " to " + this.uom;
            }
        };
        return Quantity;
    })();
    Inventory.Quantity = Quantity;
})(Inventory || (Inventory = {}));
//# sourceMappingURL=Quantity.js.map