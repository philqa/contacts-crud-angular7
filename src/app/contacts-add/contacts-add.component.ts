import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { ContactsService } from '../contacts.service';

@Component({
  selector: 'app-contacts-add',
  templateUrl: './contacts-add.component.html',
  styleUrls: ['./contacts-add.component.css']
})
export class ContactsAddComponent implements OnInit {

  form: FormGroup;
  message: string;

  constructor(private fb: FormBuilder, private contactsService: ContactsService) {
    this.createForm();
  }

  createForm() {
    this.form = this.fb.group({
      name: ['', Validators.required ],
      email: ['', Validators.required ],
      phone_number: ['', Validators.required ]
    });
  }

  addContacts(name, email, phone_number) {
    this.contactsService.addContact(name, email, phone_number)
      .subscribe(res => {
          this.message = 'Contact successfully added';
          this.form.reset();
        }
      );
  }

  ngOnInit() {
  }

}
