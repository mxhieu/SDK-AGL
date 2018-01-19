import { Injectable } from '@angular/core';
import { PrivateService } from './service.private';
import { Cookie } from 'ng2-cookies';


@Injectable()
export class ConfigService {

  API_LOGIN = PrivateService.BASE_URL + 'authorize';
  
  API_APP_GET = PrivateService.BASE_URL + 'app';
  API_APP_NEW = PrivateService.BASE_URL + 'app/index';
  API_APP_EDIT = PrivateService.BASE_URL + 'app/edit';
  API_APP_DETAIL = PrivateService.BASE_URL+ 'app/details';
  API_APP_KEY_RESET = PrivateService.BASE_URL + 'app/resetkey';
  API_APP_DELETE = PrivateService.BASE_URL + 'app/delete';


  api_suggestion_get = PrivateService.BASE_URL + 'suggestion';
  api_suggestion_search = PrivateService.BASE_URL + 'suggestion/search/';

  api_app_restore = PrivateService.BASE_URL + 'app/restore';
  api_app_get_recycle = PrivateService.BASE_URL + 'app/recycle';
  // Tracking
  api_tracking_get = PrivateService.BASE_URL + 'tracking';
  // Player
  api_player_get = PrivateService.BASE_URL + 'player';
  api_player_add = PrivateService.BASE_URL + 'player';
  api_player_edit = PrivateService.BASE_URL + 'player/edit';
  api_player_delete = PrivateService.BASE_URL + 'player/delete';
  api_player_restore = PrivateService.BASE_URL + 'player/restore';
  // User
  api_user_register = PrivateService.BASE_URL + "user";
  // Campaign
  api_campaign_get = PrivateService.BASE_URL + 'campaign';
  api_campaign_del = PrivateService.BASE_URL + 'campaign/delete';
  api_campaign_add = PrivateService.BASE_URL + 'campaign/index';
  api_campaign_edit = PrivateService.BASE_URL + 'campaign/edit';
  api_campaign_restore = PrivateService.BASE_URL + 'campaign/restore';
  api_campaign_get_recycle = PrivateService.BASE_URL + 'campaign/recycle';
  api_upload_image = PrivateService.BASE_URL + 'upload';
  api_image_directory = PrivateService.BASE_URL + 'upload/image/';

  // Analytics
  API_APP_OVERVIEW = PrivateService.BASE_URL + 'app/overview';

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
  API_PAYMENT_GET_ITEMS = PrivateService.BASE_URL + 'inapp-item';
  API_PAYMENT_ADD_IN_APPS = PrivateService.BASE_URL + 'inapp-item';
  API_PAYMENT_EDIT = PrivateService.BASE_URL + 'inapp-item/edit';
  API_PAYMENT_DELETE = PrivateService.BASE_URL + 'inapp-item/delete';

  // Card
  API_PAYMENT_CARD_EDIT = PrivateService.BASE_URL + 'card-item/edit';
  API_PAYMENT_GET_CARD_ITEMS = PrivateService.BASE_URL + 'card-item';
  API_PAYMENT_ADD_CARDS = PrivateService.BASE_URL + 'card-item';
  API_PAYMENT_CARD_ITEMS_DELETE = PrivateService.BASE_URL + 'card-item/delete';
  
  // Repport
  API_REPORT_ARM = PrivateService.BASE_URL  + 'report-arm';


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