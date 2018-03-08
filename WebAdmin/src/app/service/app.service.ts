import { Injectable } from '@angular/core';
import { BaseService } from './base.service';

enum AppApiUrls {
	detail = 'app/details',
	reset_key = 'app/resetkey',
	delete = 'app/delete',
	update = 'app/edit'
}

@Injectable()
export class AppService extends BaseService {

	detail(params, callback) {
		this.request(AppApiUrls.detail, params, callback);
	}
	resetKey(params, callback) {
		this.request(AppApiUrls.reset_key, params, callback);
	}
	update(body, params, callback) {
		this.post(AppApiUrls.update, body, params, data => {
			callback(data);
		});
	}
	delete(params, callback) {
		this.request(AppApiUrls.delete, params, callback);
	}

}