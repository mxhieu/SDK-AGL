import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Service } from '../../service/service';

@Component({
	selector: 'app-filter',
	templateUrl: './filter.component.html'
})
export class FilterComponent {

	sources = [];
	source = { 'sourcename': "Please choose source", 'sourceid': '-1' };

	platform = { 'id': '-1', 'name': 'Please choose OS' };
	platforms = [
		{ 'id': '-1', 'name': 'Please choose OS' },
		{ 'id': 'android', 'name': 'android' },
		{ 'id': 'ios', 'name': 'ios' }];

	dFrom: Date = new Date(); dTo: Date = new Date();
	dMin: Date = new Date(); dMax: Date = new Date();

	constructor(private api: Service) {
		this.dTo = new Date();
		this.dFrom = new Date(this.dTo.getFullYear(), this.dTo.getMonth(), this.dTo.getDate() - 30);
		this.dMin = this.dFrom;
		this.dMax = this.dTo;
		this.platform = this.platforms[0];
	}
	ngOnInit(): void {
		this.getSources();
	}

	@Output() selectChanged = new EventEmitter();

	apply() {
		this.selectChanged.emit({
				'from': this.dFrom,
				'to': this.dTo,
				'platform': this.platform,
				'source': this.source
			});
	}
	getSources() {
		this.api.getSources(data => {
			this.sources.push({ 'sourcename': "Please choose OS", 'sourceid': '-1' });
			this.sources = this.sources.concat(data.source);
			this.source = this.sources[0];
		});
	}
}
