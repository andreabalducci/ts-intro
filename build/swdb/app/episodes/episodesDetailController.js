(function(){

	function episodesDetailController($routeParams, episodeService){
		var vm = this;
		vm.id = $routeParams.id;

		episodeService.get(vm.id, function(response) {
			vm.data = response;
		});
	};

	angular.module('swdb')
		.controller('episodesDetailController', episodesDetailController);
})();