import { Component, OnInit } from '@angular/core';
import { Service } from '../../service/service';
import { ConfigService } from '../../service/service.config';

@Component({
  selector: 'app-roipd',
  templateUrl: './roipd.component.html',
  styleUrls: ['./roipd.component.scss']
})
export class RoipdComponent implements OnInit {

   public lineChartData: Array<any> = [
		{ data: [65, 59, 80, 81, 56, 55, 40], label: 'Install' },
		{ data: [28, 48, 40, 19, 86, 27, 90], label: 'NRU' },
		{ data: [18, 48, 77, 9, 100, 27, 40], label: 'RR1' },
		{ data: [18, 48, 77, 9, 0, 27, 40], label: 'RR7' },
		{ data: [18, 48, 77, 9, 0, 27, 40], label: 'RR30' }
	];
	public lineChartLabels: Array<any> = ['14 Jul', '15 Jul', '16 Jul', '17 Jul', '18 Jul', '19 Jul', '20 Jul'];
	public lineChartOptions: any = {
		animation: false,
		responsive: true
	};
	public lineChartColours: Array<any> = [
		{ // grey
			backgroundColor: 'rgba(148,159,177,0.2)',
			borderColor: 'rgba(148,159,177,1)',
			pointBackgroundColor: 'rgba(148,159,177,1)',
			pointBorderColor: '#fff',
			pointHoverBackgroundColor: '#fff',
			pointHoverBorderColor: 'rgba(148,159,177,0.8)'
		},
		{ // dark grey
			backgroundColor: 'rgba(77,83,96,0.2)',
			borderColor: 'rgba(77,83,96,1)',
			pointBackgroundColor: 'rgba(77,83,96,1)',
			pointBorderColor: '#fff',
			pointHoverBackgroundColor: '#fff',
			pointHoverBorderColor: 'rgba(77,83,96,1)'
		},
		{ // grey
			backgroundColor: 'rgba(148,159,177,0.2)',
			borderColor: 'rgba(148,159,177,1)',
			pointBackgroundColor: 'rgba(148,159,177,1)',
			pointBorderColor: '#fff',
			pointHoverBackgroundColor: '#fff',
			pointHoverBorderColor: 'rgba(148,159,177,0.8)'
		}
	];
	public lineChartLegend: boolean = true;
	public lineChartType: string = 'line';

	dFrom: Date;
	dTo: Date;
	dOrganic: any;

	data: any;

	paging: any;
	isnext: any;
	header: any;

	search: any;

	// Source list
	sources = [];
	source = { 'sourcename': "all", 'sourceid': '-1' };

	// Platform
	platforms = [
		{
			'id': '-1',
			'name': 'all'
		},
		{
			'id': 'android',
			'name': 'android'
		},
		{
			'id': 'ios',
			'name': 'ios'
		}
	];
	platform = { 'id': '-1', 'name': 'all' };

	constructor(private conf: ConfigService, private service: Service) {

		// Timing
		this.dTo = new Date();
		this.dFrom = new Date(this.dTo.getFullYear(), this.dTo.getMonth(), this.dTo.getDate() - 1000);
		this.data = [];
		this.platform = this.platforms[0];
		this.isnext = true;
		this.search = { field: 'source', term: '' };
		this.paging = { pg_page: 1, pg_size: 10, st_col: 'created_at', st_type: -1 };
		this.header = [
			{ id: 'date', name: 'Date', is_search: 1, st_col: 'date', st_type: 1 },
			{ id: 'appName', name: 'AppName', is_search: 1, st_col: 'appName', st_type: 1 },
			{ id: 'source', name: 'Media Source', is_search: 1, st_col: 'source', st_type: 1 },
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
			'search_os': null,
			'search_sourceid': null,
			'startdate': this.dFrom.getTime(),
			'enddate': this.dTo.getTime(),
			'st_type': this.paging.st_type,
			['search_' + this.search.field]: this.search.term
		};
		if (this.platform.id != '-1')
			params.search_os = this.platform.name;

		if (this.source.sourceid != '-1')
			params.search_sourceid = this.source.sourceid;

		this.service.get(this.conf.API_REPORT_ROI_PD, params,
			data => {
				this.data = Array.isArray(data) ? data : [];
				this.isnext = (this.data.length >= this.paging.pg_size) ? true : false;
			});
	}
	getSources() {
		this.service.getSources(data => {
			this.sources.push({ 'sourcename': "all", 'sourceid': '-1' });
			this.sources = this.sources.concat(data);
			this.source = this.sources[0];
		});
	}

}
