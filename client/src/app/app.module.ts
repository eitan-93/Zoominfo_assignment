import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { ContactsPageComponent } from './components/contacts-page/contacts-page.component';
import { InfoPageComponent } from './components/info-page/info-page.component';

import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HttpClientModule } from '@angular/common/http';
import { MatGridListModule, } from '@angular/material/grid-list'; 
import { MatListModule } from '@angular/material/list'; 
import { MatCardModule } from '@angular/material/card'; 
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { MatPaginatorModule } from '@angular/material/paginator';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    ContactsPageComponent,
    InfoPageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MatGridListModule,
    MatListModule,
    Ng2SearchPipeModule,
    MatPaginatorModule,
    MatCardModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
