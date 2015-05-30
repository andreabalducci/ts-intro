var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var EventStore;
(function (EventStore) {
    /* Implementations */
    function getType(o) {
        var funcNameRegex = /function (.{1,})\(/;
        var results = (funcNameRegex).exec(o.constructor.toString());
        return (results && results.length > 1) ? results[1] : "";
    }
    EventStore.getType = getType;
    var Event = (function () {
        function Event() {
            this.eventId = "evt_" + Event.EventCounter++;
        }
        Event.prototype.GetType = function () {
            return getType(this);
        };
        Event.EventCounter = 0;
        return Event;
    })();
    EventStore.Event = Event;
    var Projection = (function () {
        function Projection() {
            this.handlers = new Array();
        }
        Projection.prototype.Register = function (name, handler) {
            console.log('registered handler', name, handler);
            this.handlers[name] = handler;
        };
        Projection.prototype.On = function (event) {
            var name = event.GetType();
            var handler = this.handlers[name];
            console.log('handling ', name, handler);
            handler(event);
        };
        return Projection;
    })();
    EventStore.Projection = Projection;
    var AggregateState = (function (_super) {
        __extends(AggregateState, _super);
        function AggregateState() {
            _super.apply(this, arguments);
        }
        AggregateState.prototype.Apply = function (event) {
            this.On(event);
        };
        return AggregateState;
    })(Projection);
    EventStore.AggregateState = AggregateState;
    var Aggregate = (function () {
        function Aggregate(state) {
            this.state = state;
            this.events = new Array();
        }
        Aggregate.prototype.RaiseEvent = function (event) {
            this.events.push(event);
            this.state.Apply(event);
        };
        return Aggregate;
    })();
    EventStore.Aggregate = Aggregate;
})(EventStore || (EventStore = {}));
//# sourceMappingURL=EventStore.js.map