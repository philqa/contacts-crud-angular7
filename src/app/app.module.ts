import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';

import { AppComponent } from './app.component';
import { ContactsAddComponent } from './contacts-add/contacts-add.component';
import { ContactsGetComponent } from './contacts-get/contacts-get.component';
import { ContactsEditComponent } from './contacts-edit/contacts-edit.component';

import { ContactsService } from './contacts.service';

@NgModule({
  declarations: [
    AppComponent,
    ContactsAddComponent,
    ContactsGetComponent,
    ContactsEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SlimLoadingBarModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ ContactsService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
