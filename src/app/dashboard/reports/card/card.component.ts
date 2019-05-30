import { Component, OnInit, OnDestroy } from '@angular/core';
import { ReportService } from '../../../service/report.service';
import { AmChartsService, AmChart } from "@amcharts/amcharts3-angular";
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';

@Component({
	selector: 'app-card',
	templateUrl: './card.component.html',
	styleUrls: ['../report.component.scss']
})

export class CardComponent implements OnInit, OnDestroy {

	chart: AmChart;
	dFrom: Date; dMin: Date; dTo: Date = new Date(); dMax: Date = new Date();

	data = []; paging: any; isnext = true; header: any;
	search = { field: 'product', term: '' };

	products: any;
	cardTypes: any; cardType: any;
	titlechart: any;

	constructor(private service: ReportService, private AmCharts: AmChartsService) {
		this.products = ['m001', 'm002', 'm003', 'm004']
		this.cardTypes = [{ name: 'VTT' }, { name: 'VMS' }, { name: 'VNP' }, { name: 'VTC' }, { name: 'HPC' }, { name: 'ATM' }, { name: 'GATE' }, { name: 'IAP' }] 
		this.cardType = 'all';

		this.dFrom = this.service.fromDate(this.dTo.getFullYear(), this.dTo.getMonth(), this.dTo.getDate(), 15);
		this.dMin = this.service.fromDate(this.dMax.getFullYear(), this.dMax.getMonth(), this.dMax.getDate(), 365);

		this.paging = this.service.defaultPaging('date');

		this.header = [
			{ id: 'date', name: 'Date', st_type: 1 },
			{ id: 'product', name: 'Product', is_search: 1, st_col: 'product', st_type: 1 },
			{ id: 'cardType', name: 'CardType', is_search: 1, st_col: 'cardType', st_type: 1 },
			{ id: 'user_pay', name: 'PayUser', is_search: 1, st_col: 'user_pay', st_type: 1 },
			{ id: 'rev_user', name: 'Rev', is_search: 1, st_col: 'rev_user', st_type: 1 }
		];
		this.doAnalysis();

	}

	ngOnInit(): void {

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
				"stackType": "regular",
				"axisAlpha": 0.3,
				"gridAlpha": 0,
				"totalText": "[[total]]"
			}],
			"graphs": [{
        "balloonText": "<b>[[title]]</b><br><span style='font-size:14px'>[[category]]: <b>[[value]]</b></span>",
        "fillAlphas": 0.8,
        "lineAlpha": 0.3,
        "title": "Rev IAP",
        "type": "column",
        "legendPeriodValueText": ": [[value.sum]]",
				"legendValueText": "[[value]]",
        "valueField": "rev_IAP"
      }, {
				"balloonText": "<b>[[title]]</b><br><span style='font-size:14px'>[[category]]: <b>[[value]]</b></span>",
				"fillAlphas": 0.8,
				"lineAlpha": 0.3,
				"title": "Rev VMS",
				"type": "column",
				"legendPeriodValueText": ": [[value.sum]]",
				"legendValueText": "[[value]]",
				"valueField": "rev_VMS"
			}, {
				"balloonText": "<b>[[title]]</b><br><span style='font-size:14px'>[[category]]: <b>[[value]]</b></span>",
				"fillAlphas": 0.8,
				"lineAlpha": 0.3,
				"title": "Rev VNP",
				"type": "column",
				"legendPeriodValueText": ": [[value.sum]]",
				"legendValueText": "[[value]]",
				"valueField": "rev_VNP"
			}, {
				"balloonText": "<b>[[title]]</b><br><span style='font-size:14px'>[[category]]: <b>[[value]]</b></span>",
				"fillAlphas": 0.8,
				"lineAlpha": 0.3,
				"title": "Rev VTC",
				"type": "column",
				"legendPeriodValueText": ": [[value.sum]]",
				"legendValueText": "[[value]]",
				"valueField": "rev_VTC"
			}, {
				"balloonText": "<b>[[title]]</b><br><span style='font-size:14px'>[[category]]: <b>[[value]]</b></span>",
				"fillAlphas": 0.8,
				"lineAlpha": 0.3,
				"title": "Rev VTT",
				"type": "column",
				"legendPeriodValueText": ": [[value.sum]]",
				"legendValueText": "[[value]]",
				"valueField": "rev_VTT"
			},
			{
				"balloonText": "<b>[[title]]</b><br><span style='font-size:14px'>[[category]]: <b>[[value]]</b></span>",
				"fillAlphas": 0.8,
				"lineAlpha": 0.3,
				"title": "Rev HPC",
				"type": "column",
				"legendPeriodValueText": ": [[value.sum]]",
				"legendValueText": "[[value]]",
				"valueField": "rev_HPC"
			},
			{
				"balloonText": "<b>[[title]]</b><br><span style='font-size:14px'>[[category]]: <b>[[value]]</b></span>",
				"fillAlphas": 0.8,
				"lineAlpha": 0.3,
				"title": "Rev ATM",
				"type": "column",
				"legendPeriodValueText": ": [[value.sum]]",
				"legendValueText": "[[value]]",
				"valueField": "rev_ATM"
			},
			{
				"balloonText": "<b>[[title]]</b><br><span style='font-size:14px'>[[category]]: <b>[[value]]</b></span>",
				"fillAlphas": 0.8,
				"lineAlpha": 0.3,
				"title": "Rev GATE",
				"type": "column",
				'color': "#000000",
				"legendPeriodValueText": ": [[value.sum]]",
				"legendValueText": "[[value]]",
				"valueField": "rev_GATE"
			}],
			"categoryField": "date",
			"categoryAxis": {
				"gridPosition": "start",
				"axisAlpha": 0,
				"gridAlpha": 0,
				"position": "left"
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
			'id': this.service.getAppId(),
			'pg_page': this.paging.pg_page,
			'pg_size': this.paging.pg_size,
			'st_col': this.paging.st_col,
			'st_type': this.paging.st_type,
			'startdate': Math.round(this.dFrom.getTime() / 1000),
			'enddate': Math.round(this.dTo.getTime() / 1000)
		};
		if (this.cardType != 'all') { params['cardType'] = this.cardType }
		if (this.search.term && this.search.term.length > 0) { params['search_' + this.search.field] = this.search.term }

		this.service.cardAnalysis(params, data => {
			this.data = data;
			this.isnext = (this.data.length >= this.paging.pg_size) ? true : false;
		});
		this.getChart();
	}

	getChart() {
		var params = {
			'id': this.service.getAppId(),
			'pg_page': 1,
			'pg_size': 100,
			'st_col': 'date',
			'st_type': 1,
			'startdate': Math.round(this.dFrom.getTime() / 1000),
			'enddate': Math.round(this.dTo.getTime() / 1000)
		};

		if (this.cardType != 'all') { params['cardType'] = this.cardType }
		if (this.search.term && this.search.term.length > 0) { params['search_' + this.search.field] = this.search.term }

		this.service.cardChartAnalysis(params, data => {
			this.makeChart(data);
		});
	}
}
