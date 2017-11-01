import { Injectable } from '@angular/core';
import { PrivateService } from './service.private';
  
@Injectable()
export class ConfigService {
  // Api links
  api_url = PrivateService.api_url;
  api_authorize = this.api_url + 'authorize';

  api_suggestion_get = this.api_url + 'suggestion';
  api_suggestion_search = this.api_url + 'suggestion/search/';

  api_app_get  = this.api_url + 'app'; 
  api_app_del  = this.api_url + 'app/delete';
  api_app_add  = this.api_url + 'app/index';
  api_app_edit    = this.api_url + 'app/edit';
  api_app_restore = this.api_url + 'app/restore';
  api_app_get_recycle = this.api_url + 'app/recycle';

  api_campaign_get  = this.api_url + 'campaign'; 
  api_campaign_del  = this.api_url + 'campaign/delete';
  api_campaign_add  = this.api_url + 'campaign/index';
  api_campaign_edit = this.api_url + 'campaign/edit';
  api_campaign_restore = this.api_url + 'campaign/restore';
  api_campaign_get_recycle = this.api_url + 'campaign/recycle';

  api_upload_image  = this.api_url + 'upload';
  api_image_directory = this.api_url + 'upload/image/';
  
  // App links
  lik_dashboard_index = '/dashboard/index';

  // App others
  app_token = 'accesstoken';
  
  // App messages
  msg_login_success = 'Login request complete';
}