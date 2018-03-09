import { Component, OnInit, OnDestroy } from '@angular/core';
import { BaseComponent } from '../../service/base.component';
import { CampaignService } from '../../service/campaign.service';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';

@Component({
	selector: 'app-ads',
	templateUrl: './ads.component.html',
	styleUrls: ['./ads.component.scss']
})

export class AdsComponent extends BaseComponent implements OnInit, OnDestroy {

	headers: any; paging: any; search = { field: 'name', term: '' };
	ads = []; onerow: any; isEdit: boolean; isHidden: boolean;
	adType = [];

	startDate: Date; endDate: Date = new Date();

	campaign: any;

	constructor(private service: CampaignService) {

		super();

		this.paging = this.service.defaultPaging();
		this.startDate = this.service.fromDate(this.endDate.getFullYear(), this.endDate.getMonth(), this.endDate.getDate());
		this.headers = [
			{ id: 'id', name: 'Ad Id', is_search: 1, st_col: 'id', st_type: 1 },
			{ id: 'name', name: 'Name', is_search: 1, st_col: 'name', st_type: 1 },
			{ id: 'desc', name: 'Description', is_search: 1, st_col: 'desc', st_type: 1 },
			{ id: 'link', name: 'Link', is_search: 1, st_col: 'link', st_type: 1 },
			{ id: 'type', name: 'Type', is_search: 1, st_col: 'type', st_type: 1 },
			{ id: 'cost', name: 'Cost', is_search: 1, st_col: 'cost', st_type: 1 },
			{ id: 'start_date', name: 'Start date', is_search: 1, st_col: 'start_date', st_type: 1 },
			{ id: 'end_date', name: 'End date', is_search: 1, st_col: 'end_date', st_type: 1 },
			{ id: 'created_at', name: 'Created', is_search: 1, st_col: 'created_at', st_type: 1 },
			{ id: 'is_active', name: 'Status', is_search: 1, st_col: 'is_active', st_type: 1 }
		];
	}

	ngOnInit() {
		if (!this.service.isExpired()) {
			this.campaign = this.service.getCampaign();
			if (!this.campaign)
				this.service.moveToCampaigns();
			else
				this.refresh();
		}
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
		this.getAds();
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
			'campaign_id': '',
		};
	}

	getAds() {
		this.service.getAds({
			'st_col': this.paging.st_col,
			'st_type': this.paging.st_type,
			'pg_page': this.paging.pg_page,
			'pg_size': this.paging.pg_size,
			'search_campaign_id': this.campaign._id,
			['search_' + this.search.field]: this.search.term
		}, data => {
			this.ads = data;
			for (var ad of this.ads) {
				console.log(ad);
			}
		});
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

	show() {
		this.isHidden = false;
		this.isEdit = false;
		this.onerow.campaign_id = this.campaign._id;
	}

	createAd() {
		this.onerow.start_date = Math.round(this.startDate.getTime() / 1000);
		this.onerow.end_date = Math.round(this.endDate.getTime() / 1000);
		this.onerow.campaign_id = this.campaign._id;
		this.service.createAd(this.onerow, data => { this.service.moveToAds(this.onerow); });
	}

	onItemClick(cp: any) {
		this.onerow = cp;
		this.startDate = new Date(this.onerow.start_date * 1000);
		this.endDate = new Date(this.onerow.end_date * 1000);
		this.isEdit = true;
		this.isHidden = false;
	}
	update() {
		this.onerow.start_date = Math.round(this.startDate.getTime() / 1000);
		this.onerow.end_date = Math.round(this.endDate.getTime() / 1000);
		this.onerow.campaign_id = this.campaign._id;
		this.service.updateAd(this.onerow, data => { this.refresh(); });
	}
	delete(e: any, cp: any) {
		e.stopPropagation();
		this.service.deleteAd({ 'id': cp._id }, data => { this.refresh(); });
	}

}
