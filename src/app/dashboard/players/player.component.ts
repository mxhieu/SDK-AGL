import { Component, OnInit } from '@angular/core';
import 'rxjs/Rx';
import { Service } from '../../service/service';

// In app component
import { ConfigService } from '../../service/service.config';
@Component({
  templateUrl: 'player.component.html'
})
export class PlayerComponent implements OnInit {

  data: any;

  onerow: any;
  paging: any;
  isnext: any;
  header: any;
  state: any;
  search: any;

  constructor(private conf: ConfigService, private service: Service) {

    this.state = 'listall';
    this.onerow = {};
    this.data = [];
    this.isnext = true;
    this.search = { field: 'name', term: '' };
    this.paging = { pg_page: 1, pg_size: 10, st_col: 'created_at', st_type: -1 };
    this.header = [
      { id: '_id', name: 'User Id', is_search: 1 },
      { id: 'username', name: 'User Name', is_search: 1 },
      { id: 'created_at', name: 'Created' },
      { id: 'status', name: 'Status' }];

    this.helpFetchData();
  }

  ngOnInit(): void { }

  // Create
  add() {
    this.onerow = { username: 'User', password: "Password", is_active: 1, created_at: 1 }
  }

  addSubmit() {
    if (this.onerow._id) { this.onerow.name = this.onerow.name + '_clone'; }
    this.service.post(this.conf.api_player_add, this.onerow, null,
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
    this.service.post(this.conf.API_APP_EDIT, this.onerow, null,
      data => { if (data.success == 1) { this.helpFetchData(); this.helpReset(); } })
  }

  restore(_onerow) {
    this.service.get(this.conf.api_player_restore, { '_id': _onerow._id }, data => { this.helpFetchData(); })
  }

  // Delete  
  delete(_onerow) {
    this.service.get(this.conf.api_player_delete, { '_id': _onerow._id }, data => { this.helpFetchData(); })
  }


  ///////////////////
  // H E L P E R S //
  ///////////////////
  helpReset() {
    this.onerow = {};
  }

  helpFetchData() {
    var key: string;
    if (this.search.term.length > 0) {
      key = 'search_' + this.search.field;
    }

    this.service.get(this.conf.api_player_get, {
      'search_app_id': this.service.getAppId(),
      'pg_page': this.paging.pg_page,
      'pg_size': this.paging.pg_size,
      key: this.search.term
    },
      data => {
        this.data = Array.isArray(data) ? data : [];
        this.isnext = (this.data.length >= this.paging.pg_size) ? true : false;
      });
  }

  helpUpperCaseAfterCommas = function(str) {
    return str.replace(/,\s*([a-z])/g, function(d, e) { return ", " + e.toUpperCase() });
  }
}
