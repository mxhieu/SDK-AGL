import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../../service/base.component';
import { CampaignService } from '../../service/campaign.service';

@Component({
	selector: 'app-campaign',
	templateUrl: './campaign.component.html',
	styleUrls: ['./campaign.component.scss']
})
export class CampaignComponent extends BaseComponent implements OnInit {

	headers: any; paging: any; search = { field: 'name', term: '' };


	campaigns = []; onerow: any; isEdit: boolean; isHidden: boolean;
	sources = [];

	constructor(private service: CampaignService) {

		super();

		this.paging = this.service.defaultPaging();

		this.headers = [
			{ id: 'name', name: 'Name', is_search: 1, st_col: 'name', st_type: 1 },
			{ id: 'desc', name: 'Description', is_search: 1, st_col: 'desc', st_type: 1 },
			{ id: 'utm_source', name: 'Utm Source', is_search: 1, st_col: 'utm_source', st_type: 1 },
			{ id: 'utm_medium', name: 'Utm Medium', is_search: 1, st_col: 'utm_medium', st_type: 1 },
			{ id: 'created_at', name: 'Created', is_search: 1, st_col: 'created_at', st_type: 1 },
			{ id: 'is_active', name: 'Status', is_search: 1, st_col: 'is_active', st_type: 1 }
		];
		this.refresh();
		this.getSources();
	}

	ngOnInit() {
		
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
	}
	reset() {
		this.campaigns = [];
		this.isHidden = true;
		this.isEdit = false;
		this.onerow = {
			'name': 'Nạp thẻ bất kì, X2 gold',
			'desc': 'Vina, Mobi, Viettel',
			'is_active': 0,
			'utm_medium': '',
			'utm_source': '',
			'source_id': '',
			'app_id': this.service.getAppId(),
			'agency_id': '5aa0ee42b887cb6691ed5b43',
		};
	}

	getSources() {
		this.service.getSources(data => {
			this.sources = data.source;
			if (this.sources.length > 0)
				this.onerow.source_id = this.sources[0]._id;
		});
	}

	getCampaigns() {
		this.service.getCampaigns({
			'st_col': this.paging.st_col,
			'st_type': this.paging.st_type,
			'pg_page': this.paging.pg_page,
			'pg_size': this.paging.pg_size,
			'search_agency_id': '5aa0ee42b887cb6691ed5b43',
			['search_' + this.search.field]: this.search.term
		}, data => {
			this.campaigns = data
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
	}
	save() {
		for (var sc of this.sources) {
			if (this.onerow.source_id == sc._id) {
				this.onerow.utm_medium = sc.source;
				this.onerow.utm_source = sc.source_group;
			}
		}
		this.service.insert(this.onerow, data => { this.refresh(); });
	}

	onItemClick(cp: any) {
		this.onerow = cp;
		this.isEdit = true;
		this.isHidden = false;
	}
	update() {
		for (var sc of this.sources) {
			if (this.onerow.source_id == sc._id) {
				this.onerow.utm_medium = sc.source;
				this.onerow.utm_source = sc.source_group;
			}
		}
		this.service.update(this.onerow, data => { this.refresh(); });
	}
	delete() {
		this.service.delete({ 'id': this.onerow._id }, data => { this.refresh(); });
	}
}
