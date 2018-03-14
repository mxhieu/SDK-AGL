import { Component, OnInit } from '@angular/core';
import { ReportService } from '../../service/report.service';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';

@Component({
	selector: 'app-kpireport',
	templateUrl: './kpireport.component.html',
	styleUrls: ['./kpireport.component.scss']
})
export class KpireportComponent implements OnInit {

	data = []; header: any; paging: any;
	search = { field: 'today', term: '' };
	version: any; versions = [{ 'version': '', 'os': '' }]; versionDisplay = [{ 'version': '', 'os': '' }];
	source: any; sources = [{ 'source_group': "All", 'source': '-1' }];
	platform: any; platforms = [];

	constructor(private service: ReportService) {
		this.source = this.sources[0];
		this.platforms = this.service.defaultPlatforms();
		this.platform = this.platforms[0];
		this.paging = { pg_page: 1, pg_size: 30, st_col: 'a1', st_type: -1 };
		this.header = [
			{ id: '#', name: '', is_search: 1, st_col: 'undefined', st_type: -1 },
			{ id: 'a1', name: 'A1', is_search: 1, st_col: 'a1', st_type: -1 },
			{ id: 'a7', name: 'A7', is_search: 1, st_col: 'a7', st_type: 1 },
			{ id: 'a30', name: 'A30', is_search: 1, st_col: 'a30', st_type: 1 },
			{ id: 'n1', name: 'N1', is_search: 1, st_col: 'n1', st_type: 1 },
			{ id: 'nru', name: 'NRU', is_search: 1, st_col: 'nru', st_type: 1 },
			{ id: 'gross', name: 'Gross', is_search: 1, st_col: 'gross', st_type: 1 },
			{ id: 'pu', name: 'PU', is_search: 1, st_col: 'pu', st_type: 1 },
			{ id: 'pu1', name: 'PU1', is_search: 1, st_col: 'pu1', st_type: 1 },
			{ id: 'arpu', name: 'ARPU', is_search: 1, st_col: 'arpu', st_type: 1 },
			{ id: 'arppu', name: 'ARPPU', is_search: 1, st_col: 'arppu', st_type: 1 }
		];
		this.getSources();
		this.doAnalysis();
	}

	ngOnInit() {

	}

	doAnalysis() {
		var params = {
			'search_app_id': this.service.getAppId(),
		};
		this.service.kpiAnalysis(params, data => {
			this.data = data;
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

	onVersionChanged(event) {
		this.doAnalysis();
	}
	osPickerChanged(event) {

		this.versionDisplay = [];

		if (event.id == '-1')
			for (var v of this.versions)
				this.versionDisplay.push(v);
		else
			for (var v of this.versions)
				if (v.os == event.id)
					this.versionDisplay.push(v);

		this.version = this.versionDisplay[0];
	}
}
