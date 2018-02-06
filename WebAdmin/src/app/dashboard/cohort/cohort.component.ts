import { Component, OnInit } from '@angular/core';
import { Service } from '../../service/service';
import { ConfigService } from '../../service/service.config';

@Component({
	selector: 'app-cohort',
	styleUrls: ['./cohort.component.scss'],
	templateUrl: './cohort.component.html'
})
export class CohortComponent implements OnInit {

	data = []; isnext: any; header = []; search: any; paging: any;

	dFrom: Date = new Date(); dTo: Date = new Date();

	sources = [];
	source = { 'sourcename': "Please choose source", 'sourceid': '-1' };
	platforms = [
		{ 'id': '-1', 'name': 'Please choose OS' },
		{ 'id': 'android', 'name': 'Android' },
		{ 'id': 'ios', 'name': 'iOS' },
		{ 'id': 'web', 'name': 'Web' }];
	platform = { 'id': '-1', 'name': 'Please choose OS' };

	constructor(private conf: ConfigService, private service: Service, ) {

		this.dTo = new Date();
		this.dFrom = new Date(this.dTo.getFullYear(), this.dTo.getMonth(), this.dTo.getDate() - 30);
		this.platform = this.platforms[0];
		this.isnext = true;
		this.search = { field: 'source', term: '' };
		this.paging = { pg_page: 1, pg_size: 30, st_col: 'date', st_type: -1 };

		for (var i = 0; i < 11; i++) {
			if (i == 0) {
				this.header.push({ id: 'rr0', name: '', index: i });
			} else {
				this.header.push({ id: 'rr' + i, name: 'Day ' + i, index: i });
			}
		}
		this.header.push({ id: 'rr14', name: 'Day 14', index: 14 });
		this.header.push({ id: 'rr21', name: 'Day 21', index: 21 });
		this.header.push({ id: 'rr28', name: 'Day 28', index: 28 });
		this.getSources();
		this.doAnalysis();
	}

	ngOnInit() {
	}

	doAnalysis() {
		this.data = [];
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

		this.service.get(this.conf.API_REPORT_COHORT, params,
			data => {

				var arrdata = Array.isArray(data) ? data : [];

				for (let objdata of arrdata) {
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
			this.sources.push({ 'sourcename': "Please choose source", 'sourceid': '-1' });
			this.sources = this.sources.concat(data.source);
			this.source = this.sources[0];
		});
	}
}