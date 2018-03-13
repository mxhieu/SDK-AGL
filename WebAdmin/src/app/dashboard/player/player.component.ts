import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../../service/player.service';

@Component({
  selector: 'app-player',
  templateUrl: 'player.component.html'
})
export class PlayerComponent implements OnInit {

  data: any; paging: any; isnext: any; header: any; search: any;

  constructor(private service: PlayerService) {

    this.data = [];
    this.isnext = true;
    this.search = { field: 'username', term: '' };
    this.paging = this.service.defaultPaging();

    this.header = [
      { id: '_id', name: 'User Id', is_search: 1, st_col: '_id', st_type: 1 },
      { id: 'username', name: 'User Name', is_search: 1, st_col: 'username', st_type: 1 },
      { id: 'email', name: 'Email', is_search: 1, st_col: 'email', st_type: 1 },
      { id: 'created_at', name: 'Created', is_search: 1, st_col: 'created_at', st_type: 1 }];
  }

  ngOnInit(): void {
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

  helpFetchData() {
    this.service.getPlayers(
      {
        'search_app_id': this.service.getAppId(),
        'pg_page': this.paging.pg_page,
        'pg_size': this.paging.pg_size,
        'st_col': this.paging.st_col,
        'st_type': this.paging.st_type,
        ['search_' + this.search.field]: this.search.term
      }, data => {
        this.data = data;
        this.isnext = (this.data.length >= this.paging.pg_size) ? true : false;
      });
  }

}
