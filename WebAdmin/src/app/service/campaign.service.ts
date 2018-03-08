import { Injectable } from '@angular/core';
import { BaseService } from './base.service';

enum CampaignApiUrls {
	get = 'campaign',
	new = 'campaign',
	delete = 'campaign/delete',
	update = 'campaign/edit',
}

@Injectable()
export class CampaignService extends BaseService {


	getCampaigns(params, callback) {
		this.get(this.getRestUrl(CampaignApiUrls.get), params, data => { callback(Array.isArray(data) ? data : []); });
	}

	insert(params, callback) {
		this.post(this.getRestUrl(CampaignApiUrls.new), JSON.stringify(params), null, data => { callback(data); });
	}
	update(params, callback) {
		this.post(this.getRestUrl(CampaignApiUrls.update), JSON.stringify(params), null, data => { callback(data); });
	}
	delete(params, callback) {
		this.get(this.getRestUrl(CampaignApiUrls.delete), params, data => { callback(data); });
	}
}