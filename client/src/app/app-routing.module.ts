import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginPageComponent } from './components/login-page/login-page.component';
import { ContactsPageComponent } from './components/contacts-page/contacts-page.component';
import { InfoPageComponent } from './components/info-page/info-page.component';

const routes: Routes = [
  {path: '', component: LoginPageComponent},
  {path: 'contacts', component: ContactsPageComponent},
  {path: 'info', component: InfoPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
