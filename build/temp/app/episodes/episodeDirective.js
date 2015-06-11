/// <reference path="../../../../typings/tsd.d.ts"/>
/// <reference path="../app.ts" />
var swdb;
(function (swdb) {
    var directives;
    (function (directives) {
        function episodeDirective() {
            return {
                replace: true,
                restrict: 'E',
                scope: {
                    'ngModel': '=',
                    'openCallback': '&'
                },
                template: '<div>' +
                    '	<a href="" class="thumbnail" ng-click="open(ngModel)">' +
                    '		<img ng-src="{{ngModel.thumb}}" alt="{{ngModel.title}}" style="max-height: 300px">' +
                    '		<div class="caption">' +
                    '			<h3>{{ngModel.title}}</h3>' +
                    '		</div>' +
                    '	</a>' +
                    '</div>',
                link: function (scope) {
                    scope.open = function (e) {
                        scope.openCallback()(e);
                    };
                }
            };
        }
        ;
        angular.module('swdb')
            .directive('episode', episodeDirective);
    })(directives = swdb.directives || (swdb.directives = {}));
})(swdb || (swdb = {}));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9lcGlzb2Rlcy9lcGlzb2RlRGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbInN3ZGIiLCJzd2RiLmRpcmVjdGl2ZXMiLCJzd2RiLmRpcmVjdGl2ZXMuZXBpc29kZURpcmVjdGl2ZSJdLCJtYXBwaW5ncyI6IkFBQUEsb0RBQW9EO0FBQ3BELGtDQUFrQztBQUNsQyxJQUFPLElBQUksQ0FtQ1Y7QUFuQ0QsV0FBTyxJQUFJO0lBQUNBLElBQUFBLFVBQVVBLENBbUNyQkE7SUFuQ1dBLFdBQUFBLFVBQVVBLEVBQ3RCQSxDQUFDQTtRQUNBQztZQUNDQyxNQUFNQSxDQUFDQTtnQkFDTkEsT0FBT0EsRUFBRUEsSUFBSUE7Z0JBQ2JBLFFBQVFBLEVBQUVBLEdBQUdBO2dCQUNiQSxLQUFLQSxFQUFFQTtvQkFDTkEsU0FBU0EsRUFBRUEsR0FBR0E7b0JBQ2RBLGNBQWNBLEVBQUVBLEdBQUdBO2lCQUNuQkE7Z0JBQ0RBLFFBQVFBLEVBQUVBLE9BQU9BO29CQUNoQkEseURBQXlEQTtvQkFDekRBLHNGQUFzRkE7b0JBQ3RGQSx5QkFBeUJBO29CQUN6QkEsK0JBQStCQTtvQkFDL0JBLFVBQVVBO29CQUNWQSxPQUFPQTtvQkFDUEEsUUFBUUE7Z0JBQ1RBLElBQUlBLEVBQUVBLFVBQVNBLEtBQXlCQTtvQkFDdkMsS0FBSyxDQUFDLElBQUksR0FBRyxVQUFTLENBQUM7d0JBQ3RCLEtBQUssQ0FBQyxZQUFZLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDekIsQ0FBQyxDQUFDO2dCQUNILENBQUM7YUFDREEsQ0FBQ0E7UUFDSEEsQ0FBQ0E7UUFBQUQsQ0FBQ0E7UUFRRkEsT0FBT0EsQ0FBQ0EsTUFBTUEsQ0FBQ0EsTUFBTUEsQ0FBQ0E7YUFDcEJBLFNBQVNBLENBQUNBLFNBQVNBLEVBQUVBLGdCQUFnQkEsQ0FBQ0EsQ0FBQ0E7SUFFMUNBLENBQUNBLEVBbkNXRCxVQUFVQSxHQUFWQSxlQUFVQSxLQUFWQSxlQUFVQSxRQW1DckJBO0FBQURBLENBQUNBLEVBbkNNLElBQUksS0FBSixJQUFJLFFBbUNWIiwiZmlsZSI6ImFwcC9lcGlzb2Rlcy9lcGlzb2RlRGlyZWN0aXZlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uLy4uLy4uL3R5cGluZ3MvdHNkLmQudHNcIi8+XG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vYXBwLnRzXCIgLz5cbm1vZHVsZSBzd2RiLmRpcmVjdGl2ZXNcbntcblx0ZnVuY3Rpb24gZXBpc29kZURpcmVjdGl2ZSgpIDogbmcuSURpcmVjdGl2ZSB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdHJlcGxhY2U6IHRydWUsXG5cdFx0XHRyZXN0cmljdDogJ0UnLFxuXHRcdFx0c2NvcGU6IHtcblx0XHRcdFx0J25nTW9kZWwnOiAnPScsXG5cdFx0XHRcdCdvcGVuQ2FsbGJhY2snOiAnJidcblx0XHRcdH0sXG5cdFx0XHR0ZW1wbGF0ZTogJzxkaXY+JyArIFxuXHRcdFx0XHQnXHQ8YSBocmVmPVwiXCIgY2xhc3M9XCJ0aHVtYm5haWxcIiBuZy1jbGljaz1cIm9wZW4obmdNb2RlbClcIj4nICtcblx0XHRcdFx0J1x0XHQ8aW1nIG5nLXNyYz1cInt7bmdNb2RlbC50aHVtYn19XCIgYWx0PVwie3tuZ01vZGVsLnRpdGxlfX1cIiBzdHlsZT1cIm1heC1oZWlnaHQ6IDMwMHB4XCI+JyArXG5cdFx0XHRcdCdcdFx0PGRpdiBjbGFzcz1cImNhcHRpb25cIj4nICtcblx0XHRcdFx0J1x0XHRcdDxoMz57e25nTW9kZWwudGl0bGV9fTwvaDM+JyArXG5cdFx0XHRcdCdcdFx0PC9kaXY+JyArXG5cdFx0XHRcdCdcdDwvYT4nICtcblx0XHRcdFx0JzwvZGl2PicsXG5cdFx0XHRsaW5rOiBmdW5jdGlvbihzY29wZSA6IElFcGlzb2RlRGlyZWN0aXZlKXtcblx0XHRcdFx0c2NvcGUub3BlbiA9IGZ1bmN0aW9uKGUpIHtcblx0XHRcdFx0XHRzY29wZS5vcGVuQ2FsbGJhY2soKShlKTtcblx0XHRcdFx0fTtcblx0XHRcdH1cblx0XHR9O1xuXHR9O1xuXHRcblx0aW50ZXJmYWNlIElFcGlzb2RlRGlyZWN0aXZlIGV4dGVuZHMgbmcuSVNjb3BlXG5cdHtcblx0XHRvcGVuQ2FsbGJhY2s6ICgpID0+IChlIDogRXBpc29kZSkgPT4gdm9pZDtcblx0XHRvcGVuIDogKGU6RXBpc29kZSkgPT4gdm9pZDtcblx0fVxuXHRcblx0YW5ndWxhci5tb2R1bGUoJ3N3ZGInKVxuXHRcdC5kaXJlY3RpdmUoJ2VwaXNvZGUnLCBlcGlzb2RlRGlyZWN0aXZlKTtcblx0XG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9