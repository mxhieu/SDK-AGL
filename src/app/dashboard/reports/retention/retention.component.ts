import { Component, OnInit, OnDestroy } from '@angular/core';
import { AmChartsService, AmChart } from "@amcharts/amcharts3-angular";
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { ReportService } from '../../../service/report.service';
import { CampaignService } from '../../../service/campaign.service';
@Component({
	selector: 'app-retention',
	templateUrl: './retention.component.html',
	styleUrls: ['../report.component.scss']
})
export class RetentionComponent implements OnInit, OnDestroy {
	chart: AmChart;
	dFrom: Date; dMin: Date; dTo: Date = new Date(); dMax: Date = new Date();
	data = []; paging: any; isnext = true; header: any;
	search = { field: 'os', term: '' };
	platform: any; platforms = [];

	// Source
	source: any; sources = [{ 'source_group': "All", 'source': '-1' }];

	// Version
	version: any; versions = [{ 'version': '', 'os': '' }];
	versionDisplay = [{ 'version': '', 'os': '' }];
	isVersionHidden: boolean;

	// Campaigns
	campaigns = [{ _id: -1, name: 'All' }]; currentCampaign: any; isCampaignHidden: boolean = true;

	// Audiences
	audiences = [{ _id: -1, name: 'All' }]; isAudienceHidden: boolean = true; currentAudience: any;

