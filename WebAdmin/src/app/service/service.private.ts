import { Injectable } from '@angular/core';

@Injectable()
export class PrivateService {


	// static BASE_DOMAIN = 'http://dev.sdkapi.100d.mobi/';
	
	// static BASE_DOMAIN = 'http://sdkapi.100d.mobi/';
	static BASE_DOMAIN = 'http://192.168.0.159:8080/';
	static BASE_URL = PrivateService.BASE_DOMAIN + 'v1/';
	static BASE_UPLOAD_URL = PrivateService.BASE_DOMAIN + 'v1/upload';
	static BASE_RESOURCE_URL = PrivateService.BASE_DOMAIN + 'upload/image/';
	static BASE_UPLOAD_URL_FILE = PrivateService.BASE_DOMAIN + 'v1/upload/file';
}