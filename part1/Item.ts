/// <reference path="Quantity.ts"/>
module Inventory {
	class Item {
		private _quantity: number = 0;
		constructor(public id: string) {
			var q = new Quantity(10, "pz");
			q.add(new Quantity(10, "pcs"));
		}

		load(quantity: number):void {
			this._quantity += quantity;
		}

		unload(quantity: number):void {
			if (this._quantity >= quantity) {
				this._quantity -= quantity;
			} else {
				throw "Quantity " + quantity + " not available";
			}
		}
	}
	
	
	var i = new Item("abc");
}