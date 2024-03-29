import { Component, OnInit } from '@angular/core';
import { ReportService } from '../../../service/report.service';

@Component({
	selector: 'app-cohort',
	templateUrl: './cohort.component.html',
	styleUrls: ['../report.component.scss']
})
export class CohortComponent implements OnInit {

	dFrom: Date; dMin: Date;
	dTo: Date = new Date(); dMax: Date = new Date();
	data = []; header = []; paging: any; isnext = true;
	search = { field: 'source', term: '' };
	version: any; versions = [{ 'version': '', 'os': '' }]; versionDisplay = [{ 'version': '', 'os': '' }];
	source: any; sources = [{ 'source_group': "All", 'source': '-1' }];
	platform: any; platforms = [];
	isVersionHidden: boolean;
	timeRange: any; tRvalues = []; timeRanges = [
		{ 'id': 7, 'name': '7 ngày' },
		{ 'id': 14, 'name': '14 ngày' },
		{ 'id': 21, 'name': '21 ngày' },
		{ 'id': 30, 'name': '30 ngày' }];
	
	constructor(private service: ReportService) {

		this.source = this.sources[0];

		this.platforms = this.service.defaultPlatforms();
		this.platform = this.platforms[0];

		this.timeRange = this.timeRanges[0];
		this.makeFilterDataArray(this.timeRange.id);

		this.dFrom = this.service.fromDate(this.dTo.getFullYear(), this.dTo.getMonth(), this.dTo.getDate(), 30);
		this.dMin = this.service.fromDate(this.dMax.getFullYear(), this.dMax.getMonth(), this.dMax.getDate(), 365);

		this.paging = { pg_page: 1, pg_size: 30, st_col: 'date', st_type: -1 };
		this.changeHeader(7);


		this.getSources();
		this.doAnalysis();
	}

	ngOnInit() {
	}

	doAnalysis() {
		this.data = [];
		var params = {
			'pg_page': 1,
			'pg_size': 100,
			'st_col': 'date_install',
			'search_os': null,
			'app_id':null,
			'app_group_id':this.service.getGroupId(),
			'search_source': null,
			'startdate': Math.round(this.dFrom.getTime() / 1000),
			'enddate': Math.round(this.dTo.getTime() / 1000),
			'st_type': 1,
			'filter_dates': this.tRvalues,
			['search_' + this.search.field]: this.search.term
		};
		if (this.platform.id != '-1'){
			params.search_os = this.platform.id;
			params.app_id = this.service.getAppId();
		}
		if (this.source.source != '-1')
			params.search_source = this.source.source;

		this.service.cohortAnalysis(params, data => {

			for (let objdata of data) {

				var arrReturnRate = [];
				var indexrrs = 0;

				for (let valuereturn of objdata.rrs) {
					for (let valueheader of this.header) {
						if (valueheader.index == indexrrs + 1) {
							var namerr = 'rr' + (indexrrs + 1);
							arrReturnRate.push({ key: namerr, value: valuereturn, index: indexrrs + 1 });
						}
					}
					indexrrs++;
				}

				this.data.push({
					'date': objdata.date_install,
					'install': objdata.installs,
					'user': objdata.new_users,
					'arrreturn': arrReturnRate
				});
			}
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

		}, 'report-cohort/listsource');
	}

	changeHeader(index) {
		this.header = [];
		if (index == 7) {

			for (var i = 0; i <= 7; i++) {
				if (i == 0) {
					this.header.push({ id: 'rr0', name: '', index: i });
				} else {
					this.header.push({ id: 'rr' + i, name: 'Day ' + i, index: i });
				}
			}

		} else if (index == 14) {

			for (var i = 0; i < 10; i++) {
				if (i == 0) {
					this.header.push({ id: 'rr0', name: '', index: i });
				} else {
					this.header.push({ id: 'rr' + i, name: 'Day ' + i, index: i });
				}
			}
			for (var i = 10; i <= 14; i++) {
				if (i % 2 == 0) {
					this.header.push({ id: 'rr' + i, name: 'Day ' + i, index: i });
				}
			}

		} else if (index == 21) {

			for (var i = 0; i < 10; i++) {
				if (i == 0) {
					this.header.push({ id: 'rr0', name: '', index: i });
				} else {
					this.header.push({ id: 'rr' + i, name: 'Day ' + i, index: i });
				}
			}

			for (var i = 10; i <= 21; i++) {
				if (i % 3 == 0) {
					this.header.push({ id: 'rr' + i, name: 'Day ' + i, index: i });
				}
			}

		} else if (index == 30) {

			for (var i = 0; i < 10; i++) {
				if (i == 0) {
					this.header.push({ id: 'rr0', name: '', index: i });
				} else {
					this.header.push({ id: 'rr' + i, name: 'Day ' + i, index: i });
				}
			}

			for (var i = 10; i <= 30; i++) {
				if (i % 6 == 0) {
					this.header.push({ id: 'rr' + i, name: 'Day ' + i, index: i });
				}
			}

		}
	}

	makeFilterDataArray(idx) {
		this.tRvalues = [];
		for (var i = 1; i <= idx; i++)
			this.tRvalues.push(i);
	}
	dateRangeChanged(event) {
		this.changeHeader(event.id);
		this.makeFilterDataArray(event.id);
		this.doAnalysis();
	}
	onVersionChanged(event) {
		this.service.setAppId(event.app_id);
	}
	osPickerChanged(event) {

		this.versionDisplay = [];

		if (event.id == '-1')
			this.isVersionHidden = false;
		else
			this.isVersionHidden = true;
			for (var v of this.versions)
				if (v.os == event.id)
					this.versionDisplay.push(v);
		this.version = this.versionDisplay[0];
		this.service.setAppId(this.version.app_id)
	}
}