import { Component, OnInit } from '@angular/core';
import { ReportService } from '../../../service/report.service';
import { AmChartsService, AmChart } from "@amcharts/amcharts3-angular";
import { CampaignService } from '../../../service/campaign.service';

@Component({
	selector: 'app-roipd',
	templateUrl: './roipd.component.html',
	styleUrls: ['../report.component.scss']
})
export class RoipdComponent implements OnInit {

	dFrom: Date; dMin: Date;
	dTo: Date = new Date(); dMax: Date = new Date();
	data = []; paging: any; isnext = true; header: any;
	search = { field: 'source', term: '' };

	platform: any; platforms = [];

	source: any; sources = [{ 'source_group': "All", 'source': '-1' }];

	// Version
	version: any; versions = [{ 'version': '', 'os': '' }];
	versionDisplay = [{ 'version': '', 'os': '' }];
	isVersionHidden: boolean;

	// Campaigns
	campaigns = [{ _id: -1, name: 'Tất cả' }]; currentCampaign: any;

	// Audiences
	audiences = [{ _id: -1, name: 'All' }]; isAudienceHidden: boolean = true; currentAudience: any;


	constructor(private service: ReportService, private AmCharts: AmChartsService,
		private campaignService: CampaignService) {

		this.source = this.sources[0];
		this.currentAudience = this.audiences[0];
		this.platforms = this.service.defaultPlatforms();
		this.platform = this.platforms[0];
		this.currentCampaign = this.campaigns[0];
		this.dFrom = this.service.fromDate(this.dTo.getFullYear(), this.dTo.getMonth(), this.dTo.getDate(), 30);
		this.dMin = this.service.fromDate(this.dMax.getFullYear(), this.dMax.getMonth(), this.dMax.getDate(), 365);

		this.paging = this.service.defaultPaging('date');

		this.header = [
			{ id: 'date', name: 'Date', is_search: 1, st_col: 'date', st_type: 1 },
			{ id: 'source', name: 'Source', is_search: 1, st_col: 'source', st_type: 1 },
			{ id: 'os', name: 'Device Os', is_search: 1, st_col: 'os', st_type: 1 },
			{ id: 'install', name: 'Install', is_search: 1, st_col: 'install', st_type: 1 },
			{ id: 'cost', name: 'Cost', is_search: 1, st_col: 'cost', st_type: 1 },
			{ id: 'roi', name: 'ROI', is_search: 1, st_col: 'roi', st_type: 1 },
			{ id: 'rr3', name: 'RR3', is_search: 1, st_col: 'rr3', st_type: 1 },
			{ id: 'pd1', name: 'PD1', is_search: 1, st_col: 'pd1', st_type: 1 },
			{ id: 'rev0', name: 'REV0', is_search: 1, st_col: 'rev0', st_type: 1 },
			{ id: 'rev1', name: 'REV1', is_search: 1, st_col: 'rev1', st_type: 1 },
			{ id: 'pd3', name: 'PD3', is_search: 1, st_col: 'pd3', st_type: 1 },
			{ id: 'rev3', name: 'REV3', is_search: 1, st_col: 'rev3', st_type: 1 },
			{ id: 'pd7', name: 'PD7', is_search: 1, st_col: 'pd7', st_type: 1 },
			{ id: 'rev7', name: 'REV7', is_search: 1, st_col: 'rev7', st_type: 1 },
			{ id: 'pd14', name: 'PD14', is_search: 1, st_col: 'pd14', st_type: 1 },
			{ id: 'rev14', name: 'REV14', is_search: 1, st_col: 'rev14', st_type: 1 },
			{ id: 'pd21', name: 'PD21', is_search: 1, st_col: 'pd21', st_type: 1 },
			{ id: 'rev21', name: 'REV21', is_search: 1, st_col: 'rev21', st_type: 1 },
			{ id: 'pd30', name: 'PD30', is_search: 1, st_col: 'pd30', st_type: 1 },
			{ id: 'rev30', name: 'REV30', is_search: 1, st_col: 'rev30', st_type: 1 }
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
			'pg_page': this.paging.pg_page,
			'pg_size': this.paging.pg_size,
			'st_col': this.paging.st_col,
			'app_id': null,
			'app_group_id': this.service.getGroupId(),
			'search_os': null,
			'search_compaign_id': null,
			'startdate': Math.round(this.dFrom.getTime() / 1000),
			'enddate': Math.round(this.dTo.getTime() / 1000),
			'st_type': this.paging.st_type,
			['search_' + this.search.field]: this.search.term
		};

		if (this.platform.id != '-1') {
			params.search_os = this.platform.id;
			params.app_id = this.service.getAppId();
		}
		if (this.source.source != '-1')
			params.search_source = this.source.source;

		if (this.currentAudience._id != -1)
			params.ad_id = this.currentAudience._id;
		
		if (this.currentCampaign._id != -1)
			params.search_compaign_id = this.currentCampaign._id;

		this.service.roiPdAnalysis(params, data => {
			this.data = data;
			this.isnext = (this.data.length >= this.paging.pg_size) ? true : false;
		});
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
		});
	}
	onSourceChanged(selectedSource: any) {
		if (selectedSource.source == -1) {
			this.isAudienceHidden = true;
			this.currentAudience = this.audiences[0];
		}
		else {
			this.isAudienceHidden = false;
			var params = {
				'st_col': this.paging.st_col,
				'st_type': this.paging.st_type,
				'pg_page': this.paging.pg_page,
				'pg_size': this.paging.pg_size,
				'search_type': selectedSource.source,
				'app_group_id': this.service.getGroupId()
			};
			this.campaignService.getAds(params, data => {
				this.audiences = data;
				this.audiences.splice(0, 0, { _id: -1, name: 'All' });
				this.currentAudience = this.audiences[0];
			});
			this.campaignService.getCampaigns({
				'pg_page': 1,
				'pg_size': 1000,
				'search_source_id': selectedSource._id,
				'search_app_id': this.service.getAppId(),
				'app_group_id': this.service.getGroupId(),
				'search_agency_id': '5aa0ee42b887cb6691ed5b43'
			}, data => {
				this.campaigns = data;
				if (this.campaigns)
					this.currentCampaign = this.campaigns[0];
			});
		}
	}
	onVersionChanged(event) {
		this.service.setAppId(event.app_id);
	}
	osPickerChanged(event) {

		this.versionDisplay = [];

		if (event.id == '-1')
			this.isVersionHidden = false;
		else {
			this.isVersionHidden = true;
			for (var v of this.versions)
				if (v.os == event.id)
					this.versionDisplay.push(v);
		}

		this.version = this.versionDisplay[0];
		this.service.setAppId(this.version.app_id)
	}
}
