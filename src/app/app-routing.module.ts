import {AddressbookComponent} from './addressbook/addressbook.component';
import {AddressStartComponent} from './addressbook/address-start/address-start.component';
import {AddressEditComponent} from './addressbook/address-edit/address-edit.component';
import {AddressDetailsComponent} from './addressbook/address-details/address-details.component';
import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {RegistrationComponent} from './registration/registration.component';
import {LoginComponent} from './login/login.component';

const appRoutes: Routes = [
  {path: '', redirectTo: '/addressbook', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'registration', component: RegistrationComponent},
  {
    path: 'addressbook', component: AddressbookComponent,
    children: [
      {path: '', component: AddressStartComponent},
      {path: 'new', component: AddressEditComponent},
      {path: ':id', component: AddressDetailsComponent},
      {path: ':id/edit', component: AddressEditComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
