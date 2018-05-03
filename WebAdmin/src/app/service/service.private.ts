import { Injectable } from '@angular/core';

@Injectable()
export class PrivateService {


	/*static BASE_DOMAIN = 'http://apitracking.bonanhem.com/';*/
	
	static BASE_DOMAIN = 'http://sdkapi.100d.mobi/';
	
	/*static BASE_URL = 'http://sdkapi.100d.mobi/v1/';
	static BASE_UPLOAD_URL = 'http://sdkapi.100d.mobi/v1/upload';
	static BASE_RESOURCE_URL = 'http://sdkapi.100d.mobi/upload/image/';*/

	static BASE_URL = PrivateService.BASE_DOMAIN + 'v1/';
	static BASE_UPLOAD_URL = PrivateService.BASE_DOMAIN + 'v1/upload';
	static BASE_RESOURCE_URL = PrivateService.BASE_DOMAIN + 'upload/image/';
}