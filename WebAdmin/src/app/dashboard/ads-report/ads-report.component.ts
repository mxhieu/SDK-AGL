import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../../service/base.component';
import { CampaignService } from '../../service/campaign.service';
import { GroupService } from '../../service/group.service';

@Component({
	selector: 'app-ads-report',
	templateUrl: './ads-report.component.html',
	styleUrls: ['./ads-report.component.scss']
})
export class AdsReportComponent extends BaseComponent implements OnInit {

	headers: any; paging: any; search = { field: 'name', term: '' };
	ads = []; onerow: any; isEdit: boolean; isHidden: boolean;
	adType = [];
	apps: any; app = { 'app_id': '', 'os': '', 'version':''};

	constructor(private groupService: GroupService, private service: CampaignService) {
		super();
		this.adType = this.service.getAdType();
		this.paging = this.service.defaultPaging();
		this.headers = [
			{ id: '_id', name: 'Ad Id', is_search: 1, st_col: '_id', st_type: 1 },
			{ id: 'name', name: 'Name', is_search: 1, st_col: 'name', st_type: 1 },
			{ id: 'desc', name: 'Description', is_search: 1, st_col: 'desc', st_type: 1 },
			{ id: 'cost', name: 'Cost', is_search: 1, st_col: 'cost', st_type: 1 },
			{ id: 'rev', name: 'Rev', is_search: 1, st_col: 'rev', st_type: 1 },
			{ id: 'roi', name: 'Roi', is_search: 1, st_col: 'roi', st_type: 1 }
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
		this.doAnalysis();
	}
	switchApp(app){
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
			'search_app_id': this.service.getAppId(),
			['search_' + this.search.field]: this.search.term
		};
		this.service.getAdsReport(params, data => { this.ads = data; });
	}

	getApps(){
		this.app.app_id = this.service.getAppId();
		this.apps = this.groupService.getGroupSetting();
		for (var app of this.apps){
			if(app.app_id == this.app.app_id){
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

}
