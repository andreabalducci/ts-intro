/// <reference path="../../../../typings/tsd.d.ts"/>
/// <reference path="../app.ts"/>

module swdb.services {
	export interface IEpisodeService {
		getList: (successFn: (r: swdb.Episode[]) => void) => void;
		get: (id: string, successFn: (r: Episode[]) => void) => void;
	}

	class EpisodeService implements IEpisodeService {
		getList: (successFn: (r: Episode[]) => void) => void;
		get: (id: string, successFn: (r: Episode[]) => void) => void;

		constructor($http: ng.IHttpService) {
			this.getList = (successFn: (r: Episode[]) => void) => {
				$http.get('/api/episodes').success(successFn);
			}

			this.get = (id, successFn: (r: Episode[]) => void) => {
				$http.get('/api/episode/' + id).success(successFn);
			}
		}
	}

	angular.module('swdb')
		.service('episodeService', EpisodeService);
}