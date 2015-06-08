/// <reference path="../../../../typings/tsd.d.ts"/>
/// <reference path="../app.ts"/>
/// <reference path="episodeService.ts"/>
var swdb;
(function (swdb) {
    var controllers;
    (function (controllers) {
        var EpisodesListController = (function () {
            function EpisodesListController(episodeService, $location) {
                var _this = this;
                this.title = 'Lista episodi';
                episodeService.getList(function (response) {
                    _this.list = response;
                });
                this.open = function (e) {
                    $location.path('episode/' + e.id);
                };
            }
            return EpisodesListController;
        })();
        angular.module('swdb')
            .controller('episodesListController', EpisodesListController);
    })(controllers = swdb.controllers || (swdb.controllers = {}));
})(swdb || (swdb = {}));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9lcGlzb2Rlcy9lcGlzb2Rlc0xpc3RDb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbInN3ZGIiLCJzd2RiLmNvbnRyb2xsZXJzIiwic3dkYi5jb250cm9sbGVycy5FcGlzb2Rlc0xpc3RDb250cm9sbGVyIiwic3dkYi5jb250cm9sbGVycy5FcGlzb2Rlc0xpc3RDb250cm9sbGVyLmNvbnN0cnVjdG9yIl0sIm1hcHBpbmdzIjoiQUFBQSxvREFBb0Q7QUFDcEQsaUNBQWlDO0FBQ2pDLHlDQUF5QztBQUV6QyxJQUFPLElBQUksQ0E2QlY7QUE3QkQsV0FBTyxJQUFJO0lBQUNBLElBQUFBLFdBQVdBLENBNkJ0QkE7SUE3QldBLFdBQUFBLFdBQVdBLEVBQ3ZCQSxDQUFDQTtRQU1BQztZQU1DQyxnQ0FDQ0EsY0FBOENBLEVBQzlDQSxTQUErQkE7Z0JBUmpDQyxpQkFrQkNBO2dCQWhCQUEsVUFBS0EsR0FBV0EsZUFBZUEsQ0FBQ0E7Z0JBUS9CQSxjQUFjQSxDQUFDQSxPQUFPQSxDQUFDQSxVQUFDQSxRQUFtQkE7b0JBQzFDQSxLQUFJQSxDQUFDQSxJQUFJQSxHQUFHQSxRQUFRQSxDQUFDQTtnQkFDdEJBLENBQUNBLENBQUNBLENBQUFBO2dCQUVGQSxJQUFJQSxDQUFDQSxJQUFJQSxHQUFHQSxVQUFDQSxDQUFXQTtvQkFDdkJBLFNBQVNBLENBQUNBLElBQUlBLENBQUNBLFVBQVVBLEdBQUdBLENBQUNBLENBQUNBLEVBQUVBLENBQUNBLENBQUNBO2dCQUNuQ0EsQ0FBQ0EsQ0FBQUE7WUFDRkEsQ0FBQ0E7WUFDRkQsNkJBQUNBO1FBQURBLENBbEJBRCxBQWtCQ0MsSUFBQUQ7UUFFREEsT0FBT0EsQ0FBQ0EsTUFBTUEsQ0FBQ0EsTUFBTUEsQ0FBQ0E7YUFDcEJBLFVBQVVBLENBQUNBLHdCQUF3QkEsRUFBRUEsc0JBQXNCQSxDQUFDQSxDQUFDQTtJQUNoRUEsQ0FBQ0EsRUE3QldELFdBQVdBLEdBQVhBLGdCQUFXQSxLQUFYQSxnQkFBV0EsUUE2QnRCQTtBQUFEQSxDQUFDQSxFQTdCTSxJQUFJLEtBQUosSUFBSSxRQTZCViIsImZpbGUiOiJhcHAvZXBpc29kZXMvZXBpc29kZXNMaXN0Q29udHJvbGxlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi8uLi8uLi90eXBpbmdzL3RzZC5kLnRzXCIvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vYXBwLnRzXCIvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiZXBpc29kZVNlcnZpY2UudHNcIi8+XHJcblxyXG5tb2R1bGUgc3dkYi5jb250cm9sbGVyc1xyXG57XHJcblx0aW50ZXJmYWNlIElFcGlzb2Rlc0xpc3RDb250cm9sbGVyIHtcclxuXHRcdHRpdGxlOiBzdHJpbmc7XHJcblx0XHRsaXN0OiBFcGlzb2RlW107XHJcblx0fVxyXG5cclxuXHRjbGFzcyBFcGlzb2Rlc0xpc3RDb250cm9sbGVyIGltcGxlbWVudHMgSUVwaXNvZGVzTGlzdENvbnRyb2xsZXJcclxuXHR7XHJcblx0XHR0aXRsZTogc3RyaW5nID0gJ0xpc3RhIGVwaXNvZGknO1xyXG5cdFx0bGlzdDogRXBpc29kZVtdO1xyXG5cdFx0b3BlbjogKGU6RXBpc29kZSkgPT4gdm9pZDtcclxuXHJcblx0XHRjb25zdHJ1Y3RvcihcclxuXHRcdFx0ZXBpc29kZVNlcnZpY2UgOiBzd2RiLnNlcnZpY2VzLklFcGlzb2RlU2VydmljZSxcclxuXHRcdFx0JGxvY2F0aW9uIDogbmcuSUxvY2F0aW9uU2VydmljZSkge1xyXG5cclxuXHRcdFx0ZXBpc29kZVNlcnZpY2UuZ2V0TGlzdCgocmVzcG9uc2U6IEVwaXNvZGVbXSkgPT4ge1xyXG5cdFx0XHRcdHRoaXMubGlzdCA9IHJlc3BvbnNlO1xyXG5cdFx0XHR9KVxyXG5cclxuXHRcdFx0dGhpcy5vcGVuID0gKGUgOiBFcGlzb2RlKSA9PiB7XHJcblx0XHRcdFx0JGxvY2F0aW9uLnBhdGgoJ2VwaXNvZGUvJyArIGUuaWQpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRhbmd1bGFyLm1vZHVsZSgnc3dkYicpXHJcblx0XHQuY29udHJvbGxlcignZXBpc29kZXNMaXN0Q29udHJvbGxlcicsIEVwaXNvZGVzTGlzdENvbnRyb2xsZXIpO1xyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9