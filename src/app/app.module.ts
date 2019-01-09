import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {AddressbookComponent} from './addressbook/addressbook.component';
import {AddressListComponent} from './addressbook/address-list/address-list.component';
import {AddressDetailsComponent} from './addressbook/address-details/address-details.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {AuthInterceptor} from './addressbook/shared/auth.interceptor';
import {ContactService} from './addressbook/shared/addressbook.service';
import { AddressStartComponent } from './addressbook/address-start/address-start.component';
import { AddressEditComponent } from './addressbook/address-edit/address-edit.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import {AppRoutingModule} from './app-routing.module';
import { HeaderComponent } from './addressbook/header/header.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

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
    RegistrationComponent
  ],
  imports: [
    BrowserModule, HttpClientModule, AppRoutingModule, AngularFontAwesomeModule, FormsModule, ReactiveFormsModule
  ],
  providers: [
    ContactService,
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
