import { Injectable } from '@angular/core';
import { BaseService } from './base.service';

enum GroupApiUrls {
	get = 'groupApp',
	new = 'groupApp',
	delete = 'groupApp/delete',
	update = 'groupApp/edit',
	get_all = 'groupApp/all',
	app_get = 'app',
	app_new = 'app/index'
}

enum AppApiUrls {
	detail = 'app/details',
	reset_key = 'app/resetkey',
	delete = 'app/delete',
	update = 'app/edit'
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

	getallGroups(params, callback) {
		this.get(this.baseUrl() + GroupApiUrls.get_all, params,
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
		this.post(this.baseUrl() + GroupApiUrls.app_new, JSON.stringify(params), null,
			data => {
				callback(data);
			});
	}

	getApps(params, callback) {
		this.get(this.baseUrl() + GroupApiUrls.app_get, params,
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

	detailApp(params, callback) {
		this.request(AppApiUrls.detail, params, callback);
	}
	resetKey(params, callback) {
		this.request(AppApiUrls.reset_key, params, callback);
	}
	updateApp(body, params, callback) {
		this.post(this.baseUrl() + AppApiUrls.update, body, params, data => {
			callback(data);
		});
	}
	deleteApp(params, callback) {
		this.request(AppApiUrls.delete, params, callback);
	}

}