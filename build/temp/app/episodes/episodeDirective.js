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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9lcGlzb2Rlcy9lcGlzb2RlRGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbInN3ZGIiLCJzd2RiLmRpcmVjdGl2ZXMiLCJzd2RiLmRpcmVjdGl2ZXMuZXBpc29kZURpcmVjdGl2ZSJdLCJtYXBwaW5ncyI6IkFBQUEsb0RBQW9EO0FBQ3BELGtDQUFrQztBQUNsQyxJQUFPLElBQUksQ0FtQ1Y7QUFuQ0QsV0FBTyxJQUFJO0lBQUNBLElBQUFBLFVBQVVBLENBbUNyQkE7SUFuQ1dBLFdBQUFBLFVBQVVBLEVBQ3RCQSxDQUFDQTtRQUNBQztZQUNDQyxNQUFNQSxDQUFDQTtnQkFDTkEsT0FBT0EsRUFBRUEsSUFBSUE7Z0JBQ2JBLFFBQVFBLEVBQUVBLEdBQUdBO2dCQUNiQSxLQUFLQSxFQUFFQTtvQkFDTkEsU0FBU0EsRUFBRUEsR0FBR0E7b0JBQ2RBLGNBQWNBLEVBQUVBLEdBQUdBO2lCQUNuQkE7Z0JBQ0RBLFFBQVFBLEVBQUVBLE9BQU9BO29CQUNoQkEseURBQXlEQTtvQkFDekRBLHNGQUFzRkE7b0JBQ3RGQSx5QkFBeUJBO29CQUN6QkEsK0JBQStCQTtvQkFDL0JBLFVBQVVBO29CQUNWQSxPQUFPQTtvQkFDUEEsUUFBUUE7Z0JBQ1RBLElBQUlBLEVBQUVBLFVBQVNBLEtBQXlCQTtvQkFDdkMsS0FBSyxDQUFDLElBQUksR0FBRyxVQUFTLENBQUM7d0JBQ3RCLEtBQUssQ0FBQyxZQUFZLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDekIsQ0FBQyxDQUFDO2dCQUNILENBQUM7YUFDREEsQ0FBQ0E7UUFDSEEsQ0FBQ0E7UUFBQUQsQ0FBQ0E7UUFRRkEsT0FBT0EsQ0FBQ0EsTUFBTUEsQ0FBQ0EsTUFBTUEsQ0FBQ0E7YUFDcEJBLFNBQVNBLENBQUNBLFNBQVNBLEVBQUVBLGdCQUFnQkEsQ0FBQ0EsQ0FBQ0E7SUFFMUNBLENBQUNBLEVBbkNXRCxVQUFVQSxHQUFWQSxlQUFVQSxLQUFWQSxlQUFVQSxRQW1DckJBO0FBQURBLENBQUNBLEVBbkNNLElBQUksS0FBSixJQUFJLFFBbUNWIiwiZmlsZSI6ImFwcC9lcGlzb2Rlcy9lcGlzb2RlRGlyZWN0aXZlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uLy4uLy4uL3R5cGluZ3MvdHNkLmQudHNcIi8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9hcHAudHNcIiAvPlxyXG5tb2R1bGUgc3dkYi5kaXJlY3RpdmVzXHJcbntcclxuXHRmdW5jdGlvbiBlcGlzb2RlRGlyZWN0aXZlKCkgOiBuZy5JRGlyZWN0aXZlIHtcclxuXHRcdHJldHVybiB7XHJcblx0XHRcdHJlcGxhY2U6IHRydWUsXHJcblx0XHRcdHJlc3RyaWN0OiAnRScsXHJcblx0XHRcdHNjb3BlOiB7XHJcblx0XHRcdFx0J25nTW9kZWwnOiAnPScsXHJcblx0XHRcdFx0J29wZW5DYWxsYmFjayc6ICcmJ1xyXG5cdFx0XHR9LFxyXG5cdFx0XHR0ZW1wbGF0ZTogJzxkaXY+JyArIFxyXG5cdFx0XHRcdCdcdDxhIGhyZWY9XCJcIiBjbGFzcz1cInRodW1ibmFpbFwiIG5nLWNsaWNrPVwib3BlbihuZ01vZGVsKVwiPicgK1xyXG5cdFx0XHRcdCdcdFx0PGltZyBuZy1zcmM9XCJ7e25nTW9kZWwudGh1bWJ9fVwiIGFsdD1cInt7bmdNb2RlbC50aXRsZX19XCIgc3R5bGU9XCJtYXgtaGVpZ2h0OiAzMDBweFwiPicgK1xyXG5cdFx0XHRcdCdcdFx0PGRpdiBjbGFzcz1cImNhcHRpb25cIj4nICtcclxuXHRcdFx0XHQnXHRcdFx0PGgzPnt7bmdNb2RlbC50aXRsZX19PC9oMz4nICtcclxuXHRcdFx0XHQnXHRcdDwvZGl2PicgK1xyXG5cdFx0XHRcdCdcdDwvYT4nICtcclxuXHRcdFx0XHQnPC9kaXY+JyxcclxuXHRcdFx0bGluazogZnVuY3Rpb24oc2NvcGUgOiBJRXBpc29kZURpcmVjdGl2ZSl7XHJcblx0XHRcdFx0c2NvcGUub3BlbiA9IGZ1bmN0aW9uKGUpIHtcclxuXHRcdFx0XHRcdHNjb3BlLm9wZW5DYWxsYmFjaygpKGUpO1xyXG5cdFx0XHRcdH07XHJcblx0XHRcdH1cclxuXHRcdH07XHJcblx0fTtcclxuXHRcclxuXHRpbnRlcmZhY2UgSUVwaXNvZGVEaXJlY3RpdmUgZXh0ZW5kcyBuZy5JU2NvcGVcclxuXHR7XHJcblx0XHRvcGVuQ2FsbGJhY2s6ICgpID0+IChlIDogRXBpc29kZSkgPT4gdm9pZDtcclxuXHRcdG9wZW4gOiAoZTpFcGlzb2RlKSA9PiB2b2lkO1xyXG5cdH1cclxuXHRcclxuXHRhbmd1bGFyLm1vZHVsZSgnc3dkYicpXHJcblx0XHQuZGlyZWN0aXZlKCdlcGlzb2RlJywgZXBpc29kZURpcmVjdGl2ZSk7XHJcblx0XHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=