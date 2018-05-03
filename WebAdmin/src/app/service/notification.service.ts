import { Injectable } from '@angular/core';
import { BaseService } from './base.service';


enum NotificationApiUrls {
	get = 'notification',
}

@Injectable()
export class NotificationService extends BaseService {

	getNotifications(params: any, callback){
		this.get(this.getRestUrl(NotificationApiUrls.get), params, data => {
			callback(Array.isArray(data) ? data : []);
		})
	}
	sendMessage(params: any, callback){
		this.post(this.getRestUrl(NotificationApiUrls.get), JSON.stringify(params),null, data => {
			callback(Array.isArray(data) ? data : []);
		})
	}
}