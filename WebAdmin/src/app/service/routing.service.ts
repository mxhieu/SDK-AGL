import { Injectable } from '@angular/core';
import { Router } from '@angular/router'
import { PrivateService } from './service.private';

@Injectable()
export class RoutingService {

	BASE_URL = PrivateService.BASE_URL;

	constructor(private router: Router) {

	}

	moveToLogin() {
		this.router.navigate(['/login']);
	}

	moveToApps() {
		this.router.navigate(['/groups']);
	}
	moveToForgotPassword() {
		this.router.navigate(['/forgot-password']);
	}
	moveToAppDetail() {
		this.router.navigate(['/apps/admin']);
	}

	moveToCampaigns(){
		this.router.navigate(['/apps/admin/campaign']);
	}
	moveToAds(){
		this.router.navigate(['/apps/admin/ads']);
	}
}