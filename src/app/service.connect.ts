import { Injectable } from '@angular/core';
import { Http, URLSearchParams } from '@angular/http';
import { FlashMessagesService } from 'angular2-flash-messages';
import { ConfigService } from './service.config';

@Injectable()
export class ConnectService {

  http: any;

  constructor(_http: Http,
    private flash: FlashMessagesService,
    private config: ConfigService) {
    this.http = _http;
  }

  request(method, api, data, callback) {

    // Default parameters    
    api = api || '';
    method = method || 'get';
    data = data || [];
    callback = callback || false;

    // Prepare data     
    let returnData = null;
    let tempMethod = method.toLowerCase();

    // Do request
    if (tempMethod == 'get') {
      let params = this.prepareGet(data);
      returnData = this.http.get(api + '?' + params).map(this.requestMap)
        .subscribe(data => { callback(this.requestSuccess(data, false)); }, error => this.requestError(error));
    }
    else if (tempMethod == 'post') {
      let params = this.preparePost(data);
      returnData = this.http.post(api, params).map(this.requestMap)
        .subscribe(data => { callback(this.requestSuccess(data, true)); }, error => this.requestError(error));
    }
    else if (tempMethod == 'delete') {
      let params = this.preparePost(data);
      returnData = this.http.delete(api, params).map(this.requestMap);
    }

    return returnData;
  }

  prepareGet(data) {
    let tempReturn = '';
    data['authorization'] = this.config.getToken();
    for (var perdata in data) {
      tempReturn += perdata + '=' + data[perdata] + '&';
    }
    return tempReturn;
  }

  preparePost(data) {
    let tempReturn = new URLSearchParams();
    data['authorization'] = this.config.getToken();
    for (var perdata in data) {
      if (typeof (data[perdata]) == 'object') {
        data[perdata] = JSON.stringify(data[perdata]);
      }
      tempReturn.append(perdata, data[perdata]);
    }
    return tempReturn;
  }


  requestMap(res) {
    return res.text();
  }

  requestSuccess(data, alert) {
    let tempJson;

    try {
      tempJson = JSON.parse(data);
    } catch (e) { }

    if (alert) {
      if (typeof (tempJson.data) != 'undefined' && typeof (tempJson.success) != 'undefined' && tempJson.success == 1) {
        this.flash.show('Request success \n', { cssClass: 'alert-success' });
      } else {
        let errDescription = '';
        let errMsg = tempJson.msg || 'Request failed.';
        if (tempJson.success == - 2) {
          for (let pererr in tempJson.data) {
            if (pererr == 'rxresult') continue;
            errDescription += '<b>' + pererr + '</b>' + ': ' + tempJson.data[pererr] + '<br/>';
          }
        }
        else {
          errDescription += 'Request failed.';
        }

        this.flash.show(errMsg + '<br/>' + errDescription, { cssClass: 'alert-warning' });
      }
    }

    return tempJson;
  }

  requestError(err) {
    return console.log(err);
  }

}
