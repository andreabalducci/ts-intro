var Collections;
(function (Collections) {
    var Dictionary = (function () {
        function Dictionary(init) {
            if (init === void 0) { init = new Array(); }
            this._keys = new Array();
            this._values = new Array();
            if (init) {
                for (var x = 0; x < init.length; x++) {
                    this.add(init[x].key, init[x].value);
                }
            }
        }
        Dictionary.prototype.add = function (key, value) {
            this[key] = value;
            this._keys.push(key);
            this._values.push(value);
        };
        Dictionary.prototype.remove = function (key) {
            var index = this._keys.indexOf(key, 0);
            this._keys.splice(index, 1);
            this._values.splice(index, 1);
            delete this[key];
        };
        Dictionary.prototype.getValue = function (key) {
            return this[key];
        };
        Dictionary.prototype.keys = function () {
            return this._keys;
        };
        Dictionary.prototype.values = function () {
            return this._values;
        };
        Dictionary.prototype.containsKey = function (key) {
            if (typeof this[key] === "undefined") {
                return false;
            }
            return true;
        };
        Dictionary.prototype.toLookup = function () {
            return this;
        };
        return Dictionary;
    })();
    Collections.Dictionary = Dictionary;
})(Collections || (Collections = {}));
//# sourceMappingURL=Collections.js.map