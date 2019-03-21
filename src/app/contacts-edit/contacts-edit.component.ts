import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ContactsService} from '../contacts.service';

@Component({
  selector: 'app-contacts-edit',
  templateUrl: './contacts-edit.component.html',
  styleUrls: ['./contacts-edit.component.css']
})
export class ContactsEditComponent implements OnInit {

  form: FormGroup;
  contact: any = {};
  message: string;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private contactsService: ContactsService,
              private fb: FormBuilder) {
    this.createForm();
  }

  createForm() {
    this.form = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      phone_number: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.contactsService.editContact(params['id']).subscribe(res => {
        this.contact = res;
      });
    });
  }

  updateContact(name, email, phone_number) {
    this.route.params.subscribe(params => {
      this.contactsService.updateContact(name, email, phone_number, params['id'])
        .subscribe(res => {
          this.router.navigate(['contacts']);
          this.message = 'Contact successfully updated';
        });
    });
  }
}
