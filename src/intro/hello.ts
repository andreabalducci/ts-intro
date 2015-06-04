/// <reference path="jedi.ts"/>
/// <reference path="princess.ts"/>
module StarWars {

	function hello(who: {name:string}) {
		console.log("Hello " + who.name + "!");
		if(who instanceof Jedi){
			console.log("   may the force be with you!")
		}
	}

	var leia = new Princess(
		'Leia Organa Solo',
		'http://starwars.wikia.com/wiki/Leia_Organa_Solo'
	);
	
	var luke  = new Jedi(
		'Luke Skywalker',
		'http://starwars.wikia.com/wiki/Luke_Skywalker'
	);


	hello({ name: "Yoda", bio:"one of the most renowned and powerful Jedi in galactic history" });
	hello(leia);
	hello(luke);
}