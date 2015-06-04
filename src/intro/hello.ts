/// <reference path="jedi.ts"/>
/// <reference path="princess.ts"/>
module StarWars {

	function hello(who: { name: string }) {
		console.log("Hello " + who.name + "!");
		if (who instanceof Jedi) {
			console.log("   may the force be with you!")
			who.useTheForce();
		}
	}
	
	// LET
	let characters = [
		new Princess(
			'Leia Organa Solo',
			'http://starwars.wikia.com/wiki/Leia_Organa_Solo'
			),
		new Jedi(
			'Luke Skywalker',
			'http://starwars.wikia.com/wiki/Luke_Skywalker'
			),
		{
			name: "Yoda",
			bio: "one of the most renowned and powerful Jedi in galactic history"
		}
	];

	// Destructuring
	var [leia, luke, yoda] = characters;

	console.log("- - - - - - - - - - -");

	hello(yoda);
	hello(leia);
	hello(luke);

	console.log("- - - - - - - - - - -");

	// for ... of ... 
	for (var c of characters) {
		console.log(c);
	}
}