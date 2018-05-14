import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../../service/base.component';
import { RbacService } from '../../service/rbac.service';
@Component({
  selector: 'app-permission',
  templateUrl: './permission.component.html',
  styleUrls: ['./permission.component.scss']
})
export class PermissionComponent extends BaseComponent implements OnInit {
  headers: any; paging: any; 
  isnext = true; 
  search = { field: 'name', term: '' };
  permissions = []; onerow: any; isEdit: boolean;
  isHidden: boolean;
  sources = [];
  constructor(private service: RbacService) {
    super();
    this.paging = this.service.defaultPaging('id');

    this.headers = [
      { id: 'id', name: 'Id', st_col: 'id', st_type: 1 },
      { id: 'name', name: 'Name', is_search: 1, st_col: 'name', st_type: 1 },
      { id: 'desc', name: 'Description', is_search: 1, st_col: 'desc', st_type: 1 },
      { id: 'controller', name: 'Controller', is_search: 1, st_col: 'controller', st_type: 1 },
      { id: 'action', name: 'Action', is_search: 1, st_col: 'action', st_type: 1 },
      { id: 'method', name: 'Method', is_search: 1, st_col: 'method', st_type: 1 },
      { id: 'created_at', name: 'Created', st_col: 'created_at', st_type: 1 },
      { id: 'is_active', name: 'Status', st_col: 'is_active', st_type: 1 }
    ];
    this.refresh();
  }

  ngOnInit() {  
  }
  
  jumpPage(_page) {
    _page = (_page <= 0) ? 1 : _page;
    this.paging.pg_page = _page
    this.refresh();
  }
  
  resizePage($event) {
    this.paging.pg_size = $event;
    this.jumpPage(1);
  }
  
  refresh() {
    this.reset();
    this.getPermissions();
  }

  reset() {
    this.permissions = [];
    this.isHidden = true;
    this.isEdit = false;
    this.onerow = {
      'name': '',
      'desc': '',
      'is_active': 1
    };
  }
  
  getPermissions() {
    this.service.getPermissions({
      'st_col': this.paging.st_col,
      'st_type': this.paging.st_type,
      'pg_page': this.paging.pg_page,
      'pg_size': this.paging.pg_size,
      ['search_' + this.search.field]: this.search.term
    }, data => {
      this.permissions = data;
      this.isnext = (data.length >= this.paging.pg_size) ? true : false;
    });
  }

  genPermission() {
    this.service.genPermissions({}, data => {
      this.refresh();
    });
  }

  sort($event) {
    var target = $event.target || $event.srcElement || $event.currentTarget;
    var idAttr = target.attributes.rxdata;
    if (typeof (idAttr) != 'undefined') {
      var tempcol = idAttr.nodeValue;
      if (this.paging.st_col == tempcol)
        this.paging.st_type *= -1;
      else {
        this.paging.st_col = tempcol;
        this.paging.st_type = -1;
      }
      this.refresh();
    }
  }

  onEdit(e: any, cp: any) {
    e.stopPropagation();
    this.onerow = cp;
    this.isEdit = true;
    this.isHidden = false;
  }

  update(permission) {
    this.service.updatePermission(permission, data => { this.refresh(); });
  }
}