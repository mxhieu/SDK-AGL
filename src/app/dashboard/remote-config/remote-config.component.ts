import { Component, OnInit } from '@angular/core';
import { Service } from '../../service/service';

@Component({
	selector: 'app-remote-config',
	templateUrl: './remote-config.component.html'
})
export class RemoteConfigComponent implements OnInit {

	msgs: any[];
	isHidden: boolean;
	onerow: any;
	paging: any;

	constructor(
		private service: Service) { }
	ngOnInit() {
		this.refresh();
	}
	refresh() {
		if (this.service.isExpired()) {
			this.service.moveToLogin();
		} else {
			this.reset();
			this.getData();
		}
	}
	send() {
		this.refresh();
	}
	cancel() {
		this.refresh();
	}
	delete() {

	}
	reset() {
		this.isHidden = true;
		this.onerow = {
			'message': 'New message',
			'status': 0,
			'open': '0',
			'target': '1000',
			'app_id': '',
			'is_active': 1,
			'created_at': '0'
		};
		this.msgs = [];
		this.paging = { pg_page: 1, pg_size: 100 };
	}
	getData() {
		this.msgs.push({
			'message': 'New message',
			'status': 0,
			'open': '0',
			'target': '1000',
			'app_id': '',
			'is_active': 1,
			'created_at': '0'
		});
	}
	toggle() {
		this.isHidden = !this.isHidden;
	}
}