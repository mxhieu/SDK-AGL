import { Injectable } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';
import {
	Http, Response, RequestOptions, Headers, URLSearchParams,
	Request, RequestOptionsArgs, RequestMethod
} from "@angular/http";
import { Cookie } from 'ng2-cookies';
import { RoutingService } from './routing.service';
import { ConfigService } from './service.config';
import { PrivateService } from './service.private';


enum SourceApiUrls {
	get = 'listsource',
	insert = 'listsource',
	delete = 'listsource/delete',
	update = 'listsource/edit'
}

@Injectable()
export class BaseService {

	protected KEY_AUTH = 'fAuth';
	protected USER_TOKEN = 'ftoken';
	protected KEY_APP_ID = 'fAppId';

	constructor(
		protected http: Http, protected router: RoutingService,
		protected config: ConfigService, protected flash: FlashMessagesService) { }

	protected makeHeaders(): Headers {
		let headers = new Headers({
			'Content-Type': 'application/json'
		});
		return headers;
	}

	upload(file: File, callback) {
		let formData: FormData = new FormData();
		formData.append('uploadFile', file, file.name);
		let headers = new Headers();
		headers.append('Content-Type', 'multipart/form-data');
		headers.append('Accept', 'application/json');
		let options = new RequestOptions({ headers: headers });
		this.http.post('http://apitracking.bonanhem.com/v1/upload', formData)
			.subscribe(
				data => {
					try {
						let json = JSON.parse(data.text());
						if (json['success'] && json['success'] == 1)
							callback(json['data']);
						else this.failure(json['msg']);
					} catch (err) {
						this.failure(err);
					}
				},
				err => {
					this.failure(err);
				});
	}
	get(url: string, dParams, callback) {

		let params = new URLSearchParams();
		params.append('authorization', this.getToken());

		if (dParams)
			for (var key in dParams)
				params.append(key, dParams[key]);

		var options: RequestOptionsArgs = {
			search: params,
			headers: this.makeHeaders()
		};
		this.http.get(url, options)
			.subscribe(
				data => {
					try {
						let json = JSON.parse(data.text());
						if (json['success'] && (json['success'] == 1 || json['success'] == 100)) {
							callback(json['data']);
							this.successful(json['msg'], json['success']);
						}
						else this.failure(json['msg']);
					} catch (err) {
						this.failure(err);
					}
				},
				err => {
					this.failure(err);
				});
	}

	post(url: string, body: any, dParams, callback) {

		let params = new URLSearchParams();
		params.append('authorization', this.getToken());

		if (dParams)
			for (var key in dParams)
				params.append(key, dParams[key]);

		var options: RequestOptionsArgs = {
			search: params,
			headers: this.makeHeaders()
		};

		this.http.post(url, body, options)
			.subscribe(
				(data) => {
					try {
						let json = JSON.parse(data.text());
						if (json['success'] && (json['success'] == 1 || json['success'] == 100)) {
							callback(json['data']);
							this.successful(json['msg'], json['success']);
						}
						else this.failure(json['msg']);
					} catch (err) {
						this.failure(err);
					}
				},
				(err) => {
					this.failure(err);
				});
	}

	protected failure(error: any) {
		// this.flash.show('Request failed\n' + error, { cssClass: 'alert-warning' });
	}
	protected successful(msg: any, code: any) {
		/*if(code == 1)
			this.flash.show(msg, { cssClass: 'alert-success' });*/
	}

	protected request(url, params, callback){
		this.get(this.getRestUrl(url), params, data => {
			callback(data);
		});
	}

	protected getToken(): string {
		return Cookie.get(this.USER_TOKEN);
	}
	protected setToken(token: string) {
		Cookie.set(this.USER_TOKEN, token);
	}
	protected setAuth(auth: string) {
		Cookie.set(this.KEY_AUTH, auth);
	}
	protected getAuth(): any {
		return JSON.parse(Cookie.get(this.KEY_AUTH));
	}
	protected setCookie(key: any, value: any) {
		Cookie.set(key, value);
	}
	protected getCookie(key: any) {
		var data = Cookie.get(key);
		if (data)
			return JSON.parse(data);
		return null;
	}

	private setAppId(appId: string) {
		Cookie.set(this.KEY_APP_ID, appId);
	}

	public moveToAppDetail(appId: string) {
		this.setAppId(appId);
		this.router.moveToAppDetail();
	}
	public moveToForgotPassword() {
		this.router.moveToForgotPassword();
	}

	public logout() {
		Cookie.deleteAll();
		this.moveToLogin();
	}

	public moveToLogin() {
		this.router.moveToLogin();
	}

	public isExpired(): boolean {
		if (Cookie.get(this.USER_TOKEN))
			return false;
		this.router.moveToLogin();
		return true;
	}

	public getAppId(): string {
		return Cookie.get(this.KEY_APP_ID);
	}

	public getFullName(): string {
		return this.getAuth().fullname;
	}

	protected baseUrl(): string {
		return PrivateService.BASE_URL;
	}
	protected getRestUrl(postfix: string): string {
		return this.baseUrl() + postfix;
	}
	public login(params) {
		this.post(this.config.API_LOGIN, null, params, data => {
			this.setToken(data.authorization);
			this.setAuth(JSON.stringify(data));
			this.moveToApps();
		});
	}

	public register(params, callback) {
		this.post(this.config.api_user_register, params, null, data => { callback(data); });
	}

	public moveToApps() {
		this.router.moveToApps();
	}

	public getUrl(icon: string): string {
		return 'http://apitracking.bonanhem.com/upload/image/' + icon;
	}

	public getSources(callback) {
		this.get(this.baseUrl() + SourceApiUrls.get,
			{
				'app_id': this.getAppId(),
				'pg_page': 1,
				'pg_size': 100,
				'st_col': 'sourcename',
				'st_type': 1,
			},
			data => {
				callback(data);
			});
	}
	public deleteSource(params, callback) {
		this.get(this.getRestUrl(SourceApiUrls.delete), params, data => {
			callback(Array.isArray(data) ? data : []);
		});
	}
	public insertSource(params, callback) {
		this.post(this.getRestUrl(SourceApiUrls.insert), params, null, data => {
			callback(Array.isArray(data) ? data : []);
		});
	}

	// DEFAULT
	defaultPaging() {
		return { pg_page: 1, pg_size: 10, st_col: 'created_at', st_type: -1 };
	}
}