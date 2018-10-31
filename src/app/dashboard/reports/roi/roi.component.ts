import { Component, OnInit, OnDestroy } from '@angular/core';
import { ReportService } from '../../../service/report.service';
import { AmChartsService, AmChart } from "@amcharts/amcharts3-angular";
import { CampaignService } from '../../../service/campaign.service';

@Component({
	selector: 'app-roi',
	templateUrl: './roi.component.html',
	styleUrls: ['../report.component.scss']
})
export class RoiComponent implements OnInit {

	dFrom: Date; dMin: Date; dTo: Date = new Date(); dMax: Date = new Date();

	data = []; paging: any; isnext = true; header: any;
	search = { field: 'source', term: '' };

	platform: any; platforms = [];

	// Source
	source: any; sources = [{ 'source_group': "All", 'source': '-1' }];

	// Version
	version: any; versions = [{ 'version': '', 'os': '' }];
	versionDisplay = [{ 'version': '', 'os': '' }];
	isVersionHidden: boolean;

	// Audiences
	audiences = [{ _id: -1, name: 'All' }]; isAudienceHidden: boolean = true; currentAudience: any;

	constructor(private service: ReportService,
		private AmCharts: AmChartsService,
		private campaignService: CampaignService) {

		this.source = this.sources[0];
		this.currentAudience = this.audiences[0];

		this.platforms = this.service.defaultPlatforms();
		this.platform = this.platforms[0];

		this.dFrom = this.service.fromDate(this.dTo.getFullYear(), this.dTo.getMonth(), this.dTo.getDate(), 30);
		this.dMin = this.service.fromDate(this.dMax.getFullYear(), this.dMax.getMonth(), this.dMax.getDate(), 365);

		this.paging = this.service.defaultPaging('date');

		this.header = [
			{ id: 'date', name: 'Date', is_search: 1, st_col: 'data', st_type: 1 },
			{ id: 'source', name: 'Source', is_search: 1, st_col: 'source', st_type: 1 },
			{ id: 'os', name: 'Device Os', is_search: 1, st_col: 'os', st_type: 1 },
			{ id: 'install', name: 'Install', is_search: 1, st_col: 'install', st_type: 1 },
			{ id: 'nru', name: 'NRU', is_search: 1, st_col: 'nru', st_type: 1 },
			{ id: 'cost', name: 'Cost', is_search: 1, st_col: 'cost', st_type: 1 },
			{ id: 'roi', name: 'ROI', is_search: 1, st_col: 'roi', st_type: 1 },
			{ id: 'rr3', name: 'RR3', is_search: 1, st_col: 'rr3', st_type: 1 },
			{ id: 'pu1', name: 'PU1', is_search: 1, st_col: 'pu1', st_type: 1 },
			{ id: 'rev0', name: 'REV0', is_search: 1, st_col: 'rev0', st_type: 1 },
			{ id: 'rev1', name: 'REV1', is_search: 1, st_col: 'rev1', st_type: 1 },
			{ id: 'pu3', name: 'PU3', is_search: 1, st_col: 'pu3', st_type: 1 },
			{ id: 'rev3', name: 'REV3', is_search: 1, st_col: 'rev3', st_type: 1 },
			{ id: 'pu7', name: 'PU7', is_search: 1, st_col: 'pu7', st_type: 1 },
			{ id: 'rev7', name: 'REV7', is_search: 1, st_col: 'rev7', st_type: 1 },
			{ id: 'pu14', name: 'PU14', is_search: 1, st_col: 'pu14', st_type: 1 },
			{ id: 'rev14', name: 'REV14', is_search: 1, st_col: 'rev14', st_type: 1 },
			{ id: 'pu21', name: 'PU21', is_search: 1, st_col: 'pu21', st_type: 1 },
			{ id: 'rev21', name: 'REV21', is_search: 1, st_col: 'rev21', st_type: 1 },
			{ id: 'pu30', name: 'PU30', is_search: 1, st_col: 'pu30', st_type: 1 },
			{ id: 'rev30', name: 'REV30', is_search: 1, st_col: 'rev30', st_type: 1 },
			{ id: 'pu60', name: 'PU60', is_search: 1, st_col: 'pu60', st_type: 1 },
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

		this.service.roiAnalysis(params, data => {
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
		}, 'report-roi/listsource');
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
