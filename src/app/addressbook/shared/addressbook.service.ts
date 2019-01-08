import {Injectable, OnInit} from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {Contact} from './contact.model';
import {HttpClient} from '@angular/common/http';
import 'rxjs/Rx';

@Injectable()
export class ContactService implements OnInit {

  contactsChanged = new Subject<Contact[]>();

  private contacts: Contact[] = [];

  constructor(private httpClient: HttpClient) {
  }

  setContacts(contacts: Contact[]) {
    this.contacts = contacts;
    this.contactsChanged.next(this.contacts);
  }

  retrieveContacts() {
    console.log("Getting contacts");
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
    return this.contacts.find((currentValue) => {
      return currentValue.id === id;
    });
  }

  ngOnInit(): void {
  }


}
