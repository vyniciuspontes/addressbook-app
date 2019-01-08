import {Injectable, OnInit} from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {Contact} from './contact.model';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class ContactService implements OnInit {
  recipesChanged = new Subject<Contact[]>();

  currentContactChanged = new Subject<Contact>();

  private contacts: Contact[] = [];

  currentContact: Contact;

  constructor(private httpClient: HttpClient) {
  }

  ngOnInit(): void {
  }

  setCurrentContact(contact: Contact) {
    this.currentContactChanged.next(contact);
  }

  setRecipes(recipes: Contact[]) {
    this.contacts = recipes;
    this.recipesChanged.next(this.contacts.slice());
  }

  getContacts(): Observable<Contact[]> {

    console.log('retrieving');
    return this.httpClient.get<Contact[]>('http://localhost:8080/api/users/current/contacts', {
      observe: 'body',
      responseType: 'json'
    }).map(
      (contacts) => {
        console.log(contacts);
        for (const contact of contacts) {
          if (!contact['addresses']) {
            contact['addresses'] = [];
          }
        }
        return contacts;
      }
    );
  }


}
