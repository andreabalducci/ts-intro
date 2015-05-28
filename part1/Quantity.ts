module Inventory{
	export class Quantity{
		constructor(public value:number, public uom:string){
			
		}
		
		add(q : Quantity){
			if(q.uom !== this.uom){
				throw "Cannot add "+q.uom + " to " + this.uom;
			}
		}
	}
}