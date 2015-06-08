/// <reference path="../../../typings/tsd.d.ts"/>
var swdb;
(function (swdb) {
    var configure = function ($routeProvider) {
        $routeProvider
            .when('/episodesList', {
            templateUrl: 'app/episodes/list.html',
            controller: 'episodesListController',
            controllerAs: 'episodes'
        })
            .when('/episode/:id', {
            templateUrl: 'app/episodes/detail.html',
            controller: 'episodesDetailController',
            controllerAs: 'detail'
        })
            .otherwise('/episodesList');
    };
    angular.module('swdb', ['ngRoute'])
        .config(configure);
    var Episode = (function () {
        function Episode() {
        }
        return Episode;
    })();
    swdb.Episode = Episode;
})(swdb || (swdb = {}));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hcHAudHMiXSwibmFtZXMiOlsic3dkYiIsInN3ZGIuRXBpc29kZSIsInN3ZGIuRXBpc29kZS5jb25zdHJ1Y3RvciJdLCJtYXBwaW5ncyI6IkFBQUEsaURBQWlEO0FBRWpELElBQU8sSUFBSSxDQXdCVjtBQXhCRCxXQUFPLElBQUksRUFDWCxDQUFDO0lBQ0FBLElBQUlBLFNBQVNBLEdBQUdBLFVBQUNBLGNBQXdDQTtRQUN4REEsY0FBY0E7YUFDWkEsSUFBSUEsQ0FBQ0EsZUFBZUEsRUFBRUE7WUFDdEJBLFdBQVdBLEVBQUVBLHdCQUF3QkE7WUFDckNBLFVBQVVBLEVBQUVBLHdCQUF3QkE7WUFDcENBLFlBQVlBLEVBQUVBLFVBQVVBO1NBQ3hCQSxDQUFDQTthQUNEQSxJQUFJQSxDQUFDQSxjQUFjQSxFQUFFQTtZQUNyQkEsV0FBV0EsRUFBRUEsMEJBQTBCQTtZQUN2Q0EsVUFBVUEsRUFBRUEsMEJBQTBCQTtZQUN0Q0EsWUFBWUEsRUFBRUEsUUFBUUE7U0FDdEJBLENBQUNBO2FBQ0RBLFNBQVNBLENBQUNBLGVBQWVBLENBQUNBLENBQUNBO0lBQzlCQSxDQUFDQSxDQUFBQTtJQUVEQSxPQUFPQSxDQUFDQSxNQUFNQSxDQUFDQSxNQUFNQSxFQUFFQSxDQUFDQSxTQUFTQSxDQUFDQSxDQUFDQTtTQUNqQ0EsTUFBTUEsQ0FBQ0EsU0FBU0EsQ0FBQ0EsQ0FBQ0E7SUFFcEJBO1FBQUFDO1FBR0FDLENBQUNBO1FBQURELGNBQUNBO0lBQURBLENBSEFELEFBR0NDLElBQUFEO0lBSFlBLFlBQU9BLFVBR25CQSxDQUFBQTtBQUNGQSxDQUFDQSxFQXhCTSxJQUFJLEtBQUosSUFBSSxRQXdCViIsImZpbGUiOiJhcHAvYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uLy4uL3R5cGluZ3MvdHNkLmQudHNcIi8+XHJcblxyXG5tb2R1bGUgc3dkYlxyXG57XHJcblx0dmFyIGNvbmZpZ3VyZSA9ICgkcm91dGVQcm92aWRlciA6IG5nLnJvdXRlLklSb3V0ZVByb3ZpZGVyKSA9PiB7XHJcblx0XHQkcm91dGVQcm92aWRlclxyXG5cdFx0XHQud2hlbignL2VwaXNvZGVzTGlzdCcsIHtcclxuXHRcdFx0XHR0ZW1wbGF0ZVVybDogJ2FwcC9lcGlzb2Rlcy9saXN0Lmh0bWwnLFxyXG5cdFx0XHRcdGNvbnRyb2xsZXI6ICdlcGlzb2Rlc0xpc3RDb250cm9sbGVyJyxcclxuXHRcdFx0XHRjb250cm9sbGVyQXM6ICdlcGlzb2RlcydcclxuXHRcdFx0fSlcclxuXHRcdFx0LndoZW4oJy9lcGlzb2RlLzppZCcsIHtcclxuXHRcdFx0XHR0ZW1wbGF0ZVVybDogJ2FwcC9lcGlzb2Rlcy9kZXRhaWwuaHRtbCcsXHJcblx0XHRcdFx0Y29udHJvbGxlcjogJ2VwaXNvZGVzRGV0YWlsQ29udHJvbGxlcicsXHJcblx0XHRcdFx0Y29udHJvbGxlckFzOiAnZGV0YWlsJ1xyXG5cdFx0XHR9KVxyXG5cdFx0XHQub3RoZXJ3aXNlKCcvZXBpc29kZXNMaXN0Jyk7XHJcblx0fVxyXG5cclxuXHRhbmd1bGFyLm1vZHVsZSgnc3dkYicsIFsnbmdSb3V0ZSddKVxyXG5cdFx0LmNvbmZpZyhjb25maWd1cmUpO1xyXG5cdFx0XHJcblx0ZXhwb3J0IGNsYXNzIEVwaXNvZGVcclxuXHR7XHJcblx0XHRpZDogc3RyaW5nO1xyXG5cdH1cclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==