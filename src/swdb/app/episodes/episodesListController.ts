/// <reference path="../../../../typings/tsd.d.ts"/>

module swdb.controllers
{
	interface IEpisodesListController {
		title: string;
		list: Episode[];
	}

	class EpisodesListController implements IEpisodesListController
	{
		title: string = 'Lista episodi';
		list: Episode[];
		open: (e:Episode) => void;

		constructor(episodeService, $location : ng.ILocationService) {

			episodeService.getList((response: Episode[]) => {
				this.list = response;
			})

			this.open = (e : Episode) => {
				$location.path('episode/' + e.id);
			}
		}
	}

	class Episode
	{
		id: string;
	}

	angular.module('swdb')
		.controller('episodesListController', EpisodesListController);
}