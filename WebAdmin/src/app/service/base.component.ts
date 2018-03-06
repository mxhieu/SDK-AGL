
export abstract class BaseComponent {

	constructor() {

	}

	protected getUrl(icon: string): string {
		return 'http://apitracking.bonanhem.com/upload/image/' + icon;
	}

}