import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../../service.config';
import { Service } from '../../service/service';
import { URLSearchParams } from '@angular/http';

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

	constructor(
		private config: ConfigService,
		private service: Service) { }

	ngOnInit() {
		this.refresh();
	}

	getData() {
		let params = new URLSearchParams();
		params.append('search_app_id', this.service.getAppId());
		this.service.get(this.config.API_PAYMENT_GET_ITEMS, params,
			data => {
				this.items = Array.isArray(data) ? data : [];
			});
	}

	refresh() {
		if (this.service.isExpired()) {
			this.service.moveToLogin();
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
		this.service.post(this.config.API_PAYMENT_EDIT, this.onerow, null,
			data => {
				this.refresh();
			});
	}
	save() {
		this.service.post(this.config.API_PAYMENT_ADD_IN_APPS, this.onerow, null,
			data => {
				this.refresh();
			});
	}
	delete() {
		this.service.get(this.config.API_PAYMENT_DELETE, this.onerow,
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
			'app_id': this.service.getAppId(),
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
