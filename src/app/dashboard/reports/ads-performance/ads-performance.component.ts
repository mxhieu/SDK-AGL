import { Component, OnInit, OnDestroy } from '@angular/core';
import { BaseComponent } from '../../../service/base.component';
import { CampaignService } from '../../../service/campaign.service';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { GroupService } from '../../../service/group.service';
@Component({
	selector: 'app-ads-performance',
	templateUrl: './ads-performance.component.html',
	styleUrls: ['./ads-performance.component.scss']
})
export class AdsPerformanceComponent extends BaseComponent implements OnInit, OnDestroy {
	headers: any; paging: any; search = { field: 'name', term: '' };
	ads = []; onerow: any; isEdit: boolean; isHidden: boolean;
	cp: any; campaigns = []; startDate: Date; endDate: Date = new Date();
	apps: any; app = { 'app_id': '', 'os': '', 'version': '' };
	facebookHeaders: any; facebookAds: any; isnext: any; googleAds =  []; googleHeaders : any;

	constructor(private gService: GroupService, private service: CampaignService) {
		super();
		this.paging = this.service.defaultPaging('start_date');
		this.startDate = this.service.fromDate(this.endDate.getFullYear(), this.endDate.getMonth(), this.endDate.getDate());
		this.headers = [
			{ id: 'name', name: 'Name', is_search: 1, st_col: 'name', st_type: 1 },
			{ id: 'desc', name: 'Description', is_search: 1, st_col: 'desc', st_type: 1 },
			{ id: 'utm_source', name: 'Utm Source', is_search: 1, st_col: 'utm_source', st_type: 1 },
			{ id: 'utm_medium', name: 'Utm Medium', is_search: 1, st_col: 'utm_medium', st_type: 1 },
			{ id: 'utm_term', name: 'Utm Term', is_search: 1, st_col: 'utm_term', st_type: 1 },
			{ id: 'utm_content', name: 'Utm Content', is_search: 1, st_col: 'utm_content', st_type: 1 },
			{ id: 'utm_campaign', name: 'Utm Campaign', is_search: 1, st_col: 'utm_campaign', st_type: 1 },
			{ id: 'link', name: 'Link', is_search: 1, st_col: 'link', st_type: 1 },
			{ id: 'cost', name: 'Cost($)', is_search: 1, st_col: 'cost', st_type: 1 },
			{ id: 'cost_vnd', name: 'Cost(đ)', is_search: 1, st_col: 'cost_vnd', st_type: 1 },
			{ id: 'start_date', name: 'Start date', is_search: 1, st_col: 'start_date', st_type: 1 },
			{ id: 'end_date', name: 'End date', is_search: 1, st_col: 'end_date', st_type: 1 }
		];
		this.facebookHeaders = [
			{ id: 'fb_campaign_name', name: 'Campaign Name', is_search: 1, st_col: 'fb_campaign_name', st_type: 1 },
			{ id: 'fb_adset_name', name: 'AdSet Name', is_search: 1, st_col: 'fb_adset_name', st_type: 1 },
			{ id: 'fb_adgroup_name', name: 'AdGroup Name', is_search: 1, st_col: 'fb_adgroup_name', st_type: 1 },
			{ id: 'cost', name: 'Cost($)', is_search: 1, st_col: 'cost', st_type: 1 },
			{ id: 'cost_vnd', name: 'Cost(đ)', is_search: 1, st_col: 'cost_vnd', st_type: 1 },
			{ id: 'start_date', name: 'Start date', is_search: 1, st_col: 'start_date', st_type: 1 },
			{ id: 'end_date', name: 'End date', is_search: 1, st_col: 'end_date', st_type: 1 }
		];
		this.googleHeaders = [
			{ id: 'gg_campaign_name', name: 'Campaign Name', is_search: 1, st_col: 'gg_campaign_name', st_type: 1 },
			{ id: 'cost', name: 'Cost($)', is_search: 1, st_col: 'cost', st_type: 1 },
			{ id: 'cost_vnd', name: 'Cost(đ)', is_search: 1, st_col: 'cost_vnd', st_type: 1 },
			{ id: 'start_date', name: 'Start date', is_search: 1, st_col: 'start_date', st_type: 1 },
			{ id: 'end_date', name: 'End date', is_search: 1, st_col: 'end_date', st_type: 1 }
		];
	}
	ngOnInit() {
		if (!this.service.isExpired())
			this.refresh();
	}
	ngOnDestroy() {
		this.service.removeCampaign();
	}
	jumpPage(_page) {
		_page = (_page <= 0) ? 1 : _page;
		this.paging.pg_page = _page
		this.refresh();
	}
	resizePage($event) {
		this.paging.pg_size = $event;
		this.jumpPage(1);
	}
	refresh() {
		this.reset();
		this.getCampaigns();
		this.getApps();
		this.doAnalysis();
	}
	doAnalysis(){
		this.syncBanner();
		this.syncFacebookAd();
		this.syncGoogleAd();
	}
	getApps() {
		this.app.app_id = this.service.getAppId();
		this.apps = this.gService.getGroupSetting();
		for (var ap of this.apps) {
			if (ap.app_id == this.app.app_id) {
				this.app.os = ap.os;
				this.app.version = ap.version;
			}
		}
	}
	reset() {
		this.ads = [];
		this.isHidden = true;
		this.isEdit = false;
		this.cp =  {'_id': ''};
		this.onerow = {
			'id': 'ad' + new Date().getMilliseconds(),
			'name': 'ad' + new Date().getMilliseconds(),
			'desc': 'ad' + new Date().getMilliseconds(),
			'is_active': 1,
			'start_date': '',
			'end_date': '',
			'link': 'link' + new Date().getMilliseconds(),
			'cost': new Date().getMilliseconds(),
			'type': 'banner_ad'
		};
	}
	switchApp(app) {
		this.service.setAppId(app.app_id);
		this.refresh();
	}
	syncBanner() {
		var params = {
			'st_col': this.paging.st_col,
			'st_type': this.paging.st_type,
			'pg_page': this.paging.pg_page,
			'pg_size': this.paging.pg_size,
			'search_type':'banner_ad',
			'app_group_id':this.service.getGroupId(),
			'search_app_id': this.service.getAppId(),
			['search_' + this.search.field]: this.search.term,
			'search_campaign_id': this.cp._id
		};
		this.service.getAds(params, data => { this.ads = data; });
	}
	syncFacebookAd(){
		var params = {
			'st_col': this.paging.st_col,
			'st_type': this.paging.st_type,
			'pg_page': this.paging.pg_page,
			'pg_size': this.paging.pg_size,
			'search_type':'facebook_ad',
			'search_app_id': this.service.getAppId(),
			['search_' + this.search.field]: this.search.term
		};
		this.service.getAds(params, data => { this.facebookAds = data; });
	}
	syncGoogleAd(){
		var params = {
			'st_col': this.paging.st_col,
			'st_type': this.paging.st_type,
			'pg_page': this.paging.pg_page,
			'pg_size': this.paging.pg_size,
			'search_type':'google_ad',
			'search_app_id': this.service.getAppId(),
			['search_' + this.search.field]: this.search.term
		};
		this.service.getAds(params, data => { this.googleAds = data; });
	}
	getCampaigns() {
		var params = {
			'pg_page': 1,
			'pg_size': 100,
			'search_source':null,
			'search_app_id': this.service.getAppId(),
			'search_agency_id': '5aa0ee42b887cb6691ed5b43'
		};
		this.service.getCampaigns(params, data => {
			this.campaigns = data;
			if (this.campaigns.length > 0)
				this.cp = this.campaigns[0];
		});
	}
	sort1($event) {
		var target = $event.target || $event.srcElement || $event.currentTarget;
		var idAttr = target.attributes.rxdata;
		if (typeof (idAttr) != 'undefined') {
			var tempcol = idAttr.nodeValue;
			if (this.paging.st_col == tempcol)
				this.paging.st_type *= -1;
			else {
				this.paging.st_col = tempcol;
				this.paging.st_type = -1;
			}
			this.syncBanner();
		}
	}
	sort2($event) {
		var target = $event.target || $event.srcElement || $event.currentTarget;
		var idAttr = target.attributes.rxdata;
		if (typeof (idAttr) != 'undefined') {
			var tempcol = idAttr.nodeValue;
			if (this.paging.st_col == tempcol)
				this.paging.st_type *= -1;
			else {
				this.paging.st_col = tempcol;
				this.paging.st_type = -1;
			}
			this.syncFacebookAd();
		}
	}
	show() {
		this.campaigns.splice(-1, 1);
		this.isHidden = false;
		this.isEdit = false;
	}
	createAd() {
		this.onerow.start_date = Math.round(this.startDate.getTime() / 1000);
		this.onerow.end_date = Math.round(this.endDate.getTime() / 1000);
		this.onerow.campaign_id = this.cp._id;
		this.onerow.app_id = this.service.getAppId();
		this.service.createAd(this.onerow, data => { this.refresh(); });
	}
	onItemClick(ad: any) {
		this.campaigns.splice(-1, 1);
		this.onerow = ad;
		this.cp = this.getCampaign(ad.campaign_id);
		this.startDate = new Date(this.onerow.start_date * 1000);
		this.endDate = new Date(this.onerow.end_date * 1000);
		this.isEdit = true;
		this.isHidden = false;
	}
	getCampaign(id: string) {
		for (var cp of this.campaigns) {
			if (cp._id == id)
				return cp;
		}
	}
	update() {
		this.onerow.start_date = Math.round(this.startDate.getTime() / 1000);
		this.onerow.end_date = Math.round(this.endDate.getTime() / 1000);
		this.onerow.campaign_id = this.cp._id;
		this.service.updateAd(this.onerow, data => { this.refresh(); });
	}
	delete(e: any, ad: any) {
		e.stopPropagation();
		this.service.deleteAd({ 'id': ad._id }, data => { this.refresh(); });
	}
}