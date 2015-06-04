var StarWars;
(function (StarWars) {
    function inspect(target, key, descriptor) {
        //		console.log(`inspection\ntarget:${target}\n${key}`);
        var original = descriptor.value;
        descriptor.value = function () {
            console.log(' ');
            console.log('The Force is strong with this one');
            original();
            console.log('The Force will be with you, always');
            console.log(' ');
        };
    }
    StarWars.inspect = inspect;
})(StarWars || (StarWars = {}));

if (typeof __decorate !== "function") __decorate = function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
/// <reference path="decorators.ts"/>
var StarWars;
(function (StarWars) {
    var Jedi = (function () {
        function Jedi(name, bio) {
            this.name = name;
            this.bio = bio;
        }
        Jedi.prototype.useTheForce = function () {
            console.log(' * * * * *');
        };
        Object.defineProperty(Jedi.prototype, "useTheForce",
            __decorate([
                StarWars.inspect
            ], Jedi.prototype, "useTheForce", Object.getOwnPropertyDescriptor(Jedi.prototype, "useTheForce")));
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
            who.useTheForce();
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
    console.log("- - - - - - - - - - -");
    hello(yoda);
    hello(leia);
    hello(luke);
    console.log("- - - - - - - - - - -");
    // for ... of ... 
    for (var _i = 0; _i < characters.length; _i++) {
        var c = characters[_i];
        console.log(c);
    }
})(StarWars || (StarWars = {}));
