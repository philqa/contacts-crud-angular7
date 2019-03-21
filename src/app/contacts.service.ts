import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  uri = 'http://localhost:4000/contacts';

  constructor(private http: HttpClient) {
  }

  addContact(name, email, phone_number) {
    const contact = {
      name: name,
      email: email,
      phone_number: phone_number
    };
    return this.http.post(`${this.uri}/add`, contact);
  }

  getContacts() {
    return this
      .http
      .get(`${this.uri}`);
  }

  editContact(id) {
    return this
      .http
      .get(`${this.uri}/edit/${id}`);
  }

  updateContact(name, email, phone_number, id) {
    const contact = {
      name: name,
      email: email,
      phone_number: phone_number
    };
    return this
      .http
      .post(`${this.uri}/update/${id}`, contact);
  }

  deleteContact(id) {
    return this
      .http
      .get(`${this.uri}/delete/${id}`);
  }
}
