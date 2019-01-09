import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';
import {Contact} from './contact.model';
import {HttpClient} from '@angular/common/http';
import 'rxjs/Rx';

@Injectable()
export class ContactService {

  contactsChanged = new Subject<Contact[]>();

  private contacts: Contact[] = undefined;

  constructor(private httpClient: HttpClient) {
  }

  setContacts(contacts: Contact[]) {
    this.contacts = contacts;
    this.contactsChanged.next(this.contacts);
  }

  saveContact(contact: Contact) {

    this.httpClient.post<any>('http://localhost:8080/api/users/current/contacts', contact).subscribe((object: any) => {
      console.log(object);
      this.retrieveContacts();
    });
  }

  deleteContact(id: string) {
    this.httpClient.delete('http://localhost:8080/api/users/current/contacts/' + id).subscribe((object: any) => {
      console.log(object);
      this.retrieveContacts();
    });
  }

  updateContact(contact: Contact, id: string) {

    this.httpClient.put<any>('http://localhost:8080/api/users/current/contacts/' + id, contact).subscribe((object: any) => {
      console.log(object);
      this.retrieveContacts();
    });
  }

  retrieveContacts() {
    console.log('Getting contacts');
    this.httpClient.get<Contact[]>('http://localhost:8080/api/users/current/contacts', {
      observe: 'body',
      responseType: 'json'
    }).map(
      (contacts) => {
        for (const contact of contacts) {
          if (!contact['addresses']) {
            contact['addresses'] = [];
          }
        }
        return contacts;
      }
    ).subscribe((contacts: Contact[]) => {
      this.setContacts(contacts);
    });
  }

  getContact(id: string) {

    return this.contacts ? this.contacts.find((currentValue) => {
      return currentValue.id === id;
    }) : undefined;
  }

}
