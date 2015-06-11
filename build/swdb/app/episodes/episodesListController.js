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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9lcGlzb2Rlcy9lcGlzb2Rlc0xpc3RDb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbInN3ZGIiLCJzd2RiLmNvbnRyb2xsZXJzIiwic3dkYi5jb250cm9sbGVycy5FcGlzb2Rlc0xpc3RDb250cm9sbGVyIiwic3dkYi5jb250cm9sbGVycy5FcGlzb2Rlc0xpc3RDb250cm9sbGVyLmNvbnN0cnVjdG9yIl0sIm1hcHBpbmdzIjoiQUFBQSxvREFBb0Q7QUFDcEQsaUNBQWlDO0FBQ2pDLHlDQUF5QztBQUV6QyxJQUFPLElBQUksQ0E2QlY7QUE3QkQsV0FBTyxJQUFJO0lBQUNBLElBQUFBLFdBQVdBLENBNkJ0QkE7SUE3QldBLFdBQUFBLFdBQVdBLEVBQ3ZCQSxDQUFDQTtRQU1BQztZQU1DQyxnQ0FDQ0EsY0FBOENBLEVBQzlDQSxTQUErQkE7Z0JBUmpDQyxpQkFrQkNBO2dCQWhCQUEsVUFBS0EsR0FBV0EsZUFBZUEsQ0FBQ0E7Z0JBUS9CQSxjQUFjQSxDQUFDQSxPQUFPQSxDQUFDQSxVQUFDQSxRQUFtQkE7b0JBQzFDQSxLQUFJQSxDQUFDQSxJQUFJQSxHQUFHQSxRQUFRQSxDQUFDQTtnQkFDdEJBLENBQUNBLENBQUNBLENBQUFBO2dCQUVGQSxJQUFJQSxDQUFDQSxJQUFJQSxHQUFHQSxVQUFDQSxDQUFXQTtvQkFDdkJBLFNBQVNBLENBQUNBLElBQUlBLENBQUNBLFVBQVVBLEdBQUdBLENBQUNBLENBQUNBLEVBQUVBLENBQUNBLENBQUNBO2dCQUNuQ0EsQ0FBQ0EsQ0FBQUE7WUFDRkEsQ0FBQ0E7WUFDRkQsNkJBQUNBO1FBQURBLENBbEJBRCxBQWtCQ0MsSUFBQUQ7UUFFREEsT0FBT0EsQ0FBQ0EsTUFBTUEsQ0FBQ0EsTUFBTUEsQ0FBQ0E7YUFDcEJBLFVBQVVBLENBQUNBLHdCQUF3QkEsRUFBRUEsc0JBQXNCQSxDQUFDQSxDQUFDQTtJQUNoRUEsQ0FBQ0EsRUE3QldELFdBQVdBLEdBQVhBLGdCQUFXQSxLQUFYQSxnQkFBV0EsUUE2QnRCQTtBQUFEQSxDQUFDQSxFQTdCTSxJQUFJLEtBQUosSUFBSSxRQTZCViIsImZpbGUiOiJhcHAvZXBpc29kZXMvZXBpc29kZXNMaXN0Q29udHJvbGxlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi8uLi8uLi90eXBpbmdzL3RzZC5kLnRzXCIvPlxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL2FwcC50c1wiLz5cbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCJlcGlzb2RlU2VydmljZS50c1wiLz5cblxubW9kdWxlIHN3ZGIuY29udHJvbGxlcnNcbntcblx0aW50ZXJmYWNlIElFcGlzb2Rlc0xpc3RDb250cm9sbGVyIHtcblx0XHR0aXRsZTogc3RyaW5nO1xuXHRcdGxpc3Q6IEVwaXNvZGVbXTtcblx0fVxuXG5cdGNsYXNzIEVwaXNvZGVzTGlzdENvbnRyb2xsZXIgaW1wbGVtZW50cyBJRXBpc29kZXNMaXN0Q29udHJvbGxlclxuXHR7XG5cdFx0dGl0bGU6IHN0cmluZyA9ICdMaXN0YSBlcGlzb2RpJztcblx0XHRsaXN0OiBFcGlzb2RlW107XG5cdFx0b3BlbjogKGU6RXBpc29kZSkgPT4gdm9pZDtcblxuXHRcdGNvbnN0cnVjdG9yKFxuXHRcdFx0ZXBpc29kZVNlcnZpY2UgOiBzd2RiLnNlcnZpY2VzLklFcGlzb2RlU2VydmljZSxcblx0XHRcdCRsb2NhdGlvbiA6IG5nLklMb2NhdGlvblNlcnZpY2UpIHtcblxuXHRcdFx0ZXBpc29kZVNlcnZpY2UuZ2V0TGlzdCgocmVzcG9uc2U6IEVwaXNvZGVbXSkgPT4ge1xuXHRcdFx0XHR0aGlzLmxpc3QgPSByZXNwb25zZTtcblx0XHRcdH0pXG5cblx0XHRcdHRoaXMub3BlbiA9IChlIDogRXBpc29kZSkgPT4ge1xuXHRcdFx0XHQkbG9jYXRpb24ucGF0aCgnZXBpc29kZS8nICsgZS5pZCk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0YW5ndWxhci5tb2R1bGUoJ3N3ZGInKVxuXHRcdC5jb250cm9sbGVyKCdlcGlzb2Rlc0xpc3RDb250cm9sbGVyJywgRXBpc29kZXNMaXN0Q29udHJvbGxlcik7XG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9