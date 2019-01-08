import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {AddressbookComponent} from './addressbook/addressbook.component';
import {AddressListComponent} from './addressbook/address-list/address-list.component';
import {AddressDetailsComponent} from './addressbook/address-details/address-details.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {AuthInterceptor} from './addressbook/shared/auth.interceptor';
import {DataStorageService} from './addressbook/shared/data-storage.service';
import {ContactService} from './addressbook/shared/addressbook.service';

@NgModule({
  declarations: [
    AppComponent,
    AddressbookComponent,
    AddressListComponent,
    AddressDetailsComponent
  ],
  imports: [
    BrowserModule, HttpClientModule
  ],
  providers: [
    ContactService,
    DataStorageService,
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
