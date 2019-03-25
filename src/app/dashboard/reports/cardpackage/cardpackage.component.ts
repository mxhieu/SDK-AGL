import { Component, OnInit, OnDestroy } from '@angular/core';
import { ReportService } from '../../../service/report.service';
import { AmChartsService, AmChart } from "@amcharts/amcharts3-angular";
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';

@Component({
	selector: 'app-cardpackage',
	templateUrl: './cardpackage.component.html',
	styleUrls: ['../report.component.scss']
})

export class CardPackageComponent implements OnInit, OnDestroy {

	chart: AmChart;
	dFrom: Date; dMin: Date; dTo: Date = new Date(); dMax: Date = new Date();

	data = []; paging: any; isnext = true; header: any;
	search = { field: 'product', term: '' };

	products: any;
	cardTypes: any; cardType: any;
	titlechart: any;
  platform: any; platforms = [];

  // Source
  source: any; sources = [{ 'source_group': "All", 'source': '-1' }];

  // Version
  version: any; versions = [{ '_id': '', 'version': '', 'os': '' }];
  versionDisplay = [{  '_id': '', 'version': '', 'os': '' }];
  isVersionHidden: boolean;

  appgroupid: any;
  appid: any;

	constructor(private service: ReportService, private AmCharts: AmChartsService) {
		this.products = ['m001', 'm002', 'm003', 'm004']
		this.cardTypes = [{ name: 'VTT' }, { name: 'VMS' }, { name: 'VNP' }, { name: 'VTC' }, { name: 'HPC' }, { name: 'ATM' }], { name: 'GATE' }
		this.cardType = 'all';

		this.dFrom = this.service.fromDate(this.dTo.getFullYear(), this.dTo.getMonth(), this.dTo.getDate(), 30);
		this.dMin = this.service.fromDate(this.dMax.getFullYear(), this.dMax.getMonth(), this.dMax.getDate(), 365);

		this.paging = this.service.defaultPaging('date');
    // this.platforms = this.service.defaultPlatforms();
    // this.platform = this.platforms[0];
    
		this.header = [
			{ id: 'date', name: 'Date', st_type: 1 },
			{ id: 'product', name: 'Product', is_search: 1, st_col: 'product', st_type: 1 },
			{ id: 'cardType', name: 'CardType', is_search: 1, st_col: 'cardType', st_type: 1 },
			{ id: 'user_pay', name: 'PayUser', is_search: 1, st_col: 'user_pay', st_type: 1 },
			{ id: 'rev_user', name: 'Rev', is_search: 1, st_col: 'rev_user', st_type: 1 }
		];
    this.getSources();
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
				"title": "Rev VMS",
				"type": "column",
				"valueField": "rev_VMS"
			}, {
				"balloonText": "<b>[[title]]</b><br><span style='font-size:14px'>[[category]]: <b>[[value]]</b></span>",
				"fillAlphas": 0.8,
				"lineAlpha": 0.3,
				"title": "Rev VNP",
				"type": "column",
				"valueField": "rev_VNP"
			}, {
				"balloonText": "<b>[[title]]</b><br><span style='font-size:14px'>[[category]]: <b>[[value]]</b></span>",
				"fillAlphas": 0.8,
				"lineAlpha": 0.3,
				"title": "Rev VTC",
				"type": "column",
				"valueField": "rev_VTC"
			}, {
				"balloonText": "<b>[[title]]</b><br><span style='font-size:14px'>[[category]]: <b>[[value]]</b></span>",
				"fillAlphas": 0.8,
				"lineAlpha": 0.3,
				"title": "Rev VTT",
				"type": "column",
				"valueField": "rev_VTT"
			},
			{
				"balloonText": "<b>[[title]]</b><br><span style='font-size:14px'>[[category]]: <b>[[value]]</b></span>",
				"fillAlphas": 0.8,
				"lineAlpha": 0.3,
				"title": "Rev HPC",
				"type": "column",
				"valueField": "rev_HPC"
			},
			{
				"balloonText": "<b>[[title]]</b><br><span style='font-size:14px'>[[category]]: <b>[[value]]</b></span>",
				"fillAlphas": 0.8,
				"lineAlpha": 0.3,
				"title": "Rev ATM",
				"type": "column",
				"valueField": "rev_ATM"
			},
			{
				"balloonText": "<b>[[title]]</b><br><span style='font-size:14px'>[[category]]: <b>[[value]]</b></span>",
				"fillAlphas": 0.8,
				"lineAlpha": 0.3,
				"title": "Rev GATE",
				"type": "column",
				'color': "#000000",
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
			'app_group_id': this.appgroupid,
      'app_id': this.appid,
			'pg_page': this.paging.pg_page,
			'pg_size': this.paging.pg_size,
			'st_col': this.paging.st_col,
			'st_type': this.paging.st_type,
			'startdate': Math.round(this.dFrom.getTime() / 1000),
			'enddate': Math.round(this.dTo.getTime() / 1000)
		};
		if (this.cardType != 'all') { params['cardType'] = this.cardType }
		if (this.search.term && this.search.term.length > 0) { params['search_' + this.search.field] = this.search.term }

		this.service.cardPackageAnalysis(params, data => {
			this.data = data;
			this.isnext = (this.data.length >= this.paging.pg_size) ? true : false;
		});
		this.getChart();
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
      this.isVersionHidden = true;

      this.appgroupid = data.os._id
      this.appid = data.os.settings[0]['app_id']
      
      for (let j in data.os.settings) {       
        let platform = data.os.settings[j]
        if (platform) {
          this.platforms.push({id: platform._id, name: platform.os + '-' + platform.bundle_id + '-' +platform.version})
        } 
      }
      this.platform = this.platforms[0]

      this.doAnalysis();

    }, 'report-cardpackage/listsource');
  }

	getChart() {
		var params = {
			'app_group_id': this.appgroupid,
      'app_id': this.appid,
			'pg_page': 1,
			'pg_size': 100,
			'st_col': 'date',
			'st_type': 1,
			'startdate': Math.round(this.dFrom.getTime() / 1000),
			'enddate': Math.round(this.dTo.getTime() / 1000)
		};

		if (this.cardType != 'all') { params['cardType'] = this.cardType }
		if (this.search.term && this.search.term.length > 0) { params['search_' + this.search.field] = this.search.term }

		this.service.cardPackageChartAnalysis(params, data => {
			this.makeChart(data);
		});
	}
  osPickerChanged(event) {
    this.versionDisplay = [];
    if (event.id == '-1')
      this.isVersionHidden = false;
    else {
      this.isVersionHidden = true;
      for (var v of this.versions) {
        if (v._id == event.id) {
          this.versionDisplay.push(v);
        }
      }
      this.version = this.versionDisplay[0];
      this.appid = this.version.app_id
    }
  }
}
