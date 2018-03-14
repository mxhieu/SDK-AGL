import { Component, OnInit } from '@angular/core';
import { ReportService } from '../../service/report.service';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';

@Component({
	selector: 'app-kpireport',
	templateUrl: './kpireport.component.html',
	styleUrls: ['./kpireport.component.scss']
})
export class KpireportComponent implements OnInit {

	dFrom: Date; dMin: Date; dTo: Date = new Date(); dMax: Date = new Date();

	data = []; paging: any; isnext = true; header: any;
	search = { field: 'today', term: '' };
	version: any; versions = [{ 'version': '', 'os': '' }]; versionDisplay = [{ 'version': '', 'os': '' }];
	source: any; sources = [{ 'source_group': "All", 'source': '-1' }];
	platform: any; platforms = [];

	constructor(private service: ReportService) {
		this.source = this.sources[0];
		this.platforms = this.service.defaultPlatforms();
		this.platform = this.platforms[0];

		this.dFrom = this.service.fromDate(this.dTo.getFullYear(), this.dTo.getMonth(), this.dTo.getDate());
		this.dMin = this.service.fromDate(this.dMax.getFullYear(), this.dMax.getMonth(), this.dMax.getDate());

		this.paging = this.service.defaultPaging();

		this.header = [
			{ id: 'data', name: 'Data', is_search: 1, st_col: 'data', st_type: -1 },
			{ id: 'today', name: 'Today', is_search: 1, st_col: 'today', st_type: 1 },
			{ id: 'yesterday', name: 'Yesterday', is_search: 1, st_col: 'source', st_type: 1 },
			{ id: 'one_week_ago', name: '1 week ago', is_search: 1, st_col: 'one_week_ago', st_type: 1 }
		];
		this.getSources();
		this.doAnalysis();
	}

	ngOnInit() {

	}
	
	jumpPage(_page) {
		_page = (_page <= 0) ? 1 : _page;
		this.paging.pg_page = _page
		this.doAnalysis();
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
			if (this.paging.st_col == tempcol)
				this.paging.st_type *= -1;
			else {
				this.paging.st_col = tempcol;
				this.paging.st_type = -1;
			}
			this.doAnalysis();
		}
	}

	doAnalysis() {
		var params = {
			'app_id': this.service.getAppId(),
			'pg_page': this.paging.pg_page,
			'pg_size': this.paging.pg_size,
			'st_col': this.paging.st_col,
			'st_type': this.paging.st_type,
			'startdate': Math.round(this.dFrom.getTime() / 1000),
			'enddate': Math.round(this.dTo.getTime() / 1000),
			['search_' + this.search.field]: this.search.term
		};
		if (this.platform.id != '-1')
			params.search_os = this.platform.id;

		if (this.source.source != '-1')
			params.search_source = this.source.source;

		this.service.kpiAnalysis(params, data => {
			this.data = data;
			this.isnext = (this.data.length >= this.paging.pg_size) ? true : false;
		});
	}
	getSources() {
		this.service.getSources(data => {

			// Sources
			this.sources = this.sources.concat(data.source);
			this.source = this.sources[0];

			// Os
			this.versions = data.os.settings;
			this.versionDisplay = this.versions;
			this.version = this.versionDisplay[0];
		});
	}

	onVersionChanged(event) {
		console.log(event.app_id);
	}
	osPickerChanged(event) {

		this.versionDisplay = [];

		if (event.id == '-1')
			for (var v of this.versions)
				this.versionDisplay.push(v);
		else
			for (var v of this.versions)
				if (v.os == event.id)
					this.versionDisplay.push(v);

		this.version = this.versionDisplay[0];
	}
}
