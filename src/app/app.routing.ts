import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FullLayoutComponent } from './layouts/full-layout.component';
import { LoginComponent } from './user/login.component';
import { RegisterComponent } from './user/register.component';
import { p404Component } from './shared/404.component';
import { p500Component } from './shared/500.component';
import { AppsComponent } from './apps/apps.component';
import { WidgetsComponent } from './widgets/widgets.component';
import { ContactComponent } from './contact/contact.component';
import { BlogsComponent } from './blogs/blogs.component';
import { DocumentsComponent } from './documents/documents.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { HelpComponent } from './help/help.component';
import { ResourceComponent } from './resource/resource.component';

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
    path: 'widgets',
    component: WidgetsComponent
  },
  {
    path: 'apps',
    component: FullLayoutComponent,
    children: [
      {
        path: 'admin',
        loadChildren: './dashboard/dashboard.module#DashboardModule'
      },
      {
        path: 'components',
        loadChildren: './components/components.module#ComponentsModule'
      },
      {
        path: 'widgets',
        loadChildren: './widgets/widgets.module#WidgetsModule'
      },
      {
        path: 'charts',
        loadChildren: './chartjs/chartjs.module#ChartJSModule'
      }
    ]
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'blogs',
    component: BlogsComponent
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
