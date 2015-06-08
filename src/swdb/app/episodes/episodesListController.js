(function(){

	function episodesListController(episodeService, $location){
		var vm = this;
		vm.title = 'Lista episodi';
		vm.list = [];

		episodeService.getList(function(response){
			vm.list = response;
		});

		vm.open = function(e){
			$location.path('episode/' + e.id);
		};
	}

	angular.module('swdb')
		.controller('episodesListController', episodesListController);
})();