import {AddressbookComponent} from './addressbook/addressbook.component';
import {AddressStartComponent} from './addressbook/address-start/address-start.component';
import {AddressEditComponent} from './addressbook/address-edit/address-edit.component';
import {AddressDetailsComponent} from './addressbook/address-details/address-details.component';
import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {SignupComponent} from './auth/signup/signup.component';
import {LoginComponent} from './auth/login/login.component';
import {AuthGuard} from './auth/auth-guard.service';

const appRoutes: Routes = [
  {path: '', redirectTo: '/addressbook', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: SignupComponent},
  {
    path: 'addressbook', component: AddressbookComponent, canActivate: [AuthGuard], canActivateChild: [AuthGuard],
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
