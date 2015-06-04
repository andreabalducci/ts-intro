module StarWars {
	export interface IJedi {
		name: string;
	}

	export class Jedi implements IJedi {
		constructor(public name: string, public bio: string) {

		}
	}
}