import { Component, OnInit, OnDestroy } from '@angular/core';
import { BaseComponent } from '../../../service/base.component';
import { CampaignService } from '../../../service/campaign.service';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { GroupService } from '../../../service/group.service';

@Component({
	selector: 'app-ads-report',
	templateUrl: './ads-report.component.html',
	styleUrls: ['./ads-report.component.scss']
})
export class AdsReportComponent extends BaseComponent implements OnInit, OnDestroy {

	headers: any; paging: any; search = { field: 'name', term: '' };
	ads = []; onerow: any; isEdit: boolean; isHidden: boolean;
	cp: any; campaigns = []; isnext: any;
	startDate: Date; endDate: Date = new Date();
	dFrom: Date; dMin: Date; dTo: Date = new Date(); dMax: Date = new Date();

	apps: any; app = { 'app_id': '', 'os': '', 'version': '' };
	facebookHeaders: any; facebookAds: any;

	constructor(private gService: GroupService, private service: CampaignService) {

		super();
		this.paging = this.service.defaultPaging('date');
		this.startDate = this.service.fromDate(this.endDate.getFullYear(), this.endDate.getMonth(), this.endDate.getDate());
		this.dFrom = this.service.fromDate(this.dTo.getFullYear(), this.dTo.getMonth(), this.dTo.getDate());
		this.dMin = this.service.fromDate(this.dMax.getFullYear(), this.dMax.getMonth(), this.dMax.getDate());
		this.isnext = true;
		this.headers = [
			{ id: 'name', name: 'Name', is_search: 1, st_col: 'name', st_type: 1 },
			{ id: 'utm_source', name: 'Utm Source', is_search: 1, st_col: 'utm_source', st_type: 1 },
			{ id: 'utm_medium', name: 'Utm Medium', is_search: 1, st_col: 'utm_medium', st_type: 1 },
			{ id: 'utm_term', name: 'Utm Term', is_search: 1, st_col: 'utm_term', st_type: 1 },
			{ id: 'utm_content', name: 'Utm Content', is_search: 1, st_col: 'utm_content', st_type: 1 },
			{ id: 'utm_campaign', name: 'Utm Campaign', is_search: 1, st_col: 'utm_campaign', st_type: 1 },
			{ id: 'link', name: 'Link', is_search: 1, st_col: 'link', st_type: 1 },
			{ id: 'cost', name: 'Cost', is_search: 1, st_col: 'cost', st_type: 1 },
			{ id: 'rev', name: 'Rev', is_search: 1, st_col: 'cost', st_type: 1 },
			{ id: 'roi', name: 'Roi', is_search: 1 },
			{ id: 'start_date', name: 'Start date', is_search: 1, st_col: 'start_date', st_type: 1 },
			{ id: 'end_date', name: 'End date', is_search: 1, st_col: 'end_date', st_type: 1 }
		];
		this.facebookHeaders = [
			{ id: 'fb_campaign_name', name: 'Campaign', is_search: 1, st_col: 'fb_campaign_name', st_type: 1 },
			{ id: 'fb_adset_name', name: 'Ad Set', is_search: 1, st_col: 'fb_adset_name', st_type: 1 },
			{ id: 'fb_adgroup_name', name: 'Ad Group', is_search: 1, st_col: 'fb_adgroup_name', st_type: 1 },
			{ id: 'cost', name: 'Cost', is_search: 1, st_col: 'cost', st_type: 1 },
			{ id: 'rev', name: 'Rev', is_search: 1, st_col: 'rev', st_type: 1 },
			{ id: 'roi', name: 'Roi', is_search: 1 }
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
		this.getApps();
		this.getFacebookAd();
		this.doAnalysis();
	}

	doAnalysis() {
		this.getFacebookAd();
		this.getBanner();
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
		this.cp = { '_id': '' };
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

	getBanner() {
		var params = {
			'st_col': this.paging.st_col,
			'st_type': this.paging.st_type,
			'pg_page': this.paging.pg_page,
			'pg_size': this.paging.pg_size,
			'search_type': 'banner_ad',
			'app_group_id': this.service.getGroupId(),
			'search_app_id': this.service.getAppId(),
			['search_' + this.search.field]: this.search.term,
			'search_campaign_id': this.cp._id
		};
		this.service.getAds(params, data => { this.ads = data; });
	}

	getFacebookAd() {
		var params = {
			'st_col': this.paging.st_col,
			'st_type': this.paging.st_type,
			'pg_page': this.paging.pg_page,
			'pg_size': this.paging.pg_size,
			'app_group_id': this.service.getGroupId(),
			'search_app_id': this.service.getAppId(),
			'startdate': Math.round(this.dFrom.getTime() / 1000),
			'enddate': Math.round(this.dTo.getTime() / 1000),
			['search_' + this.search.field]: this.search.term
		};

		this.service.getAdsReport(params, data => { this.facebookAds = data;});
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
			this.getBanner();
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
			this.getFacebookAd();
		}
	}

	show() {
		this.campaigns.splice(-1, 1);
		this.isHidden = false;
		this.isEdit = false;
	}

	getCampaign(id: string) {
		for (var cp of this.campaigns) {
			if (cp._id == id)
				return cp;
		}
	}

	calAdgroup(arradgroup) {
		var arrtmpadgroup = []
		arradgroup.forEach(adgroupobj => {
			var objectadgroup = arrtmpadgroup.find(obj => obj.adgroup_name === adgroupobj.adgroup_name);
			if (typeof (objectadgroup) == 'undefined') {
				var jsonadgroup = { adgroup_name: adgroupobj.adgroup_name, cost: adgroupobj.cost, rev: adgroupobj.rev }
				arrtmpadgroup.push(jsonadgroup)
			} else {
				objectadgroup['cost'] += adgroupobj.cost
				objectadgroup['rev'] += adgroupobj.rev
			}
		})

		return arrtmpadgroup
	}

	getRoi(ad: any) {
		return ad.cost > 0 ? (ad.rev * 1.0 / ad.cost) : 0;
	}
	calAdCampain(index, arrcampain) {
		var date = new Date();
		var indextime = date.getTime();

		if (arrcampain.campaignindex) {
			this.facebookAds = this.facebookAds.filter(function(obj) {
				return obj.checkindex != arrcampain.campaignindex;
			});
		}

		if (arrcampain.adsetindex) {
			this.facebookAds = this.facebookAds.filter(function(obj) {
				return (typeof (obj.adgroup_name) == 'undefined' || obj.checkindex != arrcampain.adsetindex || obj.adgroupindex != arrcampain.adgroupindex);
			});
		}

		arrcampain.checked = (arrcampain.checked) ? !arrcampain.checked : true
		if (arrcampain && (typeof (arrcampain.checked) == 'undefined' || arrcampain.checked == true)) {
			if (arrcampain && arrcampain.adset) {
				if (!arrcampain.campaignindex) { arrcampain.campaignindex = indextime }

				var jadset = 1;
				for (var objadset of arrcampain.adset) {
					var jsonadsettmp = { campaign_id: '', adset_name: objadset.adset_name, cost: objadset.cost, rev: objadset.rev, checkindex: arrcampain.campaignindex, arradgroup: objadset.arradgroup }
					this.facebookAds.splice(index + jadset, 0, jsonadsettmp);
					jadset++;
				}
			}

			if (arrcampain && arrcampain.arradgroup) {
				if (!arrcampain.adsetindex) {
					arrcampain.adsetindex = arrcampain.checkindex;
					arrcampain.adgroupindex = indextime;
				}

				var jadgroup = 1;
				var arrtmp = this.calAdgroup(arrcampain.arradgroup)
				for (var objadset of arrtmp) {
					var jsonadgrouptmp = { campaign_id: '', adset_name: '', adgroup_name: objadset.adgroup_name, cost: objadset.cost, rev: objadset.rev, checkindex: arrcampain.adsetindex, adgroupindex: arrcampain.adgroupindex }
					this.facebookAds.splice(index + jadgroup, 0, jsonadgrouptmp);
					jadgroup++;
				}
			}
		}
	}
}
