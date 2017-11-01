import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Http, URLSearchParams } from '@angular/http';
import 'rxjs/Rx';

// In app component
import { ConfigService } from '../service.config';
import { ConnectService } from '../service.connect';

@Component({
  templateUrl: 'campaign.component.html'
})
export class CampaignComponent implements OnInit {

  rout: any;
  data: any;
  conf: any;
  conn: any;

  onerow: any;
  paging: any;
  isnext: any;
  header: any;  
  state : any;
  search: any;

  tem_applist: any;
  tem_applist_selected: any;
  tem_timerule: any;
  sharedVarParent: any;  

  constructor(_rout: Router, _conf: ConfigService, _conn: ConnectService) { 
    this.rout = _rout;
    this.conf = _conf;
    this.conn = _conn;
    
    this.state  = 'listall';
    this.onerow = {};
    this.data   = [];
    this.isnext = true;
    this.search = {field: 'name', term: ''};
    this.paging = {pg_page: 1, pg_size: 10, st_col: 'created_at', st_type: -1};    
    this.header = [{id: 'name', name: 'Campaign name', is_search: 1}, {id: 'app', name: 'App'}, {id: 'appdist', name: 'App promoting'}, 
    {id: 'rule_time', name: 'Time rules'}, {id: 'created_at', name: 'Created time'}, {id: 'status', name: 'Status'}];

    this.tem_timerule = {once_ever: 'Once ever', once_aday: 'Once a day', once_ehour: 'One every hour', everytime: 'Every time'};

    this.helpFetchData();
    this.helpGetApplist();
  }
  ngOnInit(): void {}

  /////////////
  // C R U D //
  /////////////

  // Create
  add() {
    if (typeof(this.tem_applist[0]) == 'undefined') { this.tem_applist[0]._id = ''; this.tem_applist[0].name = 'New Campaign'; }
    this.onerow = {name: this.tem_applist[0].name +'_'+ Date.now(), created_at: 1, is_active: 1, filter_type: 'all', rule_time: 'once_ever', app: this.tem_applist[0]._id}
  }

  addSubmit() {
    if (this.onerow._id) { this.onerow.name = this.onerow.name + '_clone'; }

    this.conn.request('post', this.conf.api_campaign_add, this.onerow, 
    data=> { this.helpFetchData(); this.helpReset(); })
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
    if (typeof(idAttr) != 'undefined') {
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
    // Pre selected app
    this.tem_applist_selected = [];
    for (var key in this.tem_applist) {      
      if (this.onerow.appdist.indexOf(this.tem_applist[key]._id) != -1) {
        this.tem_applist_selected.push(this.tem_applist[key]);
      }
    }    
  }

  editSubmit() {
    this.conn.request('post', this.conf.api_campaign_edit, this.onerow, 
    data=> { this.helpFetchData(); this.helpReset(); })
  }

  restore(_onerow) {
    this.conn.request('get', this.conf.api_campaign_restore, {_id: _onerow._id}, 
    data=> { this.helpFetchData(); })
  }

  // Delete  
  delete(_onerow) {
    this.conn.request('get', this.conf.api_campaign_del, {_id: _onerow._id},
    data=> { this.helpFetchData(); }) 
  }

  // Handle 
  handleSharedChange(list) {
    this.onerow.appdist = [];
    for (var key in list) {
      var tempapp = list[key];
      if (typeof(tempapp._id) != 'undefined') {
        this.onerow.appdist.push(tempapp._id);
      }      
    }
  }

  onChangeImg($event, imageName) {
    this.onerow[imageName] = $event;
  }

  ///////////////////
  // H E L P E R S //
  ///////////////////
  helpReset() {
    this.onerow = {};    
  }

  helpRefresh() {
    this.helpReset();
    this.helpFetchData();
  }

  helpFetchData() {
    // Make search params 
    var params = {}; Object.assign(params, this.paging);
    if (this.search.term.length > 0) { params['search_' + this.search.field] = this.search.term; }

    this.conn.request('get', this.conf.api_campaign_get, params, 
    data=> {      
      this.data = Array.isArray(data.data)? data.data : [];
      this.isnext = (this.data.length >= this.paging.pg_size)? true: false;
    });
  }

  helpGetApplist() {
    var search = search || '';
    this.conn.request('get', this.conf.api_app_get, {},
    data=> {
      this.tem_applist_selected = [];
      this.tem_applist = Array.isArray(data.data)? data.data : [];
      for (var key in this.tem_applist) {
        // Prepare data
        var perdata = this.tem_applist[key];
        perdata.icons = perdata.icons || '/assets/img/ico_app_default.png';
        this.tem_applist[key].html = '<img src="' +this.conf.api_image_directory+perdata.icons+ '" class="img-avatar"> ' + perdata.name;
        this.tem_applist[key].html_selected = '<b>' +perdata.name+ '</b>';      
      }
    });
  }

  helpUpperCaseAfterCommas = function(str) {
    return str.replace(/,\s*([a-z])/g, function(d,e) { return ", "+e.toUpperCase() });
  }    
}
