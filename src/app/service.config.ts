import { Injectable } from '@angular/core';
import { PrivateService } from './service.private';
import { CookieService } from 'angular2-cookie/core';

@Injectable()
export class ConfigService {

  private cookie: CookieService;

  public ConfigService(){
     this.cookie = new CookieService();
  }

  // Api links
  api_url = PrivateService.api_url;
  api_authorize = this.api_url + 'authorize';
  api_suggestion_get = this.api_url + 'suggestion';
  api_suggestion_search = this.api_url + 'suggestion/search/';
  // Application
  api_app_get = this.api_url + 'app';
  api_app_del = this.api_url + 'app/delete';
  api_app_add = this.api_url + 'app/index';
  api_app_edit = this.api_url + 'app/edit';
  api_app_restore = this.api_url + 'app/restore';
  api_app_get_recycle = this.api_url + 'app/recycle';
  // Tracking
  api_tracking_get = this.api_url + 'tracking';
  // Player
  api_player_get = this.api_url + 'player';
  api_player_add = this.api_url + 'player';
  api_player_edit = this.api_url + 'player/edit';
  api_player_delete = this.api_url + 'player/delete';
  api_player_restore = this.api_url + 'player/restore';
  // User
  api_user_register = this.api_url + "user";
  // Campaign
  api_campaign_get = this.api_url + 'campaign';
  api_campaign_del = this.api_url + 'campaign/delete';
  api_campaign_add = this.api_url + 'campaign/index';
  api_campaign_edit = this.api_url + 'campaign/edit';
  api_campaign_restore = this.api_url + 'campaign/restore';
  api_campaign_get_recycle = this.api_url + 'campaign/recycle';
  api_upload_image = this.api_url + 'upload';
  api_image_directory = this.api_url + 'upload/image/';
  // Analytics
  API_APP_OVERVIEW = this.api_url + 'app/overview';
  // Router
  LINK_TO_APPS = '/apps';
  LINK_TO_LOGIN = '/login';
  LINK_TO_APPS_OVERVIEW = '/apps/admin';
  // user privacy
  USER_TOKEN = 'ftoken';
  USER_FULLNAME = 'fname';

  // App config
  APP_INFO = 'fApp';

  // Payment
  API_PAYMENT_GET_ITEMS = this.api_url + 'inapp-item';
  API_PAYMENT_ADD_IN_APPS = this.api_url + 'inapp-item';
  API_PAYMENT_EDIT = this.api_url + 'inapp-item/edit';
  API_PAYMENT_DELETE = this.api_url + 'inapp-item/delete';
  // App messages
  msg_login_success = 'Login request complete';

  public logout() {
    this.cookie.remove(this.USER_TOKEN);
    this.cookie.remove(this.USER_FULLNAME);
    this.cookie.remove(this.APP_INFO);
  }
  public setFullname(fullname: string) {
    this.cookie.put(this.USER_FULLNAME, fullname);
  }
  public isExpired(): boolean {
    if (this.cookie.get(this.USER_TOKEN))
      return false;
    return true;
  }

  public setAppInfo(info: any) {
    this.cookie.putObject(this.APP_INFO, info);
  }

  public getAppInfo(): any {
    console.log(this.cookie.getObject(this.APP_INFO));
    return this.cookie.getObject(this.APP_INFO);
  }

  public getFullName(): string {
    var name: string = this.cookie.get(this.USER_FULLNAME);
    if (!name)
      name = 'User';
    return name;
  }
  public setCookie(cookie: string) {
    this.cookie.put(this.USER_TOKEN, cookie);
  }
}