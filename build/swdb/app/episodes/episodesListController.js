(function(){

	function episodesListController($http, $location){
		var vm = this;
		vm.title = 'Lista episodi';
		vm.list = [];
			
		$http.get('/api/episodes').success(function(response){
			vm.list = response;
		});
		
		vm.open = function(e){
			$location.path('episode/' + e.id);
		};
	}

	angular.module('swdb')
		.controller('episodesListController', episodesListController);
})();