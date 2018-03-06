import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-campaign',
	templateUrl: './campaign.component.html',
	styleUrls: ['./campaign.component.scss']
})
export class CampaignComponent implements OnInit {

	headers: any; paging: any; search = { field: 'source', term: '' };
	isHidden: boolean; campaigns = []; onerow: any;

	constructor() {

		this.isHidden = true;
		this.paging = { pg_page: 1, pg_size: 10, st_col: 'created_at', st_type: -1 };
		this.headers = [
			{ id: 'name', name: 'Name', is_search: 1, st_col: 'name', st_type: 1 },
			{ id: 'desc', name: 'Description', is_search: 1, st_col: 'desc', st_type: 1 },
			/*{ id: 'start_date', name: 'Start', is_search: 1, st_col: 'start_date', st_type: 1 },
			{ id: 'end_date', name: 'End', is_search: 1, st_col: 'end_date', st_type: 1 },*/
			{ id: 'source', name: 'Source', is_search: 1, st_col: 'source', st_type: 1 },
			{ id: 'source_group', name: 'Medium', is_search: 1, st_col: 'source_group', st_type: 1 },
			{ id: 'created_at', name: 'Created', is_search: 1, st_col: 'created_at', st_type: 1 },
			{ id: 'is_active', name: 'Status', is_search: 1, st_col: 'is_active', st_type: 1 }
		];
	}

	ngOnInit() {
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
	}
	reset() {

		this.campaigns = [];
		this.campaigns.push({
			'name': 'Tặng 200 gold khi mua bất kì gói nào trong cửa hàng',
			'desc': 'Áp dụng cho cả hình thức mua gold bằng SMS hoặc bằng G (thẻ cào)',
			/*'start_date': 1520319659,
			'end_date': 1520319700,*/
			/*'cost': 1000000,*/
			'source':'FBAds',
			'source_group':'FBAds',
			'is_active': 1,
			'updated_at': 1520319659,
			'created_at': 1520319659
		});
		this.campaigns.push({
			'name': 'Nạp thẻ bất kì, X2 gold',
			'desc': 'Vina, Mobi, Viettel',
			/*'start_date': 1520319659,
			'end_date': 1520319700,*/
			/*'cost': 2000000,*/
			'source':'Agency',
			'source_group':'Agency',
			'is_active': 0,
			'updated_at': 1520319659,
			'created_at': 1520319659
		});

		this.isHidden = true;
		this.onerow = {
			'name': 'Nạp thẻ bất kì, X2 gold',
			'desc': 'Vina, Mobi, Viettel',
			/*'start_date': 1520319659,
			'end_date': 1520319700,*/
			/*'cost': 2000000,*/
			'source':'Agency',
			'source_group':'Agency',
			'is_active': 0,
			'updated_at': 1520319659,
			'created_at': 1520319659
		};
		this.paging = { pg_page: 1, pg_size: 100 };

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
	toggle(){
		this.isHidden = !this.isHidden;
	}
	
}
