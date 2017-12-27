import { Injectable } from '@angular/core';
import { PrivateService } from './service.private';
import { Cookie } from 'ng2-cookies';


@Injectable()
export class ConfigService {

  // Api links
  api_url = PrivateService.api_url;

  API_LOGIN = this.api_url + 'authorize';
  
  API_APP_GET = this.api_url + 'app';
  API_APP_NEW = this.api_url + 'app/index';
  API_APP_EDIT = this.api_url + 'app/edit';
  API_APP_DETAIL = this.api_url + 'app/details';
  API_APP_KEY_RESET = this.api_url + 'app/resetkey';
  API_APP_DELETE = this.api_url + 'app/delete';


  api_suggestion_get = this.api_url + 'suggestion';
  api_suggestion_search = this.api_url + 'suggestion/search/';

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

  // User privacy
  USER_TOKEN = 'ftoken';
  USER_FULLNAME = 'fname';

  // App config
  APP_INFO = 'fApp';
  APP_ID = 'fAppId';

  // Payment
  API_PAYMENT_GET_ITEMS = this.api_url + 'inapp-item';
  API_PAYMENT_ADD_IN_APPS = this.api_url + 'inapp-item';
  API_PAYMENT_EDIT = this.api_url + 'inapp-item/edit';
  API_PAYMENT_DELETE = this.api_url + 'inapp-item/delete';

  // Card
  API_PAYMENT_CARD_EDIT = this.api_url + 'card-item/edit';
  API_PAYMENT_GET_CARD_ITEMS = this.api_url + 'card-item';
  API_PAYMENT_ADD_CARDS = this.api_url + 'card-item';
  API_PAYMENT_CARD_ITEMS_DELETE = this.api_url + 'card-item/delete';
  

  public setFullname(fullname: string) {
    Cookie.set(this.USER_FULLNAME, fullname);
  }

  public setAppInfo(info: any) {
    Cookie.set(this.APP_INFO, JSON.stringify(info));
  }

  public setAppId(id: string) {
    Cookie.set(this.APP_ID, id);
  }
  public getAppId(): string {
    return Cookie.get(this.APP_ID);
  }

  public getToken(): string {
    return Cookie.get(this.USER_TOKEN);
  }
  public getAppInfo(): any {
    return JSON.parse(Cookie.get(this.APP_INFO));
  }

  public getFullName(): string {
    var name: string = Cookie.get(this.USER_FULLNAME);
    if (!name)
      name = 'User';
    return name;
  }
}