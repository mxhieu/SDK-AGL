import { Injectable } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Http, Response, RequestOptions, Headers, URLSearchParams, Request, RequestOptionsArgs, RequestMethod } from "@angular/http";
import { Cookie } from 'ng2-cookies';
import { RoutingService } from './routing.service';
import { ConfigService } from './service.config';

@Injectable()
export class Service {

	private KEY_AUTH = 'fAuth';
	private USER_TOKEN = 'ftoken';
	private KEY_APP_ID = 'fAppId';

	constructor(
		private http: Http,
		private router: RoutingService,
		private config: ConfigService,
		private flash: FlashMessagesService) { }

	private makeHeaders(): Headers {
		let headers = new Headers({
			'Content-Type': 'application/json'
		});
		return headers;
	}

	get(url: string, dParams, callback) {

		let params = new URLSearchParams();
		params.append('authorization', this.getToken());

		if (dParams) {
			for (var key in dParams) {
				params.append(key, dParams[key]);
			}
		}
		var options: RequestOptionsArgs = {
			search: params,
			headers: this.makeHeaders()
		};
		this.http.get(url, options)
			.subscribe(
			(data) => {
				try {
					let json = JSON.parse(data.text());
					if (json['success'] && json['success'] == 1) {
						callback(json['data']);
						this.successful(json['msg']);
					}
					else
						this.failure(json['msg']);
				} catch (err) {
					this.failure(err);
				}
			},
			(err) => {
				this.failure(err);
			});
	}

	post(url: string, body: any, dParams, callback) {

		let params = new URLSearchParams();
		params.append('authorization', this.getToken());

		if (dParams) {
			for (var key in dParams) {
				params.append(key, dParams[key]);
			}
		}
		var options: RequestOptionsArgs = {
			search: params,
			headers: this.makeHeaders()
		};

		this.http.post(url, body, options)
			.subscribe(
			(data) => {
				try {
					let json = JSON.parse(data.text());
					if (json['success'] && json['success'] == 1) {
						callback(json['data']);
						this.successful(json['msg']);
					}
					else
						this.failure(json['msg']);
				} catch (err) {
					this.failure(err);
				}
			},
			(err) => {
				this.failure(err);
			});
	}
	private failure(error: any) {
		this.flash.show('Request failed\n' + error, { cssClass: 'alert-warning' });

	}
	private successful(msg: any) {
		this.flash.show(msg, { cssClass: 'alert-success' });
	}

	/* User */
	getToken(): string {
		return Cookie.get(this.USER_TOKEN);
	}
	setToken(token: string) {
		Cookie.set(this.USER_TOKEN, token);
	}
	setAuth(auth: string) {
		Cookie.set(this.KEY_AUTH, auth);
	}
	getAuth(): any {
		return JSON.parse(Cookie.get(this.KEY_AUTH));
	}
	private setAppId(appId: string) {
		Cookie.set(this.KEY_APP_ID, appId);
	}
	getAppId(): string {
		return Cookie.get(this.KEY_APP_ID);
	}
	logout() {
		Cookie.deleteAll();
		this.moveToLogin();
	}

	isExpired(): boolean {
		if (Cookie.get(this.USER_TOKEN))
			return false;
		return true;
	}

	login(params) {
		this.post(this.config.API_LOGIN, null, params, data => {
			this.setToken(data.authorization);
			this.setAuth(JSON.stringify(data));
			this.moveToApps();
		});
	}

	newApp(body: any, callback) {
		this.post(this.config.API_APP_NEW, JSON.stringify(body), null,
			data => {
				callback(data);
			});
	}
	getApps(params, callback) {
		this.get(this.config.API_APP_GET, params,
			data => {
				callback(data);
			});
	}

	/* Router */
	moveToLogin() {
		this.router.moveToLogin();
	}

	moveToApps() {
		this.router.moveToApps();
	}
	moveToAppDetail(appId: string) {
		this.setAppId(appId);
		this.router.moveToAppDetail();
	}
	moveToForgotPassword() {
		this.router.moveToForgotPassword();
	}
}