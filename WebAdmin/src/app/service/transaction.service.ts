import { Injectable } from '@angular/core';
import { BaseService } from './base.service';


enum PlayerApiUrls {
	get = 'iap-transaction',
}

@Injectable()
export class TransactionService extends BaseService {

	getTransactions(param, callback){
		this.get(this.getRestUrl(PlayerApiUrls.get), param, data => {
			callback(Array.isArray(data) ? data : []);
		})
	}
}