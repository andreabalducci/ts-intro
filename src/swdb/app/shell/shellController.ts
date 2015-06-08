/// <reference path="../../../../typings/tsd.d.ts"/>

module swdb.controllers {
	'use strict';

	interface IShellController
	{
		title: string;
	}

	class ShellController implements IShellController{
		title: string = 'Star Wars Database';
		constructor() {
		}
	}
	
	angular.module('swdb')
		.controller('shellController', ShellController);
}