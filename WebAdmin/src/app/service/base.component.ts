export abstract class BaseComponent {

	protected getUrl(icon: string): string {
		return 'http://apitracking.bonanhem.com/upload/image/' + icon;
	}

}