import { Component, OnInit } from '@angular/core';
import { TransactionService } from '../../service/transaction.service';
import { BaseComponent } from '../../service/base.component';
import { GroupService } from '../../service/group.service';

@Component({
	selector: 'app-transaction',
	templateUrl: './transaction.component.html',
	styleUrls: ['./transaction.component.scss']
})
export class TransactionComponent extends BaseComponent implements OnInit {

	items: any[]; header: any[];
	apps: any; app = { 'app_id': '', 'os': '', 'version': '' }; search: any;
	isHidden: boolean; paging: any; isnext: any;
	totalSUSD = 0; totalSVND = 0; totalFUSD = 0; totalFVND = 0;
	constructor(public service: TransactionService, public gService: GroupService) {
		super();
		this.search = { field: 'created_at', term: '' };
		this.isnext = true;
		
		this.paging = this.service.defaultPaging('created_at');

		this.header = [
			{ id: 'trans_id', name: 'Id', is_search: 1, st_col: 'trans_id', st_type: 1 },
			{ id: 'product_currency', name: 'Currency', is_search: 1, st_col: 'product_currency', st_type: 1 },
			{ id: 'product_id', name: 'Product Id', is_search: 1, st_col: 'product_id', st_type: 1 },
			{ id: 'product_price', name: 'Price', is_search: 1, st_col: 'product_price', st_type: 1 },
			{ id: 'purchase_date_ms', name: 'Purchase Date', is_search: 1, st_col: 'purchase_date_ms', st_type: 1 },
			{ id: 'created_at', name: 'Created', is_search: 1, st_col: 'created_at', st_type: 1 },
			{ id: 'status', name: 'Status', is_search: 1, st_col: 'status', st_type: 1 },
			{ id: 'message', name: 'Message', is_search: 1, st_col: 'message', st_type: 1 },
			{ id: 'payload', name: 'Payload', is_search: 1, st_col: 'payload', st_type: 1 }
		];
	}

	ngOnInit() {
		this.sync();
	}

	sync() {
		if (!this.service.isExpired()) {
			this.getApps();
			this.service.getTransactions({
				'search_app_id': this.service.getAppId(),
				'pg_page': this.paging.pg_page,
				'pg_size': this.paging.pg_size,
				'st_col': this.paging.st_col,
				'st_type': this.paging.st_type
			}, data => {
				this.items = data;
				this.totalSUSD = 0;
				this.totalSVND = 0;
				this.totalFUSD = 0;
				this.totalFVND = 0;

				for (var it of this.items) {
					if (it.status == 1) {
						if (it.product_currency == 'USD')
							this.totalSUSD += it.product_price;
						else if (it.product_currency == 'VND')
							this.totalSVND += it.product_price;
					}
					else {
						if (it.product_currency == 'USD')
							this.totalFUSD += it.product_price;
						else if (it.product_currency == 'VND')
							this.totalFVND += it.product_price;
					}
				}
			});
		}
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
	switchApp(app) {
		this.service.setAppId(app.app_id);
		this.sync();
	}
	jumpPage(_page) {
		_page = (_page <= 0) ? 1 : _page;
		this.paging.pg_page = _page
		this.sync();
	}

	resizePage($event) {
		this.paging.pg_size = $event;
		this.jumpPage(1);
	}
	sort($event) {
		var target = $event.target || $event.srcElement || $event.currentTarget;
		var idAttr = target.attributes.rxdata;
		if (typeof (idAttr) != 'undefined') {
			var tempcol = idAttr.nodeValue;
			if (this.paging.st_col == tempcol) {
				this.paging.st_type *= -1;
			} else {
				this.paging.st_col = tempcol;
				this.paging.st_type = -1;
			}
			this.sync();
		}
	}
}
