/// <reference path="Item.ts"/>

module Program{
	var item = new Inventory.Item();
	item.create('abc', 'first item');
	item.disable();
}