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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hcHAudHMiXSwibmFtZXMiOlsic3dkYiIsInN3ZGIuRXBpc29kZSIsInN3ZGIuRXBpc29kZS5jb25zdHJ1Y3RvciJdLCJtYXBwaW5ncyI6IkFBQUEsaURBQWlEO0FBRWpELElBQU8sSUFBSSxDQXdCVjtBQXhCRCxXQUFPLElBQUksRUFDWCxDQUFDO0lBQ0FBLElBQUlBLFNBQVNBLEdBQUdBLFVBQUNBLGNBQXdDQTtRQUN4REEsY0FBY0E7YUFDWkEsSUFBSUEsQ0FBQ0EsZUFBZUEsRUFBRUE7WUFDdEJBLFdBQVdBLEVBQUVBLHdCQUF3QkE7WUFDckNBLFVBQVVBLEVBQUVBLHdCQUF3QkE7WUFDcENBLFlBQVlBLEVBQUVBLFVBQVVBO1NBQ3hCQSxDQUFDQTthQUNEQSxJQUFJQSxDQUFDQSxjQUFjQSxFQUFFQTtZQUNyQkEsV0FBV0EsRUFBRUEsMEJBQTBCQTtZQUN2Q0EsVUFBVUEsRUFBRUEsMEJBQTBCQTtZQUN0Q0EsWUFBWUEsRUFBRUEsUUFBUUE7U0FDdEJBLENBQUNBO2FBQ0RBLFNBQVNBLENBQUNBLGVBQWVBLENBQUNBLENBQUNBO0lBQzlCQSxDQUFDQSxDQUFBQTtJQUVEQSxPQUFPQSxDQUFDQSxNQUFNQSxDQUFDQSxNQUFNQSxFQUFFQSxDQUFDQSxTQUFTQSxDQUFDQSxDQUFDQTtTQUNqQ0EsTUFBTUEsQ0FBQ0EsU0FBU0EsQ0FBQ0EsQ0FBQ0E7SUFFcEJBO1FBQUFDO1FBR0FDLENBQUNBO1FBQURELGNBQUNBO0lBQURBLENBSEFELEFBR0NDLElBQUFEO0lBSFlBLFlBQU9BLFVBR25CQSxDQUFBQTtBQUNGQSxDQUFDQSxFQXhCTSxJQUFJLEtBQUosSUFBSSxRQXdCViIsImZpbGUiOiJhcHAvYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uLy4uL3R5cGluZ3MvdHNkLmQudHNcIi8+XG5cbm1vZHVsZSBzd2RiXG57XG5cdHZhciBjb25maWd1cmUgPSAoJHJvdXRlUHJvdmlkZXIgOiBuZy5yb3V0ZS5JUm91dGVQcm92aWRlcikgPT4ge1xuXHRcdCRyb3V0ZVByb3ZpZGVyXG5cdFx0XHQud2hlbignL2VwaXNvZGVzTGlzdCcsIHtcblx0XHRcdFx0dGVtcGxhdGVVcmw6ICdhcHAvZXBpc29kZXMvbGlzdC5odG1sJyxcblx0XHRcdFx0Y29udHJvbGxlcjogJ2VwaXNvZGVzTGlzdENvbnRyb2xsZXInLFxuXHRcdFx0XHRjb250cm9sbGVyQXM6ICdlcGlzb2Rlcydcblx0XHRcdH0pXG5cdFx0XHQud2hlbignL2VwaXNvZGUvOmlkJywge1xuXHRcdFx0XHR0ZW1wbGF0ZVVybDogJ2FwcC9lcGlzb2Rlcy9kZXRhaWwuaHRtbCcsXG5cdFx0XHRcdGNvbnRyb2xsZXI6ICdlcGlzb2Rlc0RldGFpbENvbnRyb2xsZXInLFxuXHRcdFx0XHRjb250cm9sbGVyQXM6ICdkZXRhaWwnXG5cdFx0XHR9KVxuXHRcdFx0Lm90aGVyd2lzZSgnL2VwaXNvZGVzTGlzdCcpO1xuXHR9XG5cblx0YW5ndWxhci5tb2R1bGUoJ3N3ZGInLCBbJ25nUm91dGUnXSlcblx0XHQuY29uZmlnKGNvbmZpZ3VyZSk7XG5cdFx0XG5cdGV4cG9ydCBjbGFzcyBFcGlzb2RlXG5cdHtcblx0XHRpZDogc3RyaW5nO1xuXHR9XG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9