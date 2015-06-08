/// <reference path="../../../../typings/tsd.d.ts"/>
/// <reference path="../app.ts" />
module swdb.directives
{
	function episodeDirective() : ng.IDirective {
		return {
			replace: true,
			restrict: 'E',
			scope: {
				'ngModel': '=',
				'openCallback': '&'
			},
			template: '<div>' + 
				'	<a href="" class="thumbnail" ng-click="open(ngModel)">' +
				'		<img ng-src="{{ngModel.thumb}}" alt="{{ngModel.title}}" style="max-height: 300px">' +
				'		<div class="caption">' +
				'			<h3>{{ngModel.title}}</h3>' +
				'		</div>' +
				'	</a>' +
				'</div>',
			link: function(scope : IEpisodeDirective){
				scope.open = function(e) {
					scope.openCallback()(e);
				};
			}
		};
	};
	
	interface IEpisodeDirective extends ng.IScope
	{
		openCallback: () => (e : Episode) => void;
		open : (e:Episode) => void;
	}
	
	angular.module('swdb')
		.directive('episode', episodeDirective);
	
}