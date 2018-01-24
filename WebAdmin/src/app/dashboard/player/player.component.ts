import { Component, OnInit } from '@angular/core';
import 'rxjs/Rx';
import { Service } from '../../service/service';
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
      { id: '_id', name: 'User Id', is_search: 1, st_col: '_id', st_type: 1 },
      { id: 'username', name: 'User Name', is_search: 1, st_col: 'username', st_type: 1 },
      { id: 'email', name: 'Email', is_search: 1, st_col: 'email', st_type: 1 },
      { id: 'phone_number', name: 'Phone', is_search: 1, st_col: 'phone_number', st_type: 1 },
      { id: 'created_at', name: 'Created', is_search: 1, st_col: 'created_at', st_type: 1 }];

    this.helpFetchData();
  }

  ngOnInit(): void { }


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
      'st_col': this.paging.st_col,
      'st_type': this.paging.st_type,
      key: this.search.term
    },
      data => {
        this.data = Array.isArray(data) ? data : [];
        this.isnext = (this.data.length >= this.paging.pg_size) ? true : false;
      });
  }

}
