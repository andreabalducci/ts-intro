/// <reference path="../../../typings/tsd.d.ts"/>

module swdb
{
	var configure = ($routeProvider : ng.route.IRouteProvider) => {
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
	}

	angular.module('swdb', ['ngRoute'])
		.config(configure);
		
	export class Episode
	{
		id: string;
	}
}