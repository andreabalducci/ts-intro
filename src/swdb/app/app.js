/// <reference path="../../../typings/angularjs/angular.d.ts"/>
(function(){
	'use strict';
	
	angular.module('swdb', ['ngRoute'])
	.config(configure);
	
	function configure($routeProvider) {
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
})();