import { Component, OnInit } from '@angular/core';
import { PaymentService } from '../../service/payment.service';
import { BaseComponent } from '../../service/base.component';

@Component({
	selector: 'app-payment',
	templateUrl: './payment.component.html',
	styleUrls: ['./payment.component.scss']
})

export class PaymentComponent extends BaseComponent implements OnInit {

	items: any[];
	cardItems: any[];
	onerow: any;

	isHidden: boolean;
	paging: any;
	isEdit: boolean;

	constructor(private service: PaymentService) {
		super();
	}

	ngOnInit() { this.refresh(); }

	refresh() {
		if (!this.service.isExpired()) {
			this.reset();
			this.service.getPayments({
				'search_app_id': this.service.getAppId(),
				'st_col': this.paging.st_col,
				'st_type': this.paging.st_type
			}, data => { this.items = data; });
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
		this.service.update( this.onerow, data => { this.refresh(); });
	}
	save() {
		this.service.insert( this.onerow, data => { this.refresh(); });
	}
	delete() {
		this.service.delete( this.onerow, data => { this.refresh(); });
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
		this.paging = this.service.defaultPaging();
	}
	toggle() {
		this.isHidden = !this.isHidden;
		this.isEdit = false;
	}
}
