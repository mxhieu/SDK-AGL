import { Injectable } from '@angular/core';
import { BaseService } from './base.service';


enum PlayerApiUrls {
	get = 'player',
}

@Injectable()
export class PlayerService extends BaseService {

	getPlayers(param, callback){
		this.get(this.getRestUrl(PlayerApiUrls.get), param, data => {
			callback(Array.isArray(data) ? data : []);
		})
	}
}