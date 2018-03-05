import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../../service/service.config';
import { Service } from '../../service/service';

@Component({
	selector: 'app-telco',
	templateUrl: './telco.component.html',
	styleUrls: ['./telco.component.scss']
})
export class TelcoComponent implements OnInit {

	items: any[];
	cardItems: any[];
	onerow: any;

	isHidden: boolean;
	paging: any;
	isEdit: boolean;

	constructor(
		private config: ConfigService, private service: Service) {
	}

	ngOnInit() {
		this.refresh();
	}

	getData() {
		this.service.get(this.config.API_PAYMENT_GET_CARD_ITEMS, {
			'search_app_id': this.service.getAppId(),
			'st_col': this.paging.st_col,
			'st_type': this.paging.st_type
		}, data => {
			this.items = Array.isArray(data) ? data : [];
		});
	}
	refresh() {
		if (!this.service.isExpired()) {
			this.reset();
			this.getData();
		}
	}
	fileChange(event) {
		let fileList: FileList = event.target.files;
		if (fileList.length > 0) {
			let file: File = fileList[0];
			this.service.upload(file, data => {
				this.onerow.icon = data;
			});
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
		this.service.post(this.config.API_PAYMENT_CARD_EDIT, this.onerow, null,
			data => {
				this.refresh();
			});
	}
	save() {
		this.service.post(this.config.API_PAYMENT_ADD_CARDS, this.onerow, null,
			data => {
				this.refresh();
			});
	}
	delete() {
		this.service.get(this.config.API_PAYMENT_CARD_ITEMS_DELETE, this.onerow,
			data => {
				this.refresh();
			});
	}
	getUrl(icon: string): string {
		return this.service.getUrl(icon);
	}
	reset() {
		this.isEdit = false;
		this.isHidden = true;
		this.onerow = {
			'price': 1000,
			'name': 'items' + new Date().getMilliseconds(),
			'desc': 'New in-app items',
			'icon': '',
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
