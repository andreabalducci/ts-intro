/// <reference path="../../../../typings/tsd.d.ts"/>
(function(){
	'use strict';
	
	angular.module('swdb')
		.controller('shellController', shellController);
	
	
	function shellController($http){
		var vm = this;
		vm.title="Star Wars Database";
		vm.data = [];
	}
})();