var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var EventStore;
(function (EventStore) {
    /* Implementations */
    /**
     * getType from object instance
     */
    function getType(o) {
        var funcNameRegex = /function (.{1,})\(/;
        var results = (funcNameRegex).exec(o.constructor.toString());
        return (results && results.length > 1) ? results[1] : "";
    }
    /**
     * Get class name from type
     */
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
    var InvariantViolatedException = (function (_super) {
        __extends(InvariantViolatedException, _super);
        function InvariantViolatedException() {
            _super.apply(this, arguments);
            this.InvariantViolatedException = "";
        }
        return InvariantViolatedException;
    })(DomainError);
    EventStore.InvariantViolatedException = InvariantViolatedException;
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
            this._checks = new Array();
        }
        AggregateState.prototype.apply = function (event) {
            this.Handle(event);
        };
        AggregateState.prototype.addCheck = function (check) {
            this._checks.push(check);
        };
        AggregateState.prototype.checkInvariants = function () {
            this._checks.forEach(function (c) {
                if (!c.ensure()) {
                    console.log("rule \'" + c.rule + "\' has been violated");
                    throw new InvariantViolatedException(c.rule);
                }
            });
        };
        return AggregateState;
    })(Projection);
    EventStore.AggregateState = AggregateState;
    var Aggregate = (function () {
        function Aggregate(aggregateId, State) {
            this.aggregateId = aggregateId;
            this.State = State;
            this.Events = new Array();
        }
        Aggregate.prototype.RaiseEvent = function (event) {
            event.streamId = this.aggregateId;
            this.Events.push(event);
            this.State.apply(event);
        };
        Aggregate.prototype.getAggregateType = function () {
            return getType(this);
        };
        Aggregate.prototype.getAggregateId = function () {
            return this.aggregateId;
        };
        Aggregate.prototype.getUncommitedEvents = function () {
            return this.Events;
        };
        Aggregate.prototype.checkInvariants = function () {
            this.State.checkInvariants();
        };
        return Aggregate;
    })();
    EventStore.Aggregate = Aggregate;
    var Repository = (function () {
        function Repository() {
        }
        Repository.getById = function (type, id) {
            var aggregate = type.Factory(id);
            // TODO read from stream
            return aggregate;
        };
        Repository.save = function (aggregate) {
            console.log('saving ' + aggregate.getAggregateType() + "[" + aggregate.getAggregateId() + "]");
            aggregate.checkInvariants();
            // TODO save on stream
            aggregate.getUncommitedEvents().forEach(function (e) {
                Bus.Default.publish(e);
            });
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