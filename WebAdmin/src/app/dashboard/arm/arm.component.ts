import { Component, OnInit, OnDestroy } from '@angular/core';
import { Service } from '../../service/service';
import { ConfigService } from '../../service/service.config';
import { AmChartsService, AmChart } from "@amcharts/amcharts3-angular";
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';

@Component({
	selector: 'app-arm',
	templateUrl: './arm.component.html',
	styleUrls: ['./arm.component.scss']
})
export class ArmComponent implements OnInit, OnDestroy {

	chart: AmChart;

	generateChartData(): any[] {
		var chartData = [];
		var firstDate = new Date();
		firstDate.setDate(firstDate.getDate() - 100);

		var visits = 1600;
		var hits = 2900;
		var views = 8700;


		for (var i = 0; i < 100; i++) {
			// we create date objects here. In your data, you can have date strings
			// and then set format of your dates using chart.dataDateFormat property,
			// however when possible, use date objects, as this will speed up chart rendering.
			var newDate = new Date(firstDate);
			newDate.setDate(newDate.getDate() + i);

			visits += Math.round((Math.random() < 0.5 ? 1 : -1) * Math.random() * 10);
			hits += Math.round((Math.random() < 0.5 ? 1 : -1) * Math.random() * 10);
			views += Math.round((Math.random() < 0.5 ? 1 : -1) * Math.random() * 10);

			chartData.push({
				date: newDate,
				visits: visits,
				hits: hits,
				views: views
			});
		}
		return chartData;
	}

	dFrom: Date = new Date(); dTo: Date = new Date(); dMin: Date = new Date(); dMax: Date = new Date();
	bsConfig: Partial<BsDatepickerConfig>;

	data: any; paging: any; isnext: any; header: any; search: any;
	sources = [];
	source = { 'sourcename': "Please choose source", 'sourceid': '-1' };
	platforms = [{ 'id': '-1', 'name': 'Please choose OS' }, { 'id': 'android', 'name': 'android' }, { 'id': 'ios', 'name': 'ios' }];
	platform = { 'id': '-1', 'name': 'Please choose OS' };

	constructor(private conf: ConfigService, private service: Service, private AmCharts: AmChartsService) {

		// Date picker
		this.dTo = new Date();
		this.dFrom = new Date(this.dTo.getFullYear(), this.dTo.getMonth(), this.dTo.getDate() - 1000);
		this.dMin = this.dFrom;
		this.dMax = this.dTo;
		this.bsConfig = Object.assign({}, { containerClass: 'theme-dark-blue' });

		this.data = [];
		this.platform = this.platforms[0];

		this.isnext = true;
		this.search = { field: 'source', term: '' };
		this.paging = { pg_page: 1, pg_size: 10, st_col: 'date', st_type: -1 };
		this.header = [
			{ id: 'date', name: 'Date', is_search: 1, st_col: 'date', st_type: 1 },
			{ id: 'source', name: 'Source', is_search: 1, st_col: 'source', st_type: 1 },
			{ id: 'os', name: 'Device Os', is_search: 1, st_col: 'os', st_type: 1 },
			{ id: 'install', name: 'Install', is_search: 1, st_col: 'install', st_type: 1 },
			{ id: 'nru0', name: 'NRU0', is_search: 1, st_col: 'nru0', st_type: 1 },
			{ id: 'nru', name: 'NRU', is_search: 1, st_col: 'nru', st_type: 1 },
			{ id: 'nru0_install', name: 'NRU0/Install', is_search: 1, st_col: 'nru0_install', st_type: 1 },
			{ id: 'cost', name: 'Cost(USD)', is_search: 1, st_col: 'cost', st_type: 1 },
			{ id: 'cpi', name: 'CPI', is_search: 1, st_col: 'cpi', st_type: 1 },
			{ id: 'rr1', name: 'RR1', is_search: 1, st_col: 'rr1', st_type: 1 },
			{ id: 'rr7', name: 'RR7', is_search: 1, st_col: 'rr7', st_type: 1 },
			{ id: 'rr30', name: 'RR30', is_search: 1, st_col: 'rr30', st_type: 1 },
			{ id: 'uv30', name: 'UV30', is_search: 1, st_col: 'uv30', st_type: 1 },
			{ id: 'cr7', name: 'CR7', is_search: 1, st_col: 'cr7', st_type: 1 },
			{ id: 'rev7', name: 'REV7', is_search: 1, st_col: 'rev7', st_type: 1 },
			{ id: 'cr30', name: 'CR30', is_search: 1, st_col: 'cr30', st_type: 1 },
			{ id: 'rev30', name: 'REV30', is_search: 1, st_col: 'rev30', st_type: 1 }
		];
		this.doAnalysis();
		this.getSources();
	}

	ngOnInit(): void {
		this.chart = this.AmCharts.makeChart("chartdiv", {
			"type": "serial",
			"theme": "light",
			"legend": {
				"useGraphSettings": true
			},
			"dataProvider": this.generateChartData(),
			"synchronizeGrid": true,
			"valueAxes": [{
				"id": "v1",
				"axisColor": "#FF6600",
				"axisThickness": 2,
				"axisAlpha": 1,
				"position": "left"
			}, {
				"id": "v2",
				"axisColor": "#FCD202",
				"axisThickness": 2,
				"axisAlpha": 1,
				"position": "right"
			}, {
				"id": "v3",
				"axisColor": "#B0DE09",
				"axisThickness": 2,
				"gridAlpha": 0,
				"offset": 50,
				"axisAlpha": 1,
				"position": "left"
			}],
			"graphs": [{
				"valueAxis": "v1",
				"lineColor": "#FF6600",
				"bullet": "round",
				"bulletBorderThickness": 1,
				"hideBulletsCount": 30,
				"title": "red line",
				"valueField": "visits",
				"fillAlphas": 0
			}, {
				"valueAxis": "v2",
				"lineColor": "#FCD202",
				"bullet": "square",
				"bulletBorderThickness": 1,
				"hideBulletsCount": 30,
				"title": "yellow line",
				"valueField": "hits",
				"fillAlphas": 0
			}, {
				"valueAxis": "v3",
				"lineColor": "#B0DE09",
				"bullet": "triangleUp",
				"bulletBorderThickness": 1,
				"hideBulletsCount": 30,
				"title": "green line",
				"valueField": "views",
				"fillAlphas": 0
			}],
			"chartScrollbar": {},
			"chartCursor": {
				"cursorPosition": "mouse"
			},
			"categoryField": "date",
			"categoryAxis": {
				"parseDates": true,
				"axisColor": "#DADADA",
				"minorGridEnabled": true
			},
			"export": {
				"enabled": true,
				"position": "bottom-right"
			}
		});
	}

	ngOnDestroy() {
		if (this.chart)
			this.AmCharts.destroyChart(this.chart);
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
			'search_os': null,
			'search_sourceid': null,
			'startdate': Math.round(this.dFrom.getTime() / 1000),
			'enddate': Math.round(this.dTo.getTime() / 1000),
			'st_type': this.paging.st_type,
			['search_' + this.search.field]: this.search.term
		};
		if (this.platform.id != '-1')
			params.search_os = this.platform.name;

		if (this.source.sourceid != '-1')
			params.search_sourceid = this.source.sourceid;

		this.service.get(this.conf.API_REPORT_ARM, params,
			data => {
				this.data = Array.isArray(data) ? data : [];
				this.isnext = (this.data.length >= this.paging.pg_size) ? true : false;
			});
	}
	getSources() {
		this.service.getSources(data => {
			this.sources.push({ 'sourcename': "Please choose OS", 'sourceid': '-1' });
			this.sources = this.sources.concat(data);
			this.source = this.sources[0];
		});
	}

}
