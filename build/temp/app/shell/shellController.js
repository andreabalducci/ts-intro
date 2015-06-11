/// <reference path="../../../../typings/tsd.d.ts"/>
var swdb;
(function (swdb) {
    var controllers;
    (function (controllers) {
        'use strict';
        var ShellController = (function () {
            function ShellController() {
                this.title = 'Star Wars Database';
            }
            return ShellController;
        })();
        angular.module('swdb')
            .controller('shellController', ShellController);
    })(controllers = swdb.controllers || (swdb.controllers = {}));
})(swdb || (swdb = {}));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGVsbC9zaGVsbENvbnRyb2xsZXIudHMiXSwibmFtZXMiOlsic3dkYiIsInN3ZGIuY29udHJvbGxlcnMiLCJzd2RiLmNvbnRyb2xsZXJzLlNoZWxsQ29udHJvbGxlciIsInN3ZGIuY29udHJvbGxlcnMuU2hlbGxDb250cm9sbGVyLmNvbnN0cnVjdG9yIl0sIm1hcHBpbmdzIjoiQUFBQSxvREFBb0Q7QUFFcEQsSUFBTyxJQUFJLENBZ0JWO0FBaEJELFdBQU8sSUFBSTtJQUFDQSxJQUFBQSxXQUFXQSxDQWdCdEJBO0lBaEJXQSxXQUFBQSxXQUFXQSxFQUFDQSxDQUFDQTtRQUN4QkMsWUFBWUEsQ0FBQ0E7UUFPYkE7WUFFQ0M7Z0JBREFDLFVBQUtBLEdBQVdBLG9CQUFvQkEsQ0FBQ0E7WUFFckNBLENBQUNBO1lBQ0ZELHNCQUFDQTtRQUFEQSxDQUpBRCxBQUlDQyxJQUFBRDtRQUVEQSxPQUFPQSxDQUFDQSxNQUFNQSxDQUFDQSxNQUFNQSxDQUFDQTthQUNwQkEsVUFBVUEsQ0FBQ0EsaUJBQWlCQSxFQUFFQSxlQUFlQSxDQUFDQSxDQUFDQTtJQUNsREEsQ0FBQ0EsRUFoQldELFdBQVdBLEdBQVhBLGdCQUFXQSxLQUFYQSxnQkFBV0EsUUFnQnRCQTtBQUFEQSxDQUFDQSxFQWhCTSxJQUFJLEtBQUosSUFBSSxRQWdCViIsImZpbGUiOiJhcHAvc2hlbGwvc2hlbGxDb250cm9sbGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uLy4uLy4uL3R5cGluZ3MvdHNkLmQudHNcIi8+XG5cbm1vZHVsZSBzd2RiLmNvbnRyb2xsZXJzIHtcblx0J3VzZSBzdHJpY3QnO1xuXG5cdGludGVyZmFjZSBJU2hlbGxDb250cm9sbGVyXG5cdHtcblx0XHR0aXRsZTogc3RyaW5nO1xuXHR9XG5cblx0Y2xhc3MgU2hlbGxDb250cm9sbGVyIGltcGxlbWVudHMgSVNoZWxsQ29udHJvbGxlcntcblx0XHR0aXRsZTogc3RyaW5nID0gJ1N0YXIgV2FycyBEYXRhYmFzZSc7XG5cdFx0Y29uc3RydWN0b3IoKSB7XG5cdFx0fVxuXHR9XG5cdFxuXHRhbmd1bGFyLm1vZHVsZSgnc3dkYicpXG5cdFx0LmNvbnRyb2xsZXIoJ3NoZWxsQ29udHJvbGxlcicsIFNoZWxsQ29udHJvbGxlcik7XG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9