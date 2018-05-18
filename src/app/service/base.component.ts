import { PrivateService } from './service.private';

export abstract class BaseComponent {

	private defaultIcon() : string {
		return "../assets/img/ico_app_default.png";
	}
	public onImageLoadedError(event){
		event.target.src = this.defaultIcon();
	}

	public getUrl(icon: string): string {
		if(icon)
			return PrivateService.BASE_RESOURCE_URL + icon;
		return this.defaultIcon();
	}

}