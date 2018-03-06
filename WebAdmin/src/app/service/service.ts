import { Injectable } from '@angular/core';
import { Cookie } from 'ng2-cookies';
import { BaseService } from './base.service';

@Injectable()
export class Service extends BaseService {

	

	/* User */
	

	login(params) {
		this.post(this.config.API_LOGIN, null, params, data => {
			this.setToken(data.authorization);
			this.setAuth(JSON.stringify(data));
			this.moveToApps();
		});
	}

	
	/* Router */
	
	moveToApps() {
		this.router.moveToApps();
	}

	getUrl(icon: string): string {
		return 'http://apitracking.bonanhem.com/upload/image/' + icon;
	}

	getSources(callback) {
		this.get(this.config.API_SOURCE_LIST,
			{
				'app_id': this.getAppId(),
				'pg_page': 1,
				'pg_size': 100,
				'st_col': 'sourcename',
				'st_type': 1,
			},
			data => {
				callback(data);
			});
	}
}