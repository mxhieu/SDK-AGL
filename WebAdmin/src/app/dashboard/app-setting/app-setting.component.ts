import { Component, OnInit } from '@angular/core';
import { GroupService } from '../../service/group.service';
import { PlayerAdsService } from '../../service/player-ads.service';
import { BaseComponent } from '../../service/base.component';

@Component({
	selector: 'app-app-setting',
	templateUrl: './app-setting.component.html',
	styleUrls: ['./app-setting.component.scss']
})
export class AppSettingComponent extends BaseComponent implements OnInit {
	appInfo: any; dataIds = []; paging: any; isnext: any; header: any; search: any;
	playerIds: any; isImportAreaShow: boolean;
	apps: any; app = { 'app_id': '', 'os': '', 'version': '' };
	entries = [
		{ 'id': 1, 'name': 'Chọn tất cả', 'filter_type': 'all' },
		{ 'id': 2, 'name': 'Chọn tất cả user chưa nạp tiền', 'filter_type': 'user_not_pay' },
		{ 'id': 3, 'name': 'Tuỳ chọn', 'filter_type': 'list_defined_users' }
	];
	constructor(private service: GroupService, private playerAdsService: PlayerAdsService) {
		super();
		this.appInfo = {
			'settings': {},
			'version': 1.0,
			'icon': '',
			'promote_images': [],
			'logo': ''
		};
		this.isnext = true; this.isImportAreaShow = false;
		this.search = { field: 'player_id', term: '' };
		this.paging = this.service.defaultPaging('created_at');
		this.header = [
			{ id: 'player_id', name: 'Player Id', is_search: 1, st_col: 'player_id', st_type: 1 },
			{ id: 'email', name: 'Email', is_search: 1, st_col: 'email', st_type: 1 },
			{ id: 'username', name: 'Username', is_search: 1, st_col: 'player_id', st_type: 1 }
		];
	}
	ngOnInit() {
		this.refresh();
	}
	refresh() {
		if (!this.service.isExpired()) {
			this.getDetail();
			this.getApps();
		}
	}
	getApps() {
		this.app.app_id = this.service.getAppId();
		this.apps = this.service.getGroupSetting();
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
	getDetail() {
		this.service.detailApp(
			{ 'id': this.service.getAppId() },
			data => {
				this.appInfo = data;
				if (this.appInfo.video_reward_filter_type == 'list_defined_users') {
					this.isImportAreaShow = true;
					this.getPlayerAds();
				}
			});
	}
	
	getPlayerAds() {
		this.playerAdsService.getAdsPlayers({
			'search_app_id': this.service.getAppId(),
			'pg_page': this.paging.pg_page,
			'pg_size': this.paging.pg_size,
			'st_col': this.paging.st_col,
			'st_type': this.paging.st_type,
			['search_' + this.search.field]: this.search.term
		}, data => {
			this.dataIds = data;
		});
	}
	/*
	Import player id to be show ad
	*/
	import() {
		if (this.appInfo.video_reward_filter_type == 'list_defined_users') {
			var params = {
				"app_id": this.service.getAppId(),
				"filter_type": this.appInfo.video_reward_filter_type,
				"player_ids": this.playerIds
			};
			this.playerAdsService.add(params, data => {
				this.getPlayerAds();
			});
		}
		this.update();
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
				{
					this.appInfo.icon = data;
					this.update();
				}
				else
				{
					this.appInfo.logo = data;
					this.update();
				}
			});
		}
	}
	deleteAd(event: any, d: any) {
		console.log(d);
		var params = {
			"app_id": this.service.getAppId(),
			"filter_type": this.appInfo.video_reward_filter_type,
			"player_ids": d.player_id._id
		};
		this.playerAdsService.delete(params, data => {
			this.getPlayerAds();
		});
	}
	deleteAll() {
		var ids = '';
		for (var d of this.dataIds) {
			ids += d.player_id._id + ",";
		}
		ids = ids.substring(0, ids.length - 1);
		var params = {
			"app_id": this.service.getAppId(),
			"filter_type": this.appInfo.video_reward_filter_type,
			"player_ids": ids
		};
		this.playerAdsService.delete(params, data => {
			this.getPlayerAds();
		});
	}
	fileChange(event) {
		let fileList: FileList = event.target.files;
		if (fileList.length > 0) {
			let file: File = fileList[0];
			this.service.upload(file, data => {
				console.log(data);
				this.appInfo.promote_images.push(data);
				this.update();
			});
		}
	}
	onSelectionChange(entry) {
		this.appInfo.video_reward_filter_type = entry.filter_type;
		if (entry.filter_type == 'list_defined_users')
			this.isImportAreaShow = true;
		else
			this.isImportAreaShow = false;
	}
}