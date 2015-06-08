(function(){
	angular.module('swdb')
	.filter('chunk', function(){
		return function(val, size){
			var newArray = [];
			for (var i = 0; i <= val.length; i+=size)
			{
				newArray.push(val.slice(i, i + size));
			}
			return newArray;
		};
	});
})();