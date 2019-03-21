import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactsAddComponent } from './contacts-add/contacts-add.component';
import { ContactsEditComponent } from './contacts-edit/contacts-edit.component';
import { ContactsGetComponent } from './contacts-get/contacts-get.component';

const routes: Routes = [
  {
    path: 'contacts/create',
    component: ContactsAddComponent
  },
  {
    path: 'contacts/edit/:id',
    component: ContactsEditComponent
  },
  {
    path: 'contacts',
    component: ContactsGetComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
