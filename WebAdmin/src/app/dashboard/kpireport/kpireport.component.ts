import { Component, OnInit } from '@angular/core';
import { ReportService } from '../../service/report.service';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';

@Component({
	selector: 'app-kpireport',
	templateUrl: './kpireport.component.html',
	styleUrls: ['./kpireport.component.scss']
})
export class KpireportComponent implements OnInit {

	data = [];
	version: any; versions = [{ 'version': '', 'os': '' }]; versionDisplay = [{ 'version': '', 'os': '' }];
	source: any; sources = [{ 'source_group': "All", 'source': '-1' }];
	platform: any; platforms = [];
	dDate: Date = new Date(); dMin: Date; dMax: Date = new Date();
	osVerionDisplay : boolean;
	constructor(private service: ReportService) {
		this.source = this.sources[0];
		this.platforms = this.service.defaultPlatforms();
		this.platform = this.platforms[0];
		this.getSources();
		this.doAnalysis();
	}

	ngOnInit() {

	}

	doAnalysis() {
		var params = {
			'app_id':null,
			'app_group_id':this.service.getGroupId(),
			'search_app_id':null,
			'search_os':null,
			'search_date': this.service.formatDate(this.dDate)
		};
		if (this.platform.id != '-1'){
			params.search_os = this.platform.id;
			params.search_app_id = this.service.getAppId();
		}
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
		this.service.setAppId(event.app_id);
	}
	osPickerChanged(event) {

		this.versionDisplay = [];

		if (event.id == '-1')
			this.osVerionDisplay = false;
		else{
			this.osVerionDisplay = true;
			for (var v of this.versions){
				if (v.os == event.id)
					this.versionDisplay.push(v);
			}
			this.version = this.versionDisplay[0];
			this.service.setAppId(this.version.app_id);
		}
	}
}
