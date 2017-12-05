import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../../service.config';
import { ConnectService } from '../../service.connect';
import { Router } from '@angular/router';

@Component({
	selector: 'app-payment',
	templateUrl: './payment.component.html'
})
export class PaymentComponent implements OnInit {

	items: any[];
	onerow: any;
	isHidden: boolean;
	paging: any;
	isEdit: boolean;

	constructor(private router: Router,
		private config: ConfigService,
		private connect: ConnectService) { }

	ngOnInit() {
		this.refresh();
	}

	getData() {
		var params = { 'search_app_id': this.config.getAppInfo()._id};
		this.connect.request('get', this.config.API_PAYMENT_GET_ITEMS, params,
			data => {
				this.items = Array.isArray(data.data) ? data.data : [];
			});
	}

	refresh() {
		if (this.config.isExpired()) {
			this.router.navigate([this.config.LINK_TO_LOGIN]);
		} else {
			this.reset();
			this.getData();
		}
	}

	cancel() {
		this.refresh();
	}
	onRowClick(item) {
		this.onerow = item;
		this.isHidden = false;
		this.isEdit = true;
	}
	update() {
		this.connect.request('post', this.config.API_PAYMENT_EDIT, this.onerow,
			data => {
				this.refresh();
			});
	}
	save() {
		this.connect.request('post', this.config.API_PAYMENT_ADD_IN_APPS, this.onerow,
			data => {
				this.refresh();
			});
	}
	delete() {
		this.connect.request('get', this.config.API_PAYMENT_DELETE, this.onerow,
			data => {
				this.refresh();
			});
	}
	reset() {
		this.isEdit = false;
		this.isHidden = true;
		this.onerow = {
			'price': 1000,
			'name': 'items' + new Date().getMilliseconds(),
			'desc': 'New in-app items',
			'app_id': '',
			'is_active': 1
		};
		this.items = [];
		this.paging = { pg_page: 1, pg_size: 100 };
	}
	toggle() {
		this.isHidden = !this.isHidden;
		this.isEdit = false;
	}
}
