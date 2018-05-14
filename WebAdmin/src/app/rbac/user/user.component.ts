import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../../service/base.component';
import { RbacService } from '../../service/rbac.service';
import { GroupService } from '../../service/group.service';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent extends BaseComponent implements OnInit {
  headers: any; paging: any; search = { field: 'username', term: '' };
  apps: any; app = { 'app_id': '', 'os': '', 'version': '' };
  users = [];
  groups: any;
  groups_tmp: any[];
  arrgroupschoose = []; 
  onerow: any; isEdit: boolean;
  isHidden: boolean;
  roles = [];
  constructor(private service: RbacService,private gservice: GroupService) {
    super();
    this.paging = this.service.defaultPaging('created_at');

    this.headers = [
      { id: 'username', name: 'Username', is_search: 1, st_col: 'username', st_type: 1 },
      { id: 'fullname', name: 'Fullname', is_search: 1, st_col: 'fullname', st_type: 1 },
      { id: 'phone', name: 'Phone', is_search: 1, st_col: 'phone', st_type: 1 },
      { id: 'email', name: 'Email', is_search: 1, st_col: 'email', st_type: 1 },
      { id: 'address', name: 'Address', is_search: 1, st_col: 'address', st_type: 1 },
      { id: 'created_at', name: 'Created', is_search: 1, st_col: 'created_at', st_type: 1 },
      { id: 'is_active', name: 'Status', is_search: 1, st_col: 'is_active', st_type: 1 }
    ];
    this.refresh();
    this.getRoles();
    this.getGroups();
  }
  ngOnInit() {  
  }

  jumpPage(_page) {
    _page = (_page <= 0) ? 1 : _page;
    this.paging.pg_page = _page
    this.refresh();
  }

  getGroups() {
    this.gservice.getGroups({}, data => {
      this.groups = data;
      this.groups_tmp = this.groups;
    });
  }

  // getApps() {
  //   this.app.app_id = this.service.getAppId();
  //   this.apps = this.gService.getGroupSetting();
  //   for (var ap of this.apps) {
  //     if (ap.app_id == this.app.app_id) {
  //       this.app.os = ap.os;
  //       this.app.version = ap.version;
  //     }
  //   }
  // }
  
  switchApp(app) {
    this.service.setAppId(app.app_id);
    this.refresh();
  }
  resizePage($event) {
    this.paging.pg_size = $event;
    this.jumpPage(1);
  }
  refresh() {
    this.reset();
    this.getUsers();
  }
  reset() {
    this.users = [];
    this.isHidden = true;
    this.isEdit = false;
    this.onerow = {};
  }
  getRoles() {
    this.service.getallRoles({}, data => {
      this.roles = data
      if (this.roles.length > 0)
        this.onerow.roleid = this.roles[0]._id;
    });
  }
  getUsers() {
    this.service.getUsers({
      'st_col': this.paging.st_col,
      'st_type': this.paging.st_type,
      'pg_page': this.paging.pg_page,
      'pg_size': this.paging.pg_size,
      ['search_' + this.search.field]: this.search.term
    }, data => {
      this.users = data;
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
  show() {
    this.search = { field: 'fullname', term: '' };
    this.isHidden = false;
    this.isEdit = false;
    if (this.roles && this.roles.length > 0) {
      this.onerow.roleid = this.roles[0]._id;
    }
  }

  save(onerow) {
    this.service.insertUser(onerow, data => { this.refresh(); });
  }
  
  onEdit(e: any, cp: any) {
    e.stopPropagation();
    this.onerow = cp;
    this.isEdit = true;
    this.isHidden = false;
    this.search = { field: 'fullname', term: '' };
  }

  update() {
    this.service.updateUser(this.onerow, data => { this.refresh(); });
  }

  delete(e: any, cp: any) {
    e.stopPropagation();
    this.service.deleteUser({ 'id': cp._id }, data => { this.refresh(); });
  }


  // Multi Select Box
  onChange(deviceValue) {
    console.log(this.groups_tmp)
    console.log(deviceValue);
  }
}