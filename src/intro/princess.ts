module StarWars {
	export interface IPrincess {
		name: string
	}

	export class Princess implements IPrincess {
		constructor(public name: string, public bio: string) {

		}
	}

}