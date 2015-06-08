(function(){
	function episodesDetailController($routeParams, $http){
		var vm = this;
		vm.id = $routeParams.id;
		
		$http.get('/api/episode/' + vm.id).success(function(response){
			vm.data = response;
		});
	};
	
	angular.module('swdb')
		.controller('episodesDetailController', episodesDetailController);
})();