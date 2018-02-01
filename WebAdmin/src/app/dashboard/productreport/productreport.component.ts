import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-productreport',
	templateUrl: './productreport.component.html'
})
export class ProductreportComponent implements OnInit {

	constructor() {

	}

	ngOnInit() {

	}

	apply(event) {
		console.log(event);
	}

}
