import { Component, OnInit, OnDestroy } from '@angular/core';
import { Service } from '../../service/service';
import { ConfigService } from '../../service/service.config';
import { AmChartsService, AmChart } from "@amcharts/amcharts3-angular";

@Component({
	selector: 'app-roi',
	templateUrl: './roi.component.html',
	styleUrls: ['./roi.component.scss']
})
export class RoiComponent implements OnInit , OnDestroy{

	dFrom: Date;
	dTo: Date;
	dOrganic: any;

	data: any;

	paging: any;
	isnext: any;
	header: any;

	search: any;

	chart: AmChart;

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

	constructor(private conf: ConfigService, private service: Service, private AmCharts: AmChartsService) {

		// Timing
		this.dTo = new Date();
		this.dFrom = new Date(this.dTo.getFullYear(), this.dTo.getMonth(), this.dTo.getDate() - 1000);
		this.data = [];
		this.platform = this.platforms[0];
		this.isnext = true;
		this.search = { field: 'source', term: '' };
		this.paging = { pg_page: 1, pg_size: 10, st_col: 'date', st_type: -1 };
		this.header = [
			{ id: 'date', name: 'Date', is_search: 1, st_col: 'data', st_type: 1 },
			{ id: 'source', name: 'Media Source', is_search: 1, st_col: 'source', st_type: 1 },
			{ id: 'os', name: 'Device Os', is_search: 1, st_col: 'os', st_type: 1 },
			{ id: 'install', name: 'Install', is_search: 1, st_col: 'install', st_type: 1 },
			{ id: 'nru', name: 'NRU', is_search: 1, st_col: 'nru', st_type: 1 },
			{ id: 'rr3', name: 'RR3', is_search: 1, st_col: 'rr3', st_type: 1 },
			{ id: 'pu1', name: 'PU1', is_search: 1, st_col: 'pu1', st_type: 1 },
			{ id: 'pu3', name: 'PU3', is_search: 1, st_col: 'pu3', st_type: 1 },
			{ id: 'pu7', name: 'PU7', is_search: 1, st_col: 'pu7', st_type: 1 },
			{ id: 'pu14', name: 'PU14', is_search: 1, st_col: 'pu14', st_type: 1 },
			{ id: 'pu21', name: 'PU21', is_search: 1, st_col: 'pu21', st_type: 1 },
			{ id: 'pu30', name: 'PU30', is_search: 1, st_col: 'pu30', st_type: 1 },
			{ id: 'pu60', name: 'PU60', is_search: 1, st_col: 'pu60', st_type: 1 },
		];
		this.doAnalysis();
		this.getSources();
	}

	ngOnInit(): void {
		this.chart = this.AmCharts.makeChart("chartdiv", {
			"type": "serial",
			"theme": "light",
			"marginRight": 80,
			"dataProvider": [{
				"lineColor": "#b7e021",
				"date": "2012-01-01",
				"duration": 408
			}, {
				"date": "2012-01-02",
				"duration": 482
			}, {
				"date": "2012-01-03",
				"duration": 562
			}, {
				"date": "2012-01-04",
				"duration": 379
			}, {
				"lineColor": "#fbd51a",
				"date": "2012-01-05",
				"duration": 501
			}, {
				"date": "2012-01-06",
				"duration": 443
			}, {
				"date": "2012-01-07",
				"duration": 405
			}, {
				"date": "2012-01-08",
				"duration": 309,
				"lineColor": "#2498d2"
			}, {
				"date": "2012-01-09",
				"duration": 287
			}, {
				"date": "2012-01-10",
				"duration": 485
			}, {
				"date": "2012-01-11",
				"duration": 890
			}, {
				"date": "2012-01-12",
				"duration": 810
			}],
			"balloon": {
				"cornerRadius": 6,
				"horizontalPadding": 15,
				"verticalPadding": 10
			},
			"valueAxes": [{
				"duration": "mm",
				"durationUnits": {
					"hh": "h ",
					"mm": "min"
				},
				"axisAlpha": 0
			}],
			"graphs": [{
				"bullet": "square",
				"bulletBorderAlpha": 1,
				"bulletBorderThickness": 1,
				"fillAlphas": 0.3,
				"fillColorsField": "lineColor",
				"legendValueText": "[[value]]",
				"lineColorField": "lineColor",
				"title": "duration",
				"valueField": "duration"
			}],
			"chartScrollbar": {

			},
			"chartCursor": {
				"categoryBalloonDateFormat": "YYYY MMM DD",
				"cursorAlpha": 0,
				"fullWidth": true
			},
			"dataDateFormat": "YYYY-MM-DD",
			"categoryField": "date",
			"categoryAxis": {
				"dateFormats": [{
					"period": "DD",
					"format": "DD"
				}, {
					"period": "WW",
					"format": "MMM DD"
				}, {
					"period": "MM",
					"format": "MMM"
				}, {
					"period": "YYYY",
					"format": "YYYY"
				}],
				"parseDates": true,
				"autoGridCount": false,
				"axisColor": "#555555",
				"gridAlpha": 0,
				"gridCount": 50
			},
			"export": {
				"enabled": true
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

		this.service.get(this.conf.API_REPORT_ROI, params,
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