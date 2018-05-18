import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AmChartsModule } from "@amcharts/amcharts3-angular";
import { RbacRoutingModule } from './rbac-routing.module';

// Ngx Module
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { TabsModule } from 'ngx-bootstrap/tabs';

import { UserComponent } from './user/user.component';
import { RoleComponent } from './role/role.component';
import { PermissionComponent } from './permission/permission.component';

@NgModule({
  imports: [
    CommonModule,
    RbacRoutingModule,
    BsDropdownModule.forRoot(),
    BsDatepickerModule.forRoot(),
    TabsModule.forRoot(),
    FormsModule,
    AmChartsModule
  ],
  declarations: [
    UserComponent, RoleComponent, PermissionComponent]
})
export class RbacModule { }
