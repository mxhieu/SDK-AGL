import { Component, OnInit } from '@angular/core';
import { Service } from '../../service/service';
import { ConfigService } from '../../service/service.config';

@Component({
	selector: 'app-sourceslist',
	templateUrl: './sourceslist.component.html'
})
export class SourceslistComponent implements OnInit {

	data: any; header: any;

	constructor(private config: ConfigService, private api: Service) {
		this.data = [];
		this.header = [
			{ id: 'sourcename', name: 'Source', is_search: 1, st_col: 'sourcename', st_type: 1 },
			{ id: 'sourceid', name: 'Media Source', is_search: 1, st_col: 'sourceid', st_type: 1 },
			{ id: 'action', name: 'Action', is_search: 1, st_col: 'action', st_type: 1 },
			{ id: 'is_delete', name: 'Status', is_search: 1, st_col: 'is_delete', st_type: 1 },
			{ id: 'created_at', name: 'Created', is_search: 1, st_col: 'created_at', st_type: 1 }
			
		]
	}

	ngOnInit() {
		this.helpFetchData();
	}

	helpFetchData() {
		this.api.getSources(data => {
			this.data = data.source;
		});
	}

}
