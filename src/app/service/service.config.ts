import { Injectable } from '@angular/core';
import { PrivateService } from './service.private';
import { Cookie } from 'ng2-cookies';

@Injectable()
export class ConfigService {

  API_LOGIN = PrivateService.BASE_URL + 'authorize';
  API_CHANGEPASS = PrivateService.BASE_URL  + 'authorize/changepass';
  
  // Tracking
  api_tracking_get = PrivateService.BASE_URL + 'tracking';
  
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