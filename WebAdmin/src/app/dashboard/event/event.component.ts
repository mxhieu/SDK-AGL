import { Component, OnInit } from '@angular/core';
import 'rxjs/Rx';
import { Service } from '../../service/service';
import { ConfigService } from '../../service/service.config';
@Component({
  templateUrl: 'event.component.html',
  styleUrls: ['event.component.scss']
})
export class EventComponent implements OnInit {

  data: any;
  onerow: any;
  paging: any;
  isnext: any;
  header: any;
  state: any;
  search: any;

  constructor(private service: Service, private configService: ConfigService) {

    this.state = 'listall';
    this.onerow = {};
    this.data = [];
    this.isnext = true;
    this.search = { field: 'name', term: '' };
    this.paging = { pg_page: 1, pg_size: 10, st_col: 'created_at', st_type: -1 };
    this.header = [
      { id: 'user_id', name: 'UserId', is_search: 1 },
      { id: 'event_type', name: 'Type', is_search: 1 },
      { id: 'data', name: 'Data', is_search: 0, st_type: -1 },
      { id: 'created_at', name: 'Updated' }];

    this.helpFetchData();
  }
  ngOnInit(): void { }

  /////////////
  // C R U D //
  /////////////

  // Create
  add() {
    this.onerow = { name: 'Application', platform: 'android', is_active: 1, is_instore: 1, created_at: 1 }
  }

  addSubmit() {
    if (this.onerow._id) { this.onerow.name = this.onerow.name + '_clone'; }

    this.service.post(this.configService.API_APP_DELETE, this.onerow, null, data => {
      this.helpFetchData();
      this.reset();
    })
  }

  // Read 
  viewDetail(_onerow) {
    this.onerow = _onerow;
    this.onerow.isview = true;
  }

  viewRecycle() {
    this.state = 'recycle';
    this.paging.search_is_deleted = 1;
    this.helpFetchData();
  }

  viewDefault() {
    this.state = 'listall';
    this.paging.search_is_deleted = 0;
    this.helpFetchData();
  }

  jumpPage(_page) {
    _page = (_page <= 0) ? 1 : _page;
    this.paging.pg_page = _page
    this.helpFetchData();
  }

  resizePage($event) {
    this.paging.pg_size = $event;
    this.jumpPage(1);
  }

  sort($event) {
    var target = $event.target || $event.srcElement || $event.currentTarget;
    var idAttr = target.attributes.rxdata;
    if (typeof (idAttr) != 'undefined') {
      var tempcol = idAttr.nodeValue;
      if (this.paging.st_col == tempcol) {
        this.paging.st_type *= -1;
      } else {
        this.paging.st_col = tempcol;
        this.paging.st_type = -1;
      }
      this.helpFetchData();
    }
  }

  // Update
  edit(_onerow) {
    this.onerow = _onerow;
  }

  editSubmit() {
    this.service.post(this.configService.API_APP_EDIT, this.onerow, null,
      data => {
        this.helpFetchData();
        this.reset();
      });
  }

  restore(_onerow) {
    this.service.get(this.configService.api_app_restore, { '_id': _onerow._id },
      data => { this.helpFetchData(); })
  }

  // Delete  
  delete(_onerow) {
    this.service.get(this.configService.API_APP_DELETE, { '_id': _onerow._id },
      data => { this.helpFetchData(); })
  }

  reset() {
    this.onerow = {};
  }

  helpFetchData() {

    var key: string;
    if (this.search.term.length > 0) {
      key = 'search_' + this.search.field;
    }

    this.service.get(this.configService.api_tracking_get,
      {
        'search_app_id': this.service.getAppId(),
        'pg_page': this.paging.pg_page,
        'pg_size': this.paging.pg_size,
        'st_col': this.paging.st_col,
        'st_type': this.paging.st_type,
        key: this.search.term
      },
      data => {
        this.data = Array.isArray(data) ? data : [];
        this.isnext = (this.data.length >= this.paging.pg_size) ? true : false;
      });
  }
  getTrackingStatus(type: string): string {

    var res: string;

    if (type == '0') {
      res = 'Installs';
    } else if (type == '1') {
      res = 'Open';
    } else if (type == '2') {
      res = 'Login';
    } else if (type == '3') {
      res = 'Register';
    } else if (type == '4') {
      res = 'Quickplay';
    } else if (type == '5') {
      res = 'Payment';
    } else {
      res = 'Unknown';
    }
    return res;
  }
  helpUpperCaseAfterCommas = function(str) {
    return str.replace(/,\s*([a-z])/g, function(d, e) { return ", " + e.toUpperCase() });
  }
}
