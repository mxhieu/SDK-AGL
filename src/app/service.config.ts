import { Injectable } from '@angular/core';
import { PrivateService } from './service.private';
import { Cookie } from 'ng2-cookies/ng2-cookies';

@Injectable()
export class ConfigService {
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


  // Campaign
  api_campaign_get = this.api_url + 'campaign';
  api_campaign_del = this.api_url + 'campaign/delete';
  api_campaign_add = this.api_url + 'campaign/index';
  api_campaign_edit = this.api_url + 'campaign/edit';
  api_campaign_restore = this.api_url + 'campaign/restore';
  api_campaign_get_recycle = this.api_url + 'campaign/recycle';

  api_upload_image = this.api_url + 'upload';
  api_image_directory = this.api_url + 'upload/image/';

  // App links
  lik_dashboard_index = '/dashboard/index';
  lik_dashboard_app = '/dashboard/app';
  
  route_login = '/pages/login';

  // App others
  app_token = 'accesstoken';

  // App messages
  msg_login_success = 'Login request complete';

  public logout(){
    Cookie.delete(this.app_token);
  }

  public isExpired(): boolean {
    if (Cookie.get(this.app_token))
      return false;
    return true;
  }
  public setCookie(cookie: string){
    Cookie.set(this.app_token, cookie);
  }
}