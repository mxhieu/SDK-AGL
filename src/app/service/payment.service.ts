import { Injectable } from '@angular/core';
import { BaseService } from './base.service';

enum PaymentApiUrls {
	get = 'inapp-item',
	insert = 'inapp-item',
	delete = 'inapp-item/delete',
	update = 'inapp-item/edit'
}

@Injectable()
export class PaymentService extends BaseService {

	getPayments(param, callback) {
		this.get(this.getRestUrl(PaymentApiUrls.get), param, data => {
			callback(Array.isArray(data) ? data : []);
		})
	}

	insert(param, callback) {
		this.post(this.getRestUrl(PaymentApiUrls.insert), param, null, data => {
			callback(Array.isArray(data) ? data : []);
		});
	}

	update(param, callback) {
		this.post(this.getRestUrl(PaymentApiUrls.update), param, null, data => {
			callback(Array.isArray(data) ? data : []);
		});
	}

	delete(param, callback) {
		this.get(this.getRestUrl(PaymentApiUrls.delete), param, data => {
			callback(Array.isArray(data) ? data : []);
		});
	}

}