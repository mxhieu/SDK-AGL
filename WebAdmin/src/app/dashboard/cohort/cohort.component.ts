import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-cohort',
	styleUrls: ['./cohort.component.scss'],
	templateUrl: './cohort.component.html'
})
export class CohortComponent implements OnInit {

	data = []; isnext: any; header = []; search: any;

	dFrom: Date = new Date(); dTo: Date = new Date();

	constructor() {
		
		this.dTo = new Date();
		this.dFrom = new Date(this.dTo.getFullYear(), this.dTo.getMonth(), this.dTo.getDate() - 1000);

		for (var i = 0; i < 26; i++) {
			if(i == 0)
				this.header.push({ id: 'rr0' + i, name: ''});
			if(i % 2 != 0)
				this.header.push({ id: 'rr' + i, name: 'Day ' + i});
		}
	}

	ngOnInit() {
		for (var i = 1; i < 30; i ++){
			this.data.push({
				'date': new Date(),
				'user': i * 100,
				'rr1': Math.round(Math.random() * 100),
				'rr2': Math.round(Math.random() * 100),
				'rr3': Math.round(Math.random() * 100),
				'rr4': Math.round(Math.random() * 100),
				'rr5': Math.round(Math.random() * 100),
				'rr6': Math.round(Math.random() * 100),
				'rr7': Math.round(Math.random() * 100),
				'rr8': Math.round(Math.random() * 100),
				'rr9': Math.round(Math.random() * 100),
				'rr10': Math.round(Math.random() * 100),
				'rr11': Math.round(Math.random() * 100),
				'rr12': Math.round(Math.random() * 100),
				'rr13': Math.round(Math.random() * 100),
				'rr14': Math.round(Math.random() * 100),
				'rr15': Math.round(Math.random() * 100),
				'rr16': Math.round(Math.random() * 100),
				'rr17': Math.round(Math.random() * 100),
				'rr18': Math.round(Math.random() * 100),
				'rr19': Math.round(Math.random() * 100),
				'rr20': Math.round(Math.random() * 100),				
				'rr21': Math.round(Math.random() * 100),
				'rr22': Math.round(Math.random() * 100),
				'rr23': Math.round(Math.random() * 100),
				'rr24': Math.round(Math.random() * 100),
				'rr25': Math.round(Math.random() * 100)
			});
		}
	}
}