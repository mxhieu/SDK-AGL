import { Injectable } from '@angular/core';
import { BaseService } from './base.service';

enum TelcoApiUrls {
	get = 'card-item',
	insert = 'card-item',
	delete = 'card-item/delete',
	update = 'card-item/edit'
}

@Injectable()
export class TelcoService extends BaseService {

	getTelcos(param, callback) {
		this.get(this.getRestUrl(TelcoApiUrls.get), param, data => {
			callback(Array.isArray(data) ? data : []);
		})
	}

	insert(param, callback) {
		this.post(this.getRestUrl(TelcoApiUrls.insert), param, null, data => {
			callback(Array.isArray(data) ? data : []);
		});
	}

	update(param, callback) {
		this.post(this.getRestUrl(TelcoApiUrls.update), param, null, data => {
			callback(Array.isArray(data) ? data : []);
		});
	}

	delete(param, callback) {
		this.get(this.getRestUrl(TelcoApiUrls.delete), param, data => {
			callback(Array.isArray(data) ? data : []);
		});
	}

}