import { Component, OnInit, OnDestroy } from '@angular/core';
import { Service } from '../../service/service';
import { ConfigService } from '../../service/service.config';
import { AmChartsService, AmChart } from "@amcharts/amcharts3-angular";

@Component({
	selector: 'app-arm',
	templateUrl: './arm.component.html',
	styleUrls: ['./arm.component.scss']
})
export class ArmComponent implements OnInit, OnDestroy {

	// Chart
	chart: AmChart;
	options: any;

	// Make armchart random data
	makeRandomDataProvider() {

		const dataProvider = [];

		// Generate random data
		for (let year = 1950; year <= 2005; ++year) {
			dataProvider.push({
				year: '' + year,
				value: Math.floor(Math.random() * 100) - 50
			});
		}

		return dataProvider;
	}

	chartData = [];


	generateChartData() {

		var firstDate = new Date();
		firstDate.setTime(firstDate.getTime() - 10 * 24 * 60 * 60 * 1000);

		for (var i = firstDate.getTime(); i < (firstDate.getTime() + 10 * 24 * 60 * 60 * 1000); i += 60 * 60 * 1000) {
			var newDate = new Date(i);

			if (i == firstDate.getTime()) {
				var value1 = Math.round(Math.random() * 10) + 1;
			} else {
				var value1 = Math.round(this.chartData[this.chartData.length - 1].value1 / 100 * (90 + Math.round(Math.random() * 20)) * 100) / 100;
			}

			if (newDate.getHours() == 12) {
				// we set daily data on 12th hour only
				var value2 = Math.round(Math.random() * 12) + 1;
				this.chartData.push({
					date: newDate,
					value1: value1,
					value2: value2
				});
			} else {
				this.chartData.push({
					date: newDate,
					value1: value1
				});
			}
		}
	}

	// Make armchart options
	makeOptions(dataProvider) {
		return {
			'type': 'serial',
			'theme': 'light',
			'marginTop': 0,
			'marginRight': 80,
			'dataProvider': dataProvider,
			'valueAxes': [{
				'axisAlpha': 0,
				'position': 'left'
			}],
			'graphs': [{
				'id': 'g1',
				'balloonText': '[[category]]<br><b><span style=\'font-size:14px;\'>[[value]]</span></b>',
				'bullet': 'round',
				'bulletSize': 8,
				'lineColor': '#d1655d',
				'lineThickness': 2,
				'negativeLineColor': '#637bb6',
				'type': 'smoothedLine',
				'valueField': 'value'
			}],
			'chartScrollbar': {
				'graph': 'g1',
				'gridAlpha': 0,
				'color': '#888888',
				'scrollbarHeight': 55,
				'backgroundAlpha': 0,
				'selectedBackgroundAlpha': 0.1,
				'selectedBackgroundColor': '#888888',
				'graphFillAlpha': 0,
				'autoGridCount': true,
				'selectedGraphFillAlpha': 0,
				'graphLineAlpha': 0.2,
				'graphLineColor': '#c2c2c2',
				'selectedGraphLineColor': '#888888',
				'selectedGraphLineAlpha': 1
			},
			'chartCursor': {
				'categoryBalloonDateFormat': 'YYYY',
				'cursorAlpha': 0,
				'valueLineEnabled': true,
				'valueLineBalloonEnabled': true,
				'valueLineAlpha': 0.5,
				'fullWidth': true
			},
			'dataDateFormat': 'YYYY',
			'categoryField': 'year',
			'categoryAxis': {
				'minPeriod': 'YYYY',
				'parseDates': true,
				'minorGridAlpha': 0.1,
				'minorGridEnabled': true
			},
			'export': {
				'enabled': true
			}
		};
	}

	dFrom: Date; dTo: Date;
	data: any; paging: any; isnext: any; header: any; search: any;
	sources = [];
	source = { 'sourcename': "all", 'sourceid': '-1' };
	platforms = [{ 'id': '-1', 'name': 'all' }, { 'id': 'android', 'name': 'android' }, { 'id': 'ios', 'name': 'ios' }];
	platform = { 'id': '-1', 'name': 'all' };

	constructor(private conf: ConfigService, private service: Service, private AmCharts: AmChartsService) {

		this.dTo = new Date();
		this.dFrom = new Date(this.dTo.getFullYear(), this.dTo.getMonth(), this.dTo.getDate() - 1000);

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
		this.chart = this.AmCharts.makeChart('chartdiv', this.makeOptions(this.makeRandomDataProvider()));
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
			this.sources.push({ 'sourcename': "all", 'sourceid': '-1' });
			this.sources = this.sources.concat(data);
			this.source = this.sources[0];
		});
	}

}
