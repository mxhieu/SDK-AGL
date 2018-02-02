import { Component, OnInit, OnDestroy } from '@angular/core';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { FilterComponent } from '../filter/filter.component';
import { AmChartsService, AmChart } from "@amcharts/amcharts3-angular";

@Component({
	selector: 'app-gamereport',
	templateUrl: './gamereport.component.html',
})
export class GamereportComponent implements OnInit, OnDestroy {

	chart: AmChart;

	constructor(private AmCharts: AmChartsService) {

	}

	ngOnInit() {
		this.makeChart(this.getChartData());
	}

	makeChart(chartData: any[]) {

		this.chart = this.AmCharts.makeChart("chartdiv", {
			"type": "serial",
			"theme": "light",
			"legend": {
				"equalWidths": false,
				"useGraphSettings": true,
				"valueAlign": "left",
				"valueWidth": 120
			},
			"dataProvider": chartData,
			"valueAxes": [{
				"id": "leftAxis",
				"axisAlpha": 0,
				"gridAlpha": 0,
				"position": "left",
				"title": "RevInDay"
			}, {
				"id": "rightAxis",
				"axisAlpha": 0,
				"gridAlpha": 0,
				"position": "right",
				"title": "ARPPUDaily"
			}],
			"graphs": [{
				"alphaField": "alpha",
				"balloonText": "RevInDay:[[value]]",
				"dashLengthField": "dashLength",
				"fillAlphas": 0.7,
				"legendPeriodValueText": "total: [[value.sum]]",
				"legendValueText": "[[value]]",
				"title": "RevInDay",
				"type": "column",
				"valueField": "rev_in_day",
				"valueAxis": "leftAxis"
			}, {
				"balloonText": "ARPPUDaily:[[value]]",
				"bullet": "round",
				"bulletBorderAlpha": 1,
				"useLineColorForBulletBorder": true,
				"bulletColor": "#FFFFFF",
				"bulletSizeField": "townSize",
				"dashLengthField": "dashLength",
				"descriptionField": "",
				"labelPosition": "right",
				"labelText": "[[]]",
				"legendValueText": "[[value]]",
				"title": "ARPPUDaily",
				"fillAlphas": 0,
				"valueField": "arp_pu_daily",
				"valueAxis": "rightAxis"
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

		this.chart = this.AmCharts.makeChart("chartdiv2", {
			"type": "serial",
			"theme": "light",
			"legend": {
				"equalWidths": false,
				"useGraphSettings": true,
				"valueAlign": "left",
				"valueWidth": 120
			},
			"dataProvider": chartData,
			"valueAxes": [{
				"id": "leftAxis",
				"axisAlpha": 0,
				"gridAlpha": 0,
				"position": "left",
				"title": "PUInDay"
			}, {
				"id": "rightAxis",
				"axisAlpha": 0,
				"gridAlpha": 0,
				"position": "right",
				"title": "ARPPUDaily"
			}],
			"graphs": [{
				"alphaField": "alpha",
				"balloonText": "PUInDay:[[value]]",
				"dashLengthField": "dashLength",
				"fillAlphas": 0.7,
				"legendPeriodValueText": "total: [[value.sum]]",
				"legendValueText": "[[value]]",
				"title": "PUInDay",
				"type": "column",
				"valueField": "pu_in_day",
				"valueAxis": "leftAxis"
			}, {
				"balloonText": "ARPPUDaily:[[value]]",
				"bullet": "round",
				"bulletBorderAlpha": 1,
				"useLineColorForBulletBorder": true,
				"bulletColor": "#FFFFFF",
				"bulletSizeField": "townSize",
				"dashLengthField": "dashLength",
				"descriptionField": "",
				"labelPosition": "right",
				"labelText": "[[]]",
				"legendValueText": "[[value]]",
				"title": "ARPPUDaily",
				"fillAlphas": 0,
				"valueField": "arp_pu_daily",
				"valueAxis": "rightAxis"
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
		this.chart = this.AmCharts.makeChart("chartdiv3", {
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

	getChartData(): any[] {
		return [{
			"date": "2017-06-22",
			'rev_in_day': 0,
			'pu_in_day': 0,
			'arp_pu_daily': 0
		}, {
			"date": "2017-06-23",
			'rev_in_day': 0,
			'pu_in_day': 0,
			'arp_pu_daily': 25000000
		}, {
			"date": "2017-06-24",
			'rev_in_day': 0,
			'pu_in_day': 0,
			'arp_pu_daily': 40000000
		}, {
			"date": "2017-06-25",
			'rev_in_day': 0,
			'pu_in_day': 0,
			'arp_pu_daily': 50000000
		}, {
			"date": "2017-06-26",
			'rev_in_day': 0,
			'pu_in_day': 0,
			'arp_pu_daily': 350000000
		}, {
			"date": "2017-06-27",
			'rev_in_day': 0,
			'pu_in_day': 0,
			'arp_pu_daily': 45000000
		}, {
			"date": "2017-06-28",
			'rev_in_day': 600000000,
			'pu_in_day': 600000000,
			'arp_pu_daily': 25000000
		}, {
			"date": "2017-06-29",
			'rev_in_day': 600000000,
			'pu_in_day': 600000000,
			'arp_pu_daily': 25000000
		}, {
			"date": "2017-06-30",
			'rev_in_day': 550000000,
			'pu_in_day': 550000000,
			'arp_pu_daily': 45000000
		}, {
			"date": "2017-06-31",
			'rev_in_day': 50000000,
			'pu_in_day': 550000000,
			'arp_pu_daily': 36000000
		}, {
			"date": "2017-07-01",
			'rev_in_day': 50000000,
			'pu_in_day': 550000000,
			'arp_pu_daily': 36000000
		}, {
			"date": "2017-07-02",
			'rev_in_day': 50000000,
			'pu_in_day': 550000000,
			'arp_pu_daily': 36000000
		}, {
			"date": "2017-07-03",
			'rev_in_day': 50000000,
			'pu_in_day': 550000000,
			'arp_pu_daily': 36000000
		}, {
			"date": "2017-07-04",
			'rev_in_day': 50000000,
			'pu_in_day': 550000000,
			'arp_pu_daily': 36000000
		}, {
			"date": "2017-07-05",
			'rev_in_day': 0,
			'pu_in_day': 0
		}, {
			"date": "2017-07-06",
			'rev_in_day': 0,
			'pu_in_day': 0
		}];
	}

	apply(event) {
		console.log(event);
	}
	
	ngOnDestroy() {
		if (this.chart)
			this.AmCharts.destroyChart(this.chart);
	}
}