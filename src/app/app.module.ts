import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {AddressbookComponent} from './addressbook/addressbook.component';
import {AddressListComponent} from './addressbook/address-list/address-list.component';
import {AddressDetailsComponent} from './addressbook/address-details/address-details.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {AuthInterceptor} from './shared/auth.interceptor';
import {ContactService} from './shared/addressbook.service';
import { AddressStartComponent } from './addressbook/address-start/address-start.component';
import { AddressEditComponent } from './addressbook/address-edit/address-edit.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import {AppRoutingModule} from './app-routing.module';
import { HeaderComponent } from './addressbook/header/header.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AuthService} from './auth/auth.service';
import {AuthGuard} from './auth/auth-guard.service';

@NgModule({
  declarations: [
    AppComponent,
    AddressbookComponent,
    AddressListComponent,
    AddressDetailsComponent,
    AddressStartComponent,
    AddressEditComponent,
    HeaderComponent,
    LoginComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule, HttpClientModule, AppRoutingModule, AngularFontAwesomeModule, FormsModule, ReactiveFormsModule
  ],
  providers: [
    ContactService,
    AuthService, AuthGuard,
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
