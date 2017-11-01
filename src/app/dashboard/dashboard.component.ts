import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Http, URLSearchParams } from '@angular/http';
import 'rxjs/Rx';

// In app component
import { ConfigService } from '../service.config';
import { ConnectService } from '../service.connect';

@Component({
  templateUrl: 'dashboard.component.html'
})
export class DashboardComponent implements OnInit {

  rout: any;
  data: any;
  conf: any;
  conn: any;


  constructor(_rout: Router, _conf: ConfigService, _conn: ConnectService) { 
    this.rout = _rout;
    this.conf = _conf;
    this.conn = _conn;
    
    this.conn.request('get', this.conf.api_suggestion_get, {}, 
    data=> {
      this.data = data.data;
    });    
  }

  ngOnInit(): void {
  }

  //////////
  // VIEW //
  //////////
  viewSuggestionDetail(suggestion) {    
    this.conn.request('get', this.conf.api_suggestion_search, {'trace': suggestion.trace},
    data=> {
      suggestion.details = data.data;
    })
  }

  ///////////////////
  // H E L P E R S //
  ///////////////////
  helpUpperCaseAfterCommas = function(str) {
    return str.replace(/,\s*([a-z])/g, function(d,e) { return ", "+e.toUpperCase() });
  }    
}
