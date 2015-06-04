var demo;
(function (demo) {
    var Jedi = (function () {
        function Jedi(name, bio) {
            this.name = name;
            this.bio = bio;
        }
        return Jedi;
    })();
    var Princess = (function () {
        function Princess(name, bio) {
            this.name = name;
            this.bio = bio;
        }
        return Princess;
    })();
    function hello(who) {
        console.log("Hello " + who.name + "!");
        if (who instanceof Jedi) {
            console.log("   may the force be with you!");
        }
    }
    var leia = new Princess('Leia Organa Solo', 'http://starwars.wikia.com/wiki/Leia_Organa_Solo');
    var luke = new Jedi('Luke Skywalker', 'http://starwars.wikia.com/wiki/Luke_Skywalker');
    hello({ name: "Yoda", bio: "one of the most renowned and powerful Jedi in galactic history" });
    hello(leia);
    hello(luke);
})(demo || (demo = {}));
