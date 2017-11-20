import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Http, URLSearchParams } from '@angular/http';
import 'rxjs/Rx';

// In app component
import { ConfigService } from '../service.config';
import { ConnectService } from '../service.connect';

@Component({
  templateUrl: 'app.component.html'
})
export class AppComponent implements OnInit {

  rout: any;
  data: any;
  conf: any;
  conn: any;

  onerow: any;
  paging: any;
  isnext: any;
  header: any;
  state: any;
  search: any;

  constructor(_rout: Router, _conf: ConfigService, _conn: ConnectService) {
    this.rout = _rout;
    this.conf = _conf;
    this.conn = _conn;

    this.state = 'listall';
    this.onerow = {};
    this.data = [];
    this.isnext = true;
    this.search = { field: 'name', term: '' };
    this.paging = { pg_page: 1, pg_size: 10, st_col: 'created_at', st_type: -1 };
    this.header = [{ id: 'name', name: 'Name', is_search: 1 }, { id: '_id', name: 'App Id', is_search: 0 }, { id: 'platform', name: 'Platform', is_search: 1 }, { id: 'created_at', name: 'Created time' }, { id: 'status', name: 'Status' }];
  }
  ngOnInit(): void {
    if (this.conf.isExpired())
      this.rout.navigate([this.conf.route_login]);
    else
      this.helpFetchData();
  }

  /////////////
  // C R U D //
  /////////////

  // Create
  add() {
    this.onerow = { name: 'Application', platform: 'android', is_active: 1, is_instore: 1, created_at: 1 }
  }

  addSubmit() {
    if (this.onerow._id) { this.onerow.name = this.onerow.name + '_clone'; }

    this.conn.request('post', this.conf.api_app_add, this.onerow,
      data => { if (data.success == 1) { this.helpFetchData(); this.helpReset(); } })
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
    this.conn.request('post', this.conf.api_app_edit, this.onerow,
      data => { if (data.success == 1) { this.helpFetchData(); this.helpReset(); } })
  }

  restore(_onerow) {
    this.conn.request('get', this.conf.api_app_restore, { _id: _onerow._id },
      data => { this.helpFetchData(); })
  }

  // Delete  
  delete(_onerow) {
    this.conn.request('get', this.conf.api_app_del, { _id: _onerow._id },
      data => { this.helpFetchData(); })
  }

  // Handle
  onChangeImg($event, imageName) {
    this.onerow[imageName] = $event;
  }

  ///////////////////
  // H E L P E R S //
  ///////////////////
  helpReset() {
    this.onerow = {};
  }

  helpFetchData() {
    // Make search params 
    var params = {}; Object.assign(params, this.paging);
    if (this.search.term.length > 0) { params['search_' + this.search.field] = this.search.term; }

    this.conn.request('get', this.conf.api_app_get, params,
      data => {
        this.data = Array.isArray(data.data) ? data.data : [];
        this.isnext = (this.data.length >= this.paging.pg_size) ? true : false;
      });
  }

  helpUpperCaseAfterCommas = function(str) {
    return str.replace(/,\s*([a-z])/g, function(d, e) { return ", " + e.toUpperCase() });
  }
}
