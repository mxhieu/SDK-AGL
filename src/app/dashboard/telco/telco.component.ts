import { Component, OnInit } from '@angular/core';
import { TelcoService } from '../../service/telco.service';
import { BaseComponent } from '../../service/base.component';
import { GroupService } from '../../service/group.service';

@Component({
	selector: 'app-telco',
	templateUrl: './telco.component.html',
	styleUrls: ['./telco.component.scss']
})
export class TelcoComponent extends BaseComponent implements OnInit {

	items: any[]; cardItems: any[]; onerow: any; isHidden: boolean; paging: any; isEdit: boolean;
	apps: any; app = { 'app_id': '', 'os': '', 'version': '' };

	constructor(public service: TelcoService, public gService: GroupService) {
		super();
	}

	ngOnInit() {
		this.refresh();
	}

	refresh() {
		if (!this.service.isExpired()) {
			this.reset();
			this.service.getTelcos({
				'search_app_id': this.service.getAppId(),
				'st_col': this.paging.st_col,
				'st_type': this.paging.st_type
			}, data => {
				this.items = Array.isArray(data) ? data : [];
			});
			this.getApps();
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
		this.refresh();
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
		this.service.update(this.onerow, data => { this.refresh(); });
	}
	save() {
		this.service.insert(this.onerow, data => { this.refresh(); });
	}
	delete() {
		if (window.confirm('Bạn chắc chắn muốn xoá?')) {
			this.service.delete(this.onerow, data => { this.refresh(); });
		}
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
		this.paging = this.service.defaultPaging('created_at');
	}
	toggle() {
		this.isHidden = !this.isHidden;
		this.isEdit = false;
	}

}