	constructor(
		private service: ReportService,
		private AmCharts: AmChartsService,
		private campaignService: CampaignService) {
		this.source = this.sources[0];
		this.currentAudience = this.audiences[0];
		this.platforms = this.service.defaultPlatforms();
		this.platform = this.platforms[0];
		this.currentCampaign = this.campaigns[0];
		this.dFrom = this.service.fromDate(this.dTo.getFullYear(), this.dTo.getMonth(), this.dTo.getDate(), 30);
		this.dMin = this.service.fromDate(this.dMax.getFullYear(), this.dMax.getMonth(), this.dMax.getDate(), 365);

		this.paging = this.service.defaultPaging('_id');
		this.header = [
			{ id: '_id', name: 'Date', is_search: 1, st_col: '_id', st_type: 1 },
			{ id: 'source', name: 'Source', is_search: 1, st_col: 'source', st_type: 1 },
			{ id: 'os', name: 'Device Os', is_search: 1, st_col: 'os', st_type: 1 },
			{ id: 'campaign_name', name: 'Campain Name', is_search: 1, st_col: 'campaign_name', st_type: 0 },
			{ id: 'ad_name', name: 'Ad Name', is_search: 1, st_col: 'ad_name', st_type: 0 },
			{ id: 'install', name: 'Install', is_search: 1, st_col: 'install', st_type: 1 },
			{ id: 'nru', name: 'NRU', is_search: 1, st_col: 'nru', st_type: 1 },
			{ id: 'rr1', name: 'RR1', is_search: 1, st_col: 'rr1_num', st_type: 1 },
			{ id: 'rr3', name: 'RR3', is_search: 1, st_col: 'rr3_num', st_type: 1 },
			{ id: 'rr7', name: 'RR7', is_search: 1, st_col: 'rr7_num', st_type: 1 },
			{ id: 'rr15', name: 'RR15', is_search: 1, st_col: 'rr15_num', st_type: 1 },
			{ id: 'rr30', name: 'RR30', is_search: 1, st_col: 'rr30_num', st_type: 1 },
			{ id: 'rr1', name: 'RR1', is_search: 1, st_col: 'rr1', st_type: 1 },
			{ id: 'rr3', name: 'RR3', is_search: 1, st_col: 'rr3', st_type: 1 },
			{ id: 'rr7', name: 'RR7', is_search: 1, st_col: 'rr7', st_type: 1 },
			{ id: 'rr15', name: 'RR15', is_search: 1, st_col: 'rr15', st_type: 1 },
			{ id: 'rr30', name: 'RR30', is_search: 1, st_col: 'rr30', st_type: 1 }
		];
		this.getSources();
		this.doAnalysis();
	}
	ngOnInit(): void {
	}
	makeChart(chartData: any[]) {
		chartData.sort((l, r): number => {
			var date1 = Date.parse(l.date);
			var date2 = Date.parse(r.date);
			if (date1 > date2)
				return 1;
			if (date1 < date2)
				return -1;
			return 0;
		});
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
				"position": "left"
			}, {
				"id": "rightAxis",
				"axisAlpha": 0,
				"gridAlpha": 0,
				"position": "right"
			}],
			"graphs": [{
				"alphaField": "alpha",
				"balloonText": "INSTALL:[[value]]",
				"dashLengthField": "dashLength",
				"fillAlphas": 0.7,
				"legendPeriodValueText": "total: [[value.sum]]",
				"legendValueText": "[[value]]",
				"title": "INSTALL",
				"type": "column",
				"valueField": "install",
				"valueAxis": "leftAxis",
				'fillColors': "#7bc0f7",
				'lineColor': '#64b5f6'
			}, {
				"alphaField": "alpha",
				"balloonText": "NRU:[[value]]",
				"dashLengthField": "dashLength",
				"fillAlphas": 0.7,
				"legendPeriodValueText": "total: [[value.sum]]",
				"legendValueText": "[[value]]",
				"title": "NRU",
				"type": "column",
				"valueField": "nru",
				"valueAxis": "leftAxis",
				'fillColors': "#3b8ad9",
				'lineColor': '#1976d2'
			}, {
				"balloonText": "RR1:[[value]]",
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
				"title": "RR1",
				"fillAlphas": 0,
				"valueField": "rr1",
				'lineColor': '#ffdb69',
				"valueAxis": "rightAxis"
			}, {
				"balloonText": "RR3:[[value]]",
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
				"title": "RR3",
				"fillAlphas": 0,
				"valueField": "rr3",
				'lineColor': '#00A965',
				"valueAxis": "rightAxis"
			}, {
				"balloonText": "RR7:[[value]]",
				"bullet": "round",
				"bulletBorderAlpha": 1,
				"useLineColorForBulletBorder": true,
				"bulletColor": "#FFFFFF",
				"bulletSizeField": "townSize",
				"dashLengthField": "dashLength",
				"descriptionField": "",
				"labelPosition": "right",
				"labelText": "[[]]",
				"legendValueText": "[[value]]%",
				"title": "RR7",
				"fillAlphas": 0,
				"valueField": "rr7",
				"valueAxis": "rightAxis"
			}, {
				"balloonText": "RR15:[[value]]",
				"bullet": "round",
				"bulletBorderAlpha": 1,
				"useLineColorForBulletBorder": true,
				"bulletColor": "#FFFFFF",
				"bulletSizeField": "townSize",
				"dashLengthField": "dashLength",
				"descriptionField": "",
				"labelPosition": "right",
				"labelText": "[[]]",
				"legendValueText": "[[value]]%",
				"title": "RR15",
				"fillAlphas": 0,
				"valueField": "rr15",
				"valueAxis": "rightAxis"
			}, {
				"balloonText": "RR30:[[value]]",
				"bullet": "round",
				"bulletBorderAlpha": 1,
				"useLineColorForBulletBorder": true,
				"bulletColor": "#FFFFFF",
				"bulletSizeField": "townSize",
				"dashLengthField": "dashLength",
				"descriptionField": "",
				"labelPosition": "right",
				"labelText": "[[]]",
				"legendValueText": "[[value]]%",
				"title": "RR30",
				"fillAlphas": 0,
				"valueField": "rr30",
				"valueAxis": "rightAxis",
				'lineColor': '#ef6c00'
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
			'pg_page': this.paging.pg_page,
			'pg_size': this.paging.pg_size,
			'st_col': this.paging.st_col,
			'st_type': this.paging.st_type,
			'app_group_id': this.service.getGroupId(),
			'campaign_id': null,
			'startdate': Math.round(this.dFrom.getTime() / 1000),
			'enddate': Math.round(this.dTo.getTime() / 1000),
			['search_' + this.search.field]: this.search.term
		};
		if (this.platform.id != '-1') {
			params.search_os = this.platform.id;
			params.app_id = this.service.getAppId();
		}

		if (this.source.source != '-1')
			params.source_type = this.source.source;

		if (this.currentAudience._id != -1)
			params.ad_id = this.currentAudience._id;

		if (this.currentCampaign._id != -1)
			params.campaign_id = this.currentCampaign._id;

		this.service.retentionAnalysis(params, data => {
			this.data = [];
			for (let item of data) {
				this.data.push(item);
				for (let doc of item.docs) {
					this.data.push(doc);
				}
			}
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
		}, 'report-arm/listsource');
	}
	getChart() {
		var params = {
			'pg_page': 1,
			'pg_size': 100,
			'st_col': 'date',
			'st_type': 1,
			'app_id': null,
			'ad_id': null,
			'app_group_id': this.service.getGroupId(),
			'search_os': null,
			'campaign_id': null,
			'source_type': null,
			'startdate': Math.round(this.dFrom.getTime() / 1000),
			'enddate': Math.round(this.dTo.getTime() / 1000)
		};
		if (this.platform.id != '-1') {
			params.search_os = this.platform.id;
			params.app_id = this.service.getAppId();
		}
		if (this.source.source != '-1')
			params.source_type = this.source.source;

		if (this.currentAudience._id != -1)
			params.ad_id = this.currentAudience._id;

		if (this.currentCampaign._id != -1)
			params.campaign_id = this.currentCampaign._id;

		this.service.retentionChartAnalysis(params, data => {
			this.makeChart(data);
		});
	}
	onVersionChanged(event) {
		this.service.setAppId(event.app_id);
	}
	onCampaignChanged(selectedCampaign: any) {
		if (selectedCampaign._id == -1) {
			this.isAudienceHidden = true;
			this.currentAudience = this.audiences[0];
		}
		else {
			this.isAudienceHidden = false;
			this.campaignService.getAds({
				'st_col': this.paging.st_col,
				'st_type': this.paging.st_type,
				'pg_page': this.paging.pg_page,
				'pg_size': this.paging.pg_size,
				'search_type': this.source.source,
				'search_campaign_id': selectedCampaign._id,
				'app_group_id': this.service.getGroupId()
			}, data => {
				this.audiences = data;
				this.audiences.splice(0, 0, { _id: -1, name: 'All' });
				this.currentAudience = this.audiences[0];
			});
		}
	}
	onSourceChanged(selectedSource: any) {
		if (selectedSource.source == -1) {
			this.isCampaignHidden = true;
			this.currentCampaign = this.campaigns[0];
		}
		else {
			this.isCampaignHidden = false;
			this.campaignService.getCampaigns({
				'pg_page': 1,
				'pg_size': 1000,
				'search_source_id': selectedSource._id,
				'search_app_id': this.service.getAppId(),
				'app_group_id': this.service.getGroupId(),
				'search_agency_id': '5aa0ee42b887cb6691ed5b43'
			}, data => {
				this.campaigns = data;
				if (this.campaigns) {
					this.currentCampaign = data;
					this.campaigns.splice(0, 0, { _id: -1, name: 'All' });
					this.currentCampaign = this.campaigns[0];
				}
			});
		}
	}
	osPickerChanged(event) {
		this.versionDisplay = [];
		if (event.id == '-1')
			this.isVersionHidden = false;
		else {
			this.isVersionHidden = true;
			for (var v of this.versions) {
				if (v.os == event.id)
					this.versionDisplay.push(v);
			}
			this.version = this.versionDisplay[0];
			this.service.setAppId(this.version.app_id);
		}
	}
}