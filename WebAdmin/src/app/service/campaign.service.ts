import { Injectable } from '@angular/core';
import { BaseService } from './base.service';

enum CampaignApiUrls {
	get = 'campaign',
	new = 'campaign',
	delete = 'campaign/delete',
	update = 'campaign/edit',
}

enum AdsApiUrls {
	get = 'campaign-ad',
	insert='campaign-ad',
	update='campaign-ad/edit',
	delete='campaign-ad/delete'
}

@Injectable()
export class CampaignService extends BaseService {

	private CAMPAIGN : string = "CAMPAIGN";

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

	getAds(params, callback) {
		this.get(this.getRestUrl(AdsApiUrls.get), params, data => { callback(Array.isArray(data) ? data : []); });
	}

	createAd(params, callback) {
		this.post(this.getRestUrl(AdsApiUrls.insert), JSON.stringify(params), null, data => { callback(data); });
	}

	updateAd(params, callback) {
		this.post(this.getRestUrl(AdsApiUrls.update), JSON.stringify(params), null, data => { callback(data); });
	}

	deleteAd(params, callback) {
		this.get(this.getRestUrl(AdsApiUrls.delete), params, data => { callback(data); });
	}
	moveToAds(campaign: any){
		this.setCookie(this.CAMPAIGN, JSON.stringify(campaign));
		this.router.moveToAds();
	}
	moveToCampaigns(){
		this.router.moveToCampaigns();
	}
	getCampaign(): string {
		return this.getCookie(this.CAMPAIGN);
	}
	removeCampaign(){
		this.removeCookie(this.CAMPAIGN);
	}
	getAdType(){
		return [
			{ 'id': 1, 'name':'Banner' },
			{ 'id': 1, 'name':'Facebook' },
			{ 'id': 1, 'name':'Banner' }
		];
	}
}