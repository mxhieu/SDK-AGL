import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { NAV_DROPDOWN_DIRECTIVES } from './shared/nav-dropdown.directive';
// Ngx Module
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { SIDEBAR_TOGGLE_DIRECTIVES } from './shared/sidebar.directive';
import { AsideToggleDirective } from './shared/aside.directive';

// Routing Module
import { AppRoutingModule } from './app.routing';
import { PrivateService } from './service/service.private';
import { ConfigService } from './service/service.config';
import { RoutingService } from './service/routing.service';

// Layouts
import { FullLayoutComponent } from './dashboard/full-layout.component';
import { RbacLayoutComponent } from './rbac/rbac-layout.component';
import { LoginComponent } from './user/login.component';
import { FooterComponent } from './shared/footer.component';
import { p404Component } from './shared/404.component';
import { RegisterComponent } from './user/register.component';
import { HeaderComponent } from './shared/header.component';
import { ContactComponent } from './contact/contact.component';
import { BlogComponent } from './blog/blog.component';
import { DocumentsComponent } from './document/documents.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { HelpComponent } from './help/help.component';
import { ResourceComponent } from './resource/resource.component';
import { ForgotPasswordComponent } from './user/forgotpassword.component';
import { GroupComponent } from './group/group.component';
import { BaseComponent } from './service/base.component';
import { SharedModule } from './service/shared.module';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        AppRoutingModule,
        HttpModule,
        BsDropdownModule.forRoot(),
        BsDatepickerModule.forRoot(),
        TabsModule.forRoot(),
        SharedModule,
        BrowserAnimationsModule,
        ToastrModule.forRoot({
            timeOut: 2000, progressBar: true, progressAnimation: 'decreasing',
            tapToDismiss: true, maxOpened: 1, preventDuplicates: true
        })
    ],
    declarations: [
        AppComponent,
        FullLayoutComponent,
        NAV_DROPDOWN_DIRECTIVES,
        SIDEBAR_TOGGLE_DIRECTIVES,
        AsideToggleDirective,
        LoginComponent,
        FooterComponent,
        p404Component,
        RegisterComponent,
        HeaderComponent,
        ContactComponent,
        BlogComponent,
        DocumentsComponent,
        PrivacyComponent,
        HelpComponent,
        ResourceComponent,
        ForgotPasswordComponent,
        GroupComponent,
        RbacLayoutComponent
    ],
    providers: [
        ConfigService,
        RoutingService,
        PrivateService,
        {
            provide: LocationStrategy,
            useClass: HashLocationStrategy
        }
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
