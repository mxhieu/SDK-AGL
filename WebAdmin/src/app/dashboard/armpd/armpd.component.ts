import { Component, OnInit } from '@angular/core';
import 'rxjs/Rx';
import { Service } from '../../service/service';
import { ConfigService } from '../../service/service.config';

@Component({
	selector: 'app-armpd',
	styleUrls: ['./armpd.component.scss'],
	templateUrl: './armpd.component.html'
})
export class ArmpdComponent implements OnInit {

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
		{ 
			backgroundColor: 'rgba(0, 0, 255, 0.2)',
			borderColor: 'blue',
			pointBackgroundColor: 'blue',
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
		{
			backgroundColor: 'rgba(255, 0, 0, 0.2)',
			borderColor: 'pink',
			pointBackgroundColor: 'rgba(148,159,177,1)',
			pointBorderColor: '#fff',
			pointHoverBackgroundColor: '#fff',
			pointHoverBorderColor: 'rgba(148,159,177,0.8)'
		},
		{ 
			backgroundColor: 'rgba(0, 255, 0, 0.2)',
			borderColor: 'green',
			pointBackgroundColor: 'rgba(148,159,177,1)',
			pointBorderColor: '#fff',
			pointHoverBackgroundColor: '#fff',
			pointHoverBorderColor: 'rgba(148,159,177,0.8)'
		},
		{ 
			backgroundColor: 'rgba(148,159,177,0.2)',
			borderColor: 'orange',
			pointBackgroundColor: 'rgba(148,159,177,1)',
			pointBorderColor: '#fff',
			pointHoverBackgroundColor: '#fff',
			pointHoverBorderColor: 'rgba(148,159,177,0.8)'
		}
	];
	public lineChartLegend: boolean = true;
	public lineChartType: string = 'line';

	dFrom: any;
	dTo: any;
	dOrganic: any;

	data: any;

	onerow: any;
	paging: any;
	isnext: any;
	header: any;
	state: any;
	search: any;

	constructor(private conf: ConfigService, private service: Service) {

		this.state = 'listall';
		this.onerow = {};
		this.data = [];
		this.isnext = true;
		this.search = { field: 'name', term: '' };
		this.paging = { pg_page: 1, pg_size: 10, st_col: 'created_at', st_type: -1 };
		this.header = [
			{ id: 'date', name: 'Date', is_search: 1, st_col: 'data', st_type: 1 },
			{ id: 'source', name: 'Source', is_search: 1, st_col: 'source', st_type: 1 },
			{ id: 'os', name: 'Device Os', is_search: 1, st_col: 'os', st_type: 1 },
			{ id: 'install', name: 'Install (GMT +7)', is_search: 1, st_col: 'created_at', st_type: 1 },
			{ id: 'cost', name: 'Cost(USD)', is_search: 1, st_col: 'created_at', st_type: 1 },
			{ id: 'cpi', name: 'CPI', is_search: 1, st_col: 'created_at', st_type: 1 },
			{ id: 'rr1', name: 'RR1', is_search: 1, st_col: 'created_at', st_type: 1 },
			{ id: 'rr7', name: 'RR7', is_search: 1, st_col: 'created_at', st_type: 1 },
			{ id: 'rr30', name: 'RR30', is_search: 1, st_col: 'created_at', st_type: 1 },
			{ id: 'uv30', name: 'UV30', is_search: 1, st_col: 'created_at', st_type: 1 },
			{ id: 'cr7', name: 'CR7', is_search: 1, st_col: 'created_at', st_type: 1 },
			{ id: 'rev7', name: 'REV7', is_search: 1, st_col: 'created_at', st_type: 1 },
			{ id: 'cr30', name: 'CR30', is_search: 1, st_col: 'created_at', st_type: 1 },
			{ id: 'rev30', name: 'REV30', is_search: 1, st_col: 'created_at', st_type: 1 }
		];

		this.helpFetchData();
	}

	ngOnInit(): void {
		this.dFrom = new Date();
		this.dTo = new Date();
		this.dOrganic = new Date();
	}

	// Read 
	viewDetail(_onerow) {
		this.onerow = _onerow;
		this.onerow.isview = true;
	}

	viewRecycle() {
		this.state = 'recycle';
		this.paging.search_is_deleted = 1;
		this.helpFetchData();
	}

	viewDefault() {
		this.state = 'listall';
		this.paging.search_is_deleted = 0;
		this.helpFetchData();
	}

	jumpPage(_page) {
		_page = (_page <= 0) ? 1 : _page;
		this.paging.pg_page = _page
		this.helpFetchData();
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
			this.helpFetchData();
		}
	}

	helpReset() {
		this.onerow = {};
	}

	helpFetchData() {
		for (var i = 0; i < 20; i++) {
			this.data.push({
				'date': new Date(),
				'source': 'Mainsite',
				'os': 'android',
				'install': 128412,
				'cost': 0,
				'cpi': 0,
				'rr1': '65.79%',
				'rr7': '0%',
				'rr30': '0%',
				'uv30': '7105',
				'cr7': '5.26%',
				'rev7': '26000',
				'cr30': '5.26%',
				'rev30': '26000'
			});
		}
	}

	helpUpperCaseAfterCommas = function(str) {
		return str.replace(/,\s*([a-z])/g, function(d, e) { return ", " + e.toUpperCase() });
	}

}
