import { Component, OnInit} from '@angular/core';
import { Service } from '../../service/service';
import { ConfigService } from '../../service/service.config';
import { AmChartsService, AmChart } from "@amcharts/amcharts3-angular";

@Component({
  selector: 'app-roipd',
  templateUrl: './roipd.component.html',
  styleUrls: ['./roipd.component.scss']
})
export class RoipdComponent implements OnInit {

	dFrom: Date ; dMin: Date;
	dTo: Date = new Date(); dMax: Date = new Date();
	data = []; paging: any; isnext = true; header: any; 
	search = { field: 'source', term: '' };
	version: any; versions = [{ 'version': '', 'os': '' }]; versionDisplay = [{ 'version': '', 'os': '' }];
	source: any; sources = [{ 'source_group': "All", 'source': '-1' }];
	platform : any; platforms = [
		{ 'id': '-1', 'name': 'All' },
		{ 'id': 'android', 'name': 'Android' },
		{ 'id': 'ios', 'name': 'iOS' },
		{ 'id': 'web', 'name': 'Web' }];

	constructor(private conf: ConfigService, private service: Service, private AmCharts: AmChartsService) {

		this.source = this.sources[0];
		this.platform = this.platforms[0];
		this.dFrom = new Date(this.dTo.getFullYear(), this.dTo.getMonth(), this.dTo.getDate() - 30);
		this.dMin = new Date(this.dMax.getFullYear(), this.dMax.getMonth(), this.dMax.getDate() - 1000);

		this.paging = { pg_page: 1, pg_size: 10, st_col: 'created_at', st_type: -1 };
		this.header = [
			{ id: 'date', name: 'Date', is_search: 1, st_col: 'date', st_type: 1 },
			{ id: 'source', name: 'Source', is_search: 1, st_col: 'source', st_type: 1 },
			{ id: 'os', name: 'Device Os', is_search: 1, st_col: 'os', st_type: 1 },
			{ id: 'install', name: 'Install', is_search: 1, st_col: 'install', st_type: 1 },
			{ id: 'rr3', name: 'RR3', is_search: 1, st_col: 'rr3', st_type: 1 },
			{ id: 'pd1', name: 'PD1', is_search: 1, st_col: 'pd1', st_type: 1 },
			{ id: 'pd3', name: 'PD3', is_search: 1, st_col: 'pd3', st_type: 1 },
			{ id: 'pd7', name: 'PD7', is_search: 1, st_col: 'pd7', st_type: 1 },
			{ id: 'pd14', name: 'PD14', is_search: 1, st_col: 'pd14', st_type: 1 },
			{ id: 'pd21', name: 'PD21', is_search: 1, st_col: 'pd21', st_type: 1 },
			{ id: 'pd30', name: 'PD30', is_search: 1, st_col: 'pd30', st_type: 1 }
		];

		this.doAnalysis();
		this.getSources();
	}

	ngOnInit(): void {

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
			if (this.paging.st_col == tempcol) {
				this.paging.st_type *= -1;
			} else {
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
			'startdate': Math.round(this.dFrom.getTime() / 1000),
			'enddate': Math.round(this.dTo.getTime() / 1000),
			'st_type': this.paging.st_type,
			['search_' + this.search.field]: this.search.term
		};
		if (this.platform.id != '-1')
			params.search_os = this.platform.id;

		if (this.source.source != '-1')
			params.search_source = this.source.source;

		this.service.get(this.conf.API_REPORT_ROI_PD, params,
			data => {
				this.data = Array.isArray(data) ? data : [];
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
	onVersionChanged(event){
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
