import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-pureport',
	templateUrl: './pureport.component.html'
})
export class PureportComponent implements OnInit {

	constructor() { }

	ngOnInit() {
	}

	apply(event) {
		console.log(event);
	}
}
