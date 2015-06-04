module StarWars {
	export function inspect(target, key, descriptor) {
		//		console.log(`inspection\ntarget:${target}\n${key}`);
		
		var original = descriptor.value;
		descriptor.value = function() {
			console.log(' ')
			console.log('The Force is strong with this one');
			original();
			console.log('The Force will be with you, always');
			console.log(' ')
		}
	}
}