(function(){
	function episodesDetailController(){
		var vm = this;
		alert('detail');
	};
	
	angular.module('swdb')
		.controller('episodesDetailController', episodesDetailController);
})();