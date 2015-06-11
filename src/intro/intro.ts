// http://channel9.msdn.com/events/Build/2015/3-644

function sortByName(a){
	var result = a.slice(0);
	result.sort(function(x,y){
		return x.name.localCompare(y.name);
	})
}

sortByName(5);