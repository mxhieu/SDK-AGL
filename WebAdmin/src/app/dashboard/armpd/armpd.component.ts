import { Component, OnInit } from '@angular/core';
import { AmChartsService, AmChart } from "@amcharts/amcharts3-angular";
import { Service } from '../../service/service';
import { ConfigService } from '../../service/service.config';

@Component({
	selector: 'app-armpd',
	styleUrls: ['./armpd.component.scss'],
	templateUrl: './armpd.component.html'
})
export class ArmpdComponent implements OnInit {

	dFrom: Date;
	dTo: Date;

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

	constructor(private conf: ConfigService, private service: Service, private AmCharts: AmChartsService) {

		// Timing
		this.dTo = new Date();
		this.dFrom = new Date(this.dTo.getFullYear(), this.dTo.getMonth(), this.dTo.getDate() - 1000);
		this.data = [];
		this.platform = this.platforms[0];
		this.isnext = true;
		this.search = { field: 'source', term: '' };
		this.paging = { pg_page: 1, pg_size: 10, st_col: 'created_at', st_type: -1 };
		this.header = [
			{ id: 'date', name: 'Date', is_search: 1, st_col: 'data', st_type: 1 },
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
		this.AmCharts.makeChart("chartdiv", {
			"type": "serial",
			"theme": "light",
			"legend": {
				"equalWidths": false,
				"useGraphSettings": true,
				"valueAlign": "left",
				"valueWidth": 120
			},
			"dataProvider": [{
				"date": "2018-01-14",
				"install": 16000,
				"nru": 10000,
				"rr1": 40.71,
				"townName": "New York",
				"townName2": "New York",
				"townSize": 25,
				"duration": 408
			}, {
				"date": "2018-01-15",
				"install": 22000,
				"nru": 18000,
				"rr1": 38.89,
				"townName": "Washington",
				"townSize": 14,
				"duration": 482
			}, {
				"date": "2018-01-16",
				"install": 16100,
				"nru": 9000,
				"rr1": 34.22,
				"townName": "Wilmington",
				"townSize": 6,
				"duration": 562
			}, {
				"date": "2018-01-17",
				"install": 15800,
				"nru": 8000,
				"rr1": 30.35,
				"townName": "Jacksonville",
				"townSize": 7,
				"duration": 379
			}, {
				"date": "2018-01-18",
				"install": 15500,
				"nru": 5000,
				"rr1": 25.83,
				"townName": "Miami",
				"townName2": "Miami",
				"townSize": 10,
				"duration": 501
			}, {
				"date": "2018-01-19",
				"install": 14000,
				"nru": 10000,
				"rr1": 30.46,
				"townName": "Tallahassee",
				"townSize": 7,
				"duration": 443
			}, {
				"date": "2018-01-20",
				"install": 13800,
				"nru": 7500,
				"rr1": 29.94,
				"townName": "New Orleans",
				"townSize": 10,
				"duration": 405
			}, {
				"date": "2018-01-21",
				"install": 800,
				"nru": 100,
				"rr1": 29.76,
				"townName": "Houston",
				"townName2": "Houston",
				"townSize": 16,
				"duration": 309
			}, {
				"date": "2018-01-22",
				"install": 700,
				"nru": 800,
				"rr1": 32.8,
				"townName": "Dalas",
				"townSize": 17,
				"duration": 287
			}, {
				"date": "2018-01-23",
				"install": 349,
				"nru": 768,
				"rr1": 35.49,
				"townName": "Oklahoma City",
				"townSize": 11,
				"duration": 485
			}, {
				"date": "2018-01-24",
				"install": 603,
				"nru": 123,
				"rr1": 39.1,
				"townName": "Kansas City",
				"townSize": 10,
				"duration": 890
			}, {
				"date": "2018-01-25",
				"install": 534,
				"nru": 1820,
				"rr1": 39.74,
				"townName": "Denver",
				"townName2": "Denver",
				"townSize": 18,
				"duration": 810
			}, {
				"date": "2018-01-26",
				"install": 425,
				"nru": 768,
				"rr1": 40.75,
				"townName": "Salt Lake City",
				"townSize": 12,
				"duration": 670,
				"dashLength": 8,
				"alpha": 0.4
			}, {
				"date": "2018-01-27",
				"install": 0,
				"nru": 0,
				"rr1": 36.1,
				"duration": 470,
				"townName": "Las Vegas",
				"townName2": "Las Vegas"
			}, {
				"date": "2018-01-28",
				"install": 0,
				"nru": 0,
				"rr1": 0
			}, {
				"date": "2018-01-29",
				"install": 0,
				"nru": 0,
				"rr1": 0
			}],
			"valueAxes": [{
				"id": "installAxis",
				"axisAlpha": 0,
				"gridAlpha": 0,
				"position": "left",
				"title": ""
			},{
				"id": "nruAxis",
				"axisAlpha": 0,
				"gridAlpha": 0,
				"position": "left",
				"title": ""
			},{
				"id": "rr1Axis",
				"axisAlpha": 0,
				"gridAlpha": 0,
				"labelsEnabled": false,
				"position": "right"
			}, {
				"id": "durationAxis",
				"duration": "mm",
				"durationUnits": {
					"hh": "h ",
					"mm": "min"
				},
				"axisAlpha": 0,
				"gridAlpha": 0,
				"inside": true,
				"position": "right",
				"title": ""
			}],
			"graphs": [{
				"alphaField": "alpha",
				"balloonText": "[[value]]",
				"dashLengthField": "dashLength",
				"fillAlphas": 0.7,
				"legendPeriodValueText": "total: [[value.sum]]",
				"legendValueText": "[[value]]",
				"title": "INSTALL",
				"type": "column",
				"valueField": "install",
				"valueAxis": "installAxis"
			},{
				"alphaField": "alpha",
				"balloonText": "nru:[[value]]",
				"dashLengthField": "dashLength",
				"fillAlphas": 0.7,
				"legendPeriodValueText": "total: [[value.sum]]",
				"legendValueText": "[[value]]",
				"title": "NRU",
				"type": "column",
				"valueField": "nru",
				"valueAxis": "nruAxis"
			},{
				"balloonText": "rr1:[[value]]",
				"bullet": "round",
				"bulletBorderAlpha": 1,
				"useLineColorForBulletBorder": true,
				"bulletColor": "#FFFFFF",
				"bulletSizeField": "townSize",
				"dashLengthField": "dashLength",
				"descriptionField": "",
				"labelPosition": "right",
				"labelText": "[[]]",
				"legendValueText": "[[value]]/[[description]]",
				"title": "RR1",
				"fillAlphas": 0,
				"valueField": "rr1",
				"valueAxis": "rr1Axis"
			}, {
				"bullet": "square",
				"bulletBorderAlpha": 1,
				"bulletBorderThickness": 1,
				"dashLengthField": "dashLength",
				"legendValueText": "[[value]]",
				"title": "duration",
				"fillAlphas": 0,
				"valueField": "duration",
				"valueAxis": "durationAxis"
			}],
			"chartCursor": {
				"categoryBalloonDateFormat": "DD",
				"cursorAlpha": 0.1,
				"cursorColor": "#000000",
				"fullWidth": true,
				"valueBalloonsEnabled": false,
				"zoomable": false
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
				"gridAlpha": 0.1,
				"gridColor": "#FFFFFF",
				"gridCount": 50
			},
			"export": {
				"enabled": true
			}
		});

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

		this.service.get(this.conf.API_REPORT_ARM_PD, params,
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
