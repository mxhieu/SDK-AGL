import { Injectable } from '@angular/core';
import { BaseService } from './base.service';

enum PlayerApiUrls {
	get = 'player',
}

enum PlayerAdsApiUrls {
	get = 'player-ads',
}

@Injectable()
export class PlayerAdsService extends BaseService {

	getPlayers(param, callback){
		this.get(this.getRestUrl(PlayerApiUrls.get), param, data => {
			callback(Array.isArray(data) ? data : []);
		})
	}

	getAdsPlayers(param, callback){
		this.get(this.getRestUrl(PlayerAdsApiUrls.get), param, data => {
			callback(Array.isArray(data) ? data : []);
		})
	}
}