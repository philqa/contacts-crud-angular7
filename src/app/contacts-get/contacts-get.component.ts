import { Component, OnInit } from '@angular/core';
import Contact from '../Contact';
import { ContactsService } from '../contacts.service';

@Component({
  selector: 'app-contacts-get',
  templateUrl: './contacts-get.component.html',
  styleUrls: ['./contacts-get.component.css']
})
export class ContactsGetComponent implements OnInit {

  contacts: Contact[];
  message: string;

  constructor(private contactsService: ContactsService) { }

  ngOnInit() {
    this.contactsService
      .getContacts()
      .subscribe((data: Contact[]) => {
        this.contacts = data;
    });
  }

  deleteContacts(id) {
    this.contactsService.deleteContact(id).subscribe(res => {
      this.contactsService
        .getContacts()
        .subscribe((data: Contact[]) => {
          this.contacts = data;
        });
      this.message = 'Contact successfully deleted';
    });
  }

}
