(function(){

	function episodeDirective() {
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
			link: function(scope){
				scope.open = function(e) {
					scope.openCallback()(e);
				};
			}
		};
	};

	angular.module('swdb')
		.directive('episode', episodeDirective);
})();