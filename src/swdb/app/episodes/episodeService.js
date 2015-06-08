(function(){

	function episodeService($http){
		this.getList = function(successFn) {
			return $http.get('/api/episodes').success(successFn);
		};

		this.get = function(id, successFn) {
			return $http.get('/api/episode/' + id).success(successFn);
		};
	}

	angular.module('swdb')
	.service('episodeService', episodeService);
})();