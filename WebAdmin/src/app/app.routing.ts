import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FullLayoutComponent } from './dashboard/full-layout.component';
import { LoginComponent } from './user/login.component';
import { RegisterComponent } from './user/register.component';
import { p404Component } from './shared/404.component';
import { p500Component } from './shared/500.component';
import { AppsComponent } from './apps/apps.component';
import { ContactComponent } from './contact/contact.component';
import { BlogComponent } from './blog/blog.component';
import { DocumentsComponent } from './document/documents.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { HelpComponent } from './help/help.component';
import { ResourceComponent } from './resource/resource.component';
import { ForgotPasswordComponent } from './forgotpassword/forgotpassword.component';
import { GroupComponent } from './group/group.component';

export const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'apps',
    component: AppsComponent
  },
  {
    path: 'groups',
    component: GroupComponent
  },
  {
    path: 'apps',
    component: FullLayoutComponent,
    children: [
      {
        path: 'admin',
        loadChildren: './dashboard/dashboard.module#DashboardModule'
      }
    ]
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'blogs',
    component: BlogComponent
  },
  {
    path: 'document',
    component: DocumentsComponent
  },
  {
    path: 'privacy',
    component: PrivacyComponent
  },
  {
    path: 'help',
    component: HelpComponent
  },
  {
    path: 'resources',
    component: ResourceComponent
  },
  {
    path: 'forgot-password',
    component: ForgotPasswordComponent
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: p404Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
