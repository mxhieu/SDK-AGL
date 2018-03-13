import { Component, OnInit } from '@angular/core';
import { GroupService } from '../../service/group.service';
import { BaseComponent } from '../../service/base.component';

@Component({
	selector: 'app-app-setting',
	templateUrl: './app-setting.component.html',
	styleUrls: ['./app-setting.component.scss']
})
export class AppSettingComponent extends BaseComponent implements OnInit {

	appInfo: any;

	data: any; paging: any; isnext: any; header: any; search: any;


	constructor(private service: GroupService) {

		super();

		this.appInfo = {
			'settings': {},
			'version': 1.0,
			'icon': '',
			'logo': ''
		};

		this.data = [{'player_id':'player_id', 'name':'name'}];
		this.isnext = true;
		this.search = { field: 'player_id', term: '' };
		this.paging = this.service.defaultPaging();

		this.header = [
			{ id: 'player_id', name: 'Id', is_search: 1, st_col: 'player_id', st_type: 1 },
			{ id: 'name', name: 'Name', is_search: 1, st_col: 'name', st_type: 1 },
			{ id: 'created_at', name: 'Created', is_search: 1, st_col: 'created_at', st_type: 1 }];
	}

	ngOnInit() {
		this.refresh();
	}

	refresh() {
		if (!this.service.isExpired())
			this.service.detailApp({ 'id': this.service.getAppId() }, data => this.appInfo = data);
	}
	resetKey() {
		this.service.resetKey({ 'id': this.service.getAppId() }, data => this.appInfo.key = data);
	}
	update() {
		this.service.updateApp(JSON.stringify(this.appInfo), { 'id': this.service.getAppId() }, data => this.refresh());
	}
	delete() {
		this.service.deleteApp({ 'id': this.service.getAppId() }, data => this.service.moveToApps());
	}
	onStatusChange() {
		this.appInfo.is_active = (this.appInfo.is_active == 1 ? 0 : 1);
		this.update();
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
			this.refresh();
		}
	}
	fileChanged(event, type: number) {
		let fileList: FileList = event.target.files;
		if (fileList.length > 0) {
			let file: File = fileList[0];
			this.service.upload(file, data => {
				if (type == 0)
					this.appInfo.icon = data;
				else
					this.appInfo.logo = data;
			});
		}
	}
}
