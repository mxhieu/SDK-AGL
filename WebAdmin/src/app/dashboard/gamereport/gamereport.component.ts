import { Component, OnInit } from '@angular/core';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';

@Component({
	selector: 'app-gamereport',
	templateUrl: './gamereport.component.html'
})
export class GamereportComponent implements OnInit {

	dFrom: Date = new Date(); dTo: Date = new Date(); dMin: Date = new Date(); dMax: Date = new Date();

	constructor() { }

	ngOnInit() {
		this.dTo = new Date();
		this.dFrom = new Date(this.dTo.getFullYear(), this.dTo.getMonth(), this.dTo.getDate() - 1000);
		this.dMin = this.dFrom;
		this.dMax = this.dTo;
	}

}
