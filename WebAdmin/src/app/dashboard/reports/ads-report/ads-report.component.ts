import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../../../service/base.component';
import { CampaignService } from '../../../service/campaign.service';
import { GroupService } from '../../../service/group.service';

@Component({
	selector: 'app-ads-report',
	templateUrl: './ads-report.component.html',
	styleUrls: ['./ads-report.component.scss']
})
export class AdsReportComponent extends BaseComponent implements OnInit {

	headers: any; paging: any; search = { field: 'name', term: '' };
	ads = []; onerow: any; isEdit: boolean; isHidden: boolean;
	adType = [];
	apps: any; app = { 'app_id': '', 'os': '', 'version': '' };
	version: any; versions = [{ 'version': '', 'os': '' }]; versionDisplay = [{ 'version': '', 'os': '' }];
	source: any; sources = [{ 'source_group': "All", 'source': '-1' }];
	dFrom: Date; dMin: Date; dTo: Date = new Date(); dMax: Date = new Date();
	platform: any; platforms = []; osVerionDisplay: boolean;
	constructor(private groupService: GroupService, private service: CampaignService) {
		super();
		this.source = this.sources[0];
		this.platforms = this.service.defaultPlatforms();
		this.platform = this.platforms[0];
		this.adType = this.service.getAdType();
		this.dFrom = this.service.fromDate(this.dTo.getFullYear(), this.dTo.getMonth(), this.dTo.getDate());
		this.dMin = this.service.fromDate(this.dMax.getFullYear(), this.dMax.getMonth(), this.dMax.getDate());
		this.paging = this.service.defaultPaging('start_date');
		this.headers = [
			{ id: '_id', name: 'Ad Id', is_search: 1, st_col: '_id', st_type: 1 },
			{ id: 'name', name: 'Name', is_search: 1, st_col: 'name', st_type: 1 },
			{ id: 'desc', name: 'Description', is_search: 1, st_col: 'desc', st_type: 1 },
			{ id: 'cost', name: 'Cost', is_search: 1, st_col: 'cost', st_type: 1 },
			{ id: 'rev', name: 'Rev', is_search: 1, st_col: 'rev', st_type: 1 },
			{ id: 'roi', name: 'Roi', is_search: 1, st_col: 'roi', st_type: 1 },
			{ id: 'start_date', name: 'Start date', is_search: 1, st_col: 'start_date', st_type: 1 },
			{ id: 'end_date', name: 'End date', is_search: 1, st_col: 'end_date', st_type: 1 }
		];
	}

	ngOnInit() {
		if (!this.service.isExpired())
			this.refresh();
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
		this.getSources();
		this.doAnalysis();
	}
	switchApp(app) {
		this.service.setAppId(app.app_id);
		this.refresh();
	}
	reset() {
		this.ads = [];
		this.isHidden = true;
		this.isEdit = false;
		this.onerow = {
			'id': 'ad' + new Date().getMilliseconds(),
			'name': 'ad' + new Date().getMilliseconds(),
			'desc': 'ad' + new Date().getMilliseconds(),
			'is_active': 1,
			'start_date': '',
			'end_date': '',
			'link': 'link' + new Date().getMilliseconds(),
			'cost': new Date().getMilliseconds(),
			'type': 1, // 1: banner, 2: facebook, 3: google
		};
	}

	doAnalysis() {
		var params = {
			'st_col': this.paging.st_col,
			'st_type': this.paging.st_type,
			'pg_page': this.paging.pg_page,
			'pg_size': this.paging.pg_size,
			'app_group_id':this.service.getGroupId(),
			'search_app_id': this.service.getAppId(),
			'startdate': Math.round(this.dFrom.getTime() / 1000),
			'enddate': Math.round(this.dTo.getTime() / 1000),
			['search_' + this.search.field]: this.search.term
		};
		if (this.source.source != '-1')
			params.search_source = this.source.source;

		this.service.getAdsReport(params, data => { this.ads = data; });
	}

	getApps() {
		this.app.app_id = this.service.getAppId();
		this.apps = this.groupService.getGroupSetting();
		for (var app of this.apps) {
			if (app.app_id == this.app.app_id) {
				this.app.os = app.os;
				this.app.version = app.version;
			}
		}
	}
	sort($event) {
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
			this.refresh();
		}
	}
	getSources() {
		this.service.getSources(data => {

			// Sources
			this.sources = this.sources.concat(data.source);
			this.source = this.sources[0];

			// Os
			this.versions = data.os.settings;
			this.versionDisplay = this.versions;
			this.version = this.versionDisplay[0];
		});
	}
	onVersionChanged(event) {
		this.service.setAppId(event.app_id);
	}
	osPickerChanged(event) {

		this.versionDisplay = [];

		if (event.id == '-1')
			this.osVerionDisplay = false;
		else {
			this.osVerionDisplay = true;
			for (var v of this.versions) {
				if (v.os == event.id)
					this.versionDisplay.push(v);
			}
			this.version = this.versionDisplay[0];
			this.service.setAppId(this.version.app_id);
		}
	}
}
