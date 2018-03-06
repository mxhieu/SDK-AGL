import { Component, OnInit } from '@angular/core';
import { Service } from '../../service/service';
import { ConfigService } from '../../service/service.config';

@Component({
	selector: 'app-sourceslist',
	templateUrl: './sourceslist.component.html'
})
export class SourceslistComponent implements OnInit {

	data: any; headers: any; search = { field: 'source', term: '' };
	onerow: any; paging: any; isHidden: boolean; isEdit: boolean;

	constructor(private config: ConfigService, private api: Service) {
		this.isHidden = true; this.isEdit = false;
		this.data = [];
		this.paging = { pg_page: 1, pg_size: 10, st_col: 'created_at', st_type: -1 };
		this.onerow = { 'source_group': '', 'source': '', 'is_delete': 0, 'created_at': '' };
		this.headers = [
			{ id: 'source_group', name: 'Source Group', is_search: 1, st_col: 'sourcename', st_type: 1 },
			{ id: 'source', name: 'Source', is_search: 1, st_col: 'sourceid', st_type: 1 },
			{ id: 'created_at', name: 'Created', is_search: 1, st_col: 'created_at', st_type: 1 },
			{ id: 'is_delete', name: 'Status', is_search: 1, st_col: 'is_delete', st_type: 1 }
		]
	}

	ngOnInit() {
		this.refresh();
	}

	refresh() {
		this.reset();
		this.api.getSources(data => {
			this.data = data.source;
		});
	}
	reset() {
		this.isEdit = false;
		this.isHidden = true;
	}
	toggle() {
		this.isHidden = !this.isHidden;
	}
	onItemClick(item: any) {
		this.onerow = item;
		this.isEdit = true;
		this.isHidden = false;
	}
}
