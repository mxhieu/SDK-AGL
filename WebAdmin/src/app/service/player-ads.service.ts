import { Injectable } from '@angular/core';
import { BaseService } from './base.service';

enum PlayerApiUrls {
	get = 'player',
}

enum PlayerAdsApiUrls {
	get = 'player-ads-config',
	insert = 'player-ads-config',
	edit = 'player-ads-config/edit',
	delete = 'player-ads-config/delete'
}

@Injectable()
export class PlayerAdsService extends BaseService {

	getPlayers(param, callback) {
		this.get(this.getRestUrl(PlayerApiUrls.get), param, data => {
			callback(Array.isArray(data) ? data : []);
		})
	}

	getAdsPlayers(param, callback) {
		this.get(this.getRestUrl(PlayerAdsApiUrls.get), param, data => {
			callback(data);
		})
	}
	insert(param, callback) {
		this.post(this.getRestUrl(PlayerAdsApiUrls.insert), param, null, data => {
			callback(data);
		});
	}

	update(param, callback) {
		this.post(this.getRestUrl(PlayerAdsApiUrls.edit), param, null, data => {
			callback(data);
		});
	}

	delete(param, callback) {
		this.get(this.getRestUrl(PlayerAdsApiUrls.delete), param, data => {
			callback(data);
		});
	}
}