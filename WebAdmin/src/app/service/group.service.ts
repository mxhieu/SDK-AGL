import { Injectable } from '@angular/core';
import { BaseService } from './base.service';


enum GroupApiUrls {
	get = 'groupApp',
	new = 'groupApp',
	delete = 'groupApp/delete',
	update = 'groupApp/edit'
}

@Injectable()
export class GroupService extends BaseService {

	KEY_GROUP_SETTING: string = 'KEY_GROUP_SETTING';

	saveGroupSetting(settings: any) {
		this.setCookie(this.KEY_GROUP_SETTING, JSON.stringify(settings));
	}
	getGroupSetting(): any {
		return this.getCookie(this.KEY_GROUP_SETTING);
	}

	newGroup(params: any, callback) {
		
		if(params.is_active)
			params.is_active = 1;
		else
			params.is_active = 0;

		this.post(this.baseUrl() + GroupApiUrls.new, JSON.stringify(params), null,
			data => {
				callback(data);
			});
	}
	getGroups(params, callback) {
		this.get(this.baseUrl() + GroupApiUrls.get, params,
			data => {
				callback(Array.isArray(data) ? data : []);
			});
	}

	deleteGroup(params, callback) {
		this.get(this.baseUrl() + GroupApiUrls.delete, params,
			data => {
				callback(Array.isArray(data) ? data : []);
			});
	}

	newApp(params: any, callback) {
		this.post(this.config.API_APP_NEW, JSON.stringify(params), null,
			data => {
				callback(data);
			});
	}

	getApps(params, callback) {
		this.get(this.config.API_APP_GET, params,
			data => {
				callback(Array.isArray(data) ? data : []);
			});
	}
	updateGroup(params, callback) {
		if(params.is_active)
			params.is_active = 1;
		else
			params.is_active = 0;
		this.post(this.baseUrl() + GroupApiUrls.update, params, null,
			data => {
				callback(Array.isArray(data) ? data : []);
			});
	}

}