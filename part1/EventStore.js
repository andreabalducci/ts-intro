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
    function getClassName(o) {
        var funcNameRegex = /function (.{1,})\(/;
        var results = (funcNameRegex).exec(o.toString());
        return (results && results.length > 1) ? results[1] : "";
    }
    var DomainError = (function () {
        function DomainError(message) {
            this.message = message;
            this.name = getType(this);
        }
        return DomainError;
    })();
    EventStore.DomainError = DomainError;
    var Command = (function () {
        function Command() {
            this.commandId = "cmd_" + Command.CommandCounter++;
        }
        Command.prototype.GetType = function () {
            return getType(this);
        };
        Command.CommandCounter = 0;
        return Command;
    })();
    EventStore.Command = Command;
    var Event = (function () {
        function Event() {
            this.eventId = "evt_" + Event.EventCounter++;
        }
        Event.prototype.GetType = function () {
            return getType(this);
        };
        Event.EventCounter = 0;
        Event.Type = new Event();
        return Event;
    })();
    EventStore.Event = Event;
    var Projection = (function () {
        function Projection() {
            this.handlers = new Array();
        }
        Projection.prototype.On = function (event, handler) {
            var name = getType(event);
            this.handlers[name] = handler;
        };
        Projection.prototype.Handle = function (event) {
            this.HandleEvent(event.GetType(), event);
            this.HandleEvent(getType(Event.Type), event);
        };
        Projection.prototype.HandleEvent = function (typeName, event) {
            var handler = this.handlers[typeName];
            if (handler)
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
            this.Handle(event);
        };
        return AggregateState;
    })(Projection);
    EventStore.AggregateState = AggregateState;
    var Aggregate = (function () {
        function Aggregate(id, State) {
            this.id = id;
            this.State = State;
            this.Events = new Array();
        }
        Aggregate.prototype.RaiseEvent = function (event) {
            event.streamId = this.id;
            this.Events.push(event);
            this.State.Apply(event);
            Bus.Default.publish(event);
        };
        return Aggregate;
    })();
    EventStore.Aggregate = Aggregate;
    var Repository = (function () {
        function Repository() {
        }
        Repository.getById = function (type, id) {
            return type.Factory(id);
        };
        return Repository;
    })();
    EventStore.Repository = Repository;
    var Bus = (function () {
        function Bus() {
            this.Consumers = new Array();
            this.Handlers = new Collections.Dictionary();
        }
        Bus.prototype.send = function (command) {
            var name = getType(command);
            var handler = this.Handlers.getValue(name);
            if (!handler) {
                throw "missing handler for " + name;
            }
            handler.Handle(command);
        };
        Bus.prototype.publish = function (event) {
            this.Consumers.forEach(function (consumer) { return consumer.Handle(event); });
        };
        Bus.prototype.subscribe = function (consumer) {
            this.Consumers.push(consumer);
        };
        Bus.prototype.On = function (command, handler) {
            var name = getType(command);
            this.Handlers.add(name, handler);
        };
        Bus.Default = new Bus();
        return Bus;
    })();
    EventStore.Bus = Bus;
})(EventStore || (EventStore = {}));
//# sourceMappingURL=EventStore.js.map