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
  apps: any; app = { 'app_id': '', 'os': '', 'version': '' }; users = []; groups: any; psearch: any;
  groups_tmp: any[]; arrgroupschoose = [];  onerow: any; isEdit: boolean; isChangePass: boolean; isHidden: boolean; isnext: any;  roles = []; showmultiselect: any; checkmultiall: any;
  groupstmp = []; groupsorigin = []; groupsselect = []; 
  constructor(private service: RbacService,private gservice: GroupService) {
    super();
    this.paging = this.service.defaultPaging('created_at');
    this.isnext = true;
    this.showmultiselect = false;
    this.checkmultiall = false;
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
    document.addEventListener('click', this.offClickHandler.bind(this));
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
      this.groups = this.groupstmp = this.groupsorigin = data;
      this.groups_tmp = this.groups;
    });
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
    this.isChangePass = false;
    this.onerow = {};
  }
  getRoles() {
    this.service.getUsersRole({}, data => {
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
    this.isChangePass = false;
    this.groupsselect = [];
    this.groups = this.groupsorigin;
    this.groups.forEach(obj => { delete (obj.checked) });
    this.groupstmp = this.groups; 
    this.checkmultiall = false;
    if (this.roles && this.roles.length > 0) {
      this.onerow.roleid = this.roles[0]._id;
    }
  }

  save(onerow) {
    onerow['products'] = []
    for (let i in this.groupsselect) {
      let objtmp = this.groupsselect[i]
      onerow['products'].push(objtmp._id)
    }

    this.service.insertUser(onerow, data => { this.refresh(); });
  }
  
  onEdit(e: any, cp: any) {
    e.stopPropagation();
    this.onerow = cp;
    this.isEdit = true;
    this.isChangePass = true;
    this.isHidden = false;
    this.search = { field: 'fullname', term: '' };

    // add multi select
    let arrmulti = []
    this.groupsselect = []
    this.groups = this.groupstmp = this.groupsorigin;
    for (let i in this.groups) {
      let objtmp = this.groups[i]
      if (this.onerow.products.indexOf(objtmp._id) != -1) {
        this.groupsselect.push(objtmp)
        objtmp.checked = true
        arrmulti.push(true)
      } else {
        arrmulti.push(false)
      }
    }
    this.checkmultiall = (arrmulti.constructor == Array && arrmulti.indexOf(false) != -1) ? false : true 
  }

  update() {
    let params = this.onerow
    params['products'] = []
    for (let i in this.groupsselect) {
      let objtmp = this.groupsselect[i]
      params['products'].push(objtmp._id)
    }

    this.service.updateUser(this.onerow, data => { this.refresh(); });
  }

  delete(e: any, cp: any) {
    e.stopPropagation();
    this.service.deleteUser({ 'id': cp._id }, data => { this.refresh(); });
  }

  changePass(onerow) {
    onerow.password = ''
    onerow.isChangePass = this.isChangePass
    this.isChangePass = !this.isChangePass
  }

  // Multi Select Box
  onChange(deviceValue) {
  }

  offClickHandler(event:any) {
    if (!event.target.parentElement.classList.contains('show-select') && this.showmultiselect == true) {
      this.showmultiselect = false
    }
  }

  showSelect() {
    this.showmultiselect = !this.showmultiselect;
  }

  chooseGroup(index) {
    let objtmp = this.groups[index]
    let objfind = this.groupsselect.find(obj => obj._id == objtmp._id)
    if (!objfind) {
      this.groupsselect.push(objtmp)  
    } else {
      this.groupsselect = this.groupsselect.filter(function( obj ) {return obj._id !== objtmp._id})
    }

    if (!objtmp.checked) {
      objtmp.checked = true
    } else {
      objtmp.checked = false
    }

    let objcheck = this.groups.find(obj => (obj.checked == false || typeof(obj.checked) == 'undefined'))
    this.checkmultiall = (typeof(objcheck) == 'undefined' && this.groups.length == this.groupstmp.length) ? true : false
  }

  deleteGroup(objtmp) {
    let objfind = this.groups.find(obj => obj._id == objtmp._id)
    this.showmultiselect = true;
    this.groupsselect = this.groupsselect.filter(function( obj ) {return obj._id !== objtmp._id})
    if (objfind) {
      objtmp.checked = false
      this.checkmultiall = false
    } 
  }

  searchGroup() {
    for (let i in this.groups) {
      this.groupstmp[i]['checked'] = (this.groups[i]['checked']) ? this.groups[i]['checked'] : false   
    }
    this.groups = this.groupstmp.filter(x => x.name.indexOf(this.psearch) != -1)
  }

  checkMultiAll() {
    this.checkmultiall = !this.checkmultiall
    if (this.checkmultiall) {
      this.groupsselect = this.groups
      this.groups.forEach(obj => obj.checked = true)
    } else {
      this.groupsselect = []
      this.groups.forEach(obj => obj.checked = false)
    }
  }
}