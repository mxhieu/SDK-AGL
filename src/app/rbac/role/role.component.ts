import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../../service/base.component';
import { RbacService } from '../../service/rbac.service';
@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.scss']
})
export class RoleComponent extends BaseComponent implements OnInit {
  headers: any; paging: any; 
  isnext = true; 
  search = { field: 'name', term: '' };
  roles = []; onerow: any; 
  isHidden: boolean;
  
  router: any;
  http: any;
  data: any;
  permission_array: any;
  selected_array = [];
  showselected_array = [];
  select_tmp_array = [];
  data_permission: any;
  dataopt: any;
  // isEdit: any;
  isEdit: boolean;
  isDelete: any;
  isPermission: any;
  isView: any;
  config: any;
  pagin: any;
  connect: any;

  constructor(private service: RbacService) {
    super();
    this.paging = this.service.defaultPaging('id');
    this.headers = [
      { id: 'name', name: 'Name', is_search: 1, st_col: 'name', st_type: 1 },
      { id: 'desc', name: 'Description', is_search: 1, st_col: 'desc', st_type: 1 },
      { id: 'code', name: 'Code', is_search: 1, st_col: 'code', st_type: 1 },
      { id: 'created_at', name: 'Created', st_col: 'created_at', st_type: 1 },
      { id: 'is_active', name: 'Status', st_col: 'is_active', st_type: 1 }
    ];
    
    this.isEdit = false;
    this.isDelete = false;
    this.isView = false
    this.onerow  = {};
    this.dataopt     = {page: [1, 2, 3]};
    
    this.refresh();
    this.getAllPermissions();
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
    this.getRoles();
  }

  reset() {
    this.roles = [];
    this.isHidden = true;
    this.isEdit = false;
    this.onerow = {
      'name': '',
      'desc': '',
      'is_active': 1
    };
  }
  
  getRoles() {
    this.service.getRoles({
      'st_col': this.paging.st_col,
      'st_type': this.paging.st_type,
      'pg_page': this.paging.pg_page,
      'pg_size': this.paging.pg_size,
      ['search_' + this.search.field]: this.search.term
    }, data => {
      this.roles = data;
      this.isnext = (data.length >= this.paging.pg_size) ? true : false;
    });
  }

  getAllPermissions() {
    this.service.getallPermissions({}, data => {
      this.permission_array = []
      this.data_permission = data
      let per_array = this.groupBy(this.data_permission)
      let array_parse = this.parse_obj_toarray(per_array)
      let keys = []
      for (let key in array_parse) {
        keys.push(array_parse[key])
      } 
      this.permission_array = keys
    })
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

  update(paramrole) {
    if (paramrole && paramrole.permission) {
      if (typeof(paramrole.permission) == "string") {paramrole.permission = paramrole.permission.split(',')}
      paramrole.permission = paramrole.permission.map(Number)
    }
    
    this.service.updateRole(paramrole, data => { this.refresh(); });
  }

  delete(e: any, cp: any) {
    e.stopPropagation();
    this.service.deleteRole({ 'id': cp._id }, data => { this.refresh(); });
  }

  // View 
  detail(event) {
    this.isView = true;
    this.onerow = event;
    var init_per = this.initialPermission();
    this.show_permission(init_per);
  }

  show() {
    this.isHidden = false;
    this.isEdit = false;
    this.selected_array = [];
    this.showselected_array = [];
  }

  onEdit(e: any, cp: any) { 
    e.stopPropagation();
    this.onerow = cp;
    this.isEdit = true;
    this.isHidden = false;
    var init_per = this.initialPermission();
    this.checkPermission(init_per);
    this.show_permission(init_per);
  }

  editCancel(event) {
    this.resetState();
  }

  editSubmit() {
    var tempparams = [];
    tempparams['id'] = this.onerow.id;
    tempparams['name'] = this.onerow.name;
    tempparams['desc'] = this.onerow.desc;
    tempparams['code'] = this.onerow.code;
    tempparams['permission'] = this.onerow.permission;
    this.connect.request('post', this.config.api_roleupdate, tempparams, data=> {
      if (data.success == 1) { this.refresh(); this.resetState(); }
    });
  }

  addCancel() {
    this.resetState();
  }

  addResetPermission() {    
    this.getAllPermissions();
    this.selected_array = this.initialPermission();
    this.show_permission(this.selected_array);
    this.isPermission = false;
    this.isHidden = false;
  }

  addClosePermission() {
    this.isPermission = false;
    this.isHidden = false;
  }

  addSavePermission() {
    this.show_permission(this.selected_array);
    this.onerow.permission = this.selected_array;
    this.isPermission = false;
    this.isHidden = false;
  }

  save() {
    let tempparams = {};
    tempparams['name'] = this.onerow.name;
    tempparams['desc'] = this.onerow.desc;
    tempparams['code'] = this.onerow.code;
    tempparams['permission'] = this.onerow.permission;
    this.service.insertRole(tempparams, data => { this.refresh(); this.resetState(); });
  }

  addMeta() {
    if (typeof(this.onerow.info) == 'undefined') { this.onerow.info = []; }
    var tempObj = {name: '', value: ''};
    this.onerow.info.push(tempObj);
  }

  addPermission() {
    this.isPermission = true;
    this.isHidden = true;
    this.checkPermission(this.selected_array);
  }

  ///////////////////
  // H E L P E R S //
  ///////////////////
  resetState() {
    this.isEdit = false;
    this.isView = false;
    this.onerow = {};
  }

  checkedExist(data) {
    var arrchecked = data.value.map((x) => x.checked)
    if (arrchecked.indexOf(true) === -1) {
      return false
    } else {
      return true
    }
  }

  checkedAll(data) {
    var check_list = true;
    for (let key in data.value) {
      if (data.value[key].checked != true){
        check_list = check_list && false;
      } else {
        check_list = check_list && true;
      }
    }
    return check_list;
  }

  toggleAll(data) {
    if (this.checkedAll(data)){
      for (let key in data.value) {
        var index = this.selected_array.indexOf(data.value[key].id);
        this.selected_array.splice(index, 1)
        data.value[key].checked = false;
      }
    } else {
      for (let key in data.value) {
        if (this.selected_array.indexOf(data.value[key].id) === -1) {
          this.selected_array.push(data.value[key].id);
          data.value[key].checked = true;
        }
      }
    }
  }

  toggleOne(data,checked) {
    if (this.selected_array.indexOf(data.id) === -1) {
      if (checked) {
        this.selected_array.push(data.id);
      }
    } else {
      if (!checked) {
        var index = this.selected_array.indexOf(data.id);
        this.selected_array.splice(index, 1)
      }
    }
  }

  parse_obj_toarray(value) {
    if (!value) {
      return value;
    } 
    let keys = [];
    for (let key in value) {
      keys.push({key: key, value: (value[key])});
    } 
    return keys;
  } 

  groupBy(permissionArr) {
    var groups = {};
    permissionArr.forEach(function(permission) {
      permission.checked = false;          
      groups[permission.controller] = groups[permission.controller] || [];
      groups[permission.controller].push(permission);
    })
    return groups;
  } 

  initialPermission(){
    if (this.onerow.permission != null) {
      var str = this.onerow.permission.replace("[", "").replace("]", "");
      var array = str.split(",").map(Number);
      this.selected_array = array;
      return this.selected_array;
    } else {
      return this.selected_array = [];
    }
  }

  show_permission(data) {
    let dataper_selected = []
    for (let key_per in this.data_permission) {
      if (data.indexOf(this.data_permission[key_per].id) !== -1){
        dataper_selected.push(this.data_permission[key_per]);
      }
    }
    
    let dataper_tmp = this.groupBy(dataper_selected);
    this.showselected_array = this.parse_obj_toarray(dataper_tmp);
    return this.showselected_array;
  }

  checkPermission(permission_checked) {
    if ( permission_checked != null) {
      for (let key_per in this.data_permission) {
        if (permission_checked.indexOf(this.data_permission[key_per].id) !== -1){
          this.data_permission[key_per].checked = true;
        }
      }
    }
    return this.data_permission;
  }

  confirmSubmit() {
    this.pagin.id = this.onerow.id;
    this.connect.request('get', this.config.api_roledel, this.pagin, data=> {
      if (data.success == 1) { this.refresh();  }  
    });
    this.isDelete = false; 
  }

  confirmCancel() {
    this.isDelete = false; 
    this.isEdit = false;
    this.isView = false;
    this.onerow = event;
  }

}