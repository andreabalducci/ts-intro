var StarWars;
(function (StarWars) {
    var Jedi = (function () {
        function Jedi(name, bio) {
            this.name = name;
            this.bio = bio;
        }
        return Jedi;
    })();
    StarWars.Jedi = Jedi;
})(StarWars || (StarWars = {}));

var StarWars;
(function (StarWars) {
    var Princess = (function () {
        function Princess(name, bio) {
            this.name = name;
            this.bio = bio;
        }
        return Princess;
    })();
    StarWars.Princess = Princess;
})(StarWars || (StarWars = {}));

/// <reference path="jedi.ts"/>
/// <reference path="princess.ts"/>
var StarWars;
(function (StarWars) {
    function hello(who) {
        console.log("Hello " + who.name + "!");
        if (who instanceof StarWars.Jedi) {
            console.log("   may the force be with you!");
        }
    }
    // LET
    var characters = [
        new StarWars.Princess('Leia Organa Solo', 'http://starwars.wikia.com/wiki/Leia_Organa_Solo'),
        new StarWars.Jedi('Luke Skywalker', 'http://starwars.wikia.com/wiki/Luke_Skywalker'),
        {
            name: "Yoda",
            bio: "one of the most renowned and powerful Jedi in galactic history"
        }
    ];
    // Destructuring
    var leia = characters[0], luke = characters[1], yoda = characters[2];
    hello(yoda);
    hello(leia);
    hello(luke);
    console.log(" - - - - - - - - - -");
    for (var _i = 0; _i < characters.length; _i++) {
        var c = characters[_i];
        console.log(c);
    }
})(StarWars || (StarWars = {}));
