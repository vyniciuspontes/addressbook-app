import {Injectable, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams, HttpRequest} from '@angular/common/http';
import 'rxjs/Rx';

import {Contact} from './contact.model';
import {ContactService} from './addressbook.service';

@Injectable()
export class DataStorageService implements OnInit {
  constructor(private httpClient: HttpClient,
              private contactService: ContactService) {
  }

  saveContacts() {

    const req = new HttpRequest('PUT',
      'https://ng-recipe-book-3adbb.firebaseio.com/recipes.json',
        this.contactService.getContacts(), {reportProgress: true});
    return this.httpClient.request(req);
  }

  getContacts() {
    console.log('getting contacts');
    /*this.httpClient.get('http://localhost:8080/users/current/contacts')
      .subscribe(data => console.log(data));*/
    this.httpClient.get<Contact[]>('http://localhost:8080/users/current/contacts', {
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
    )
      .subscribe(
        (contacts: Contact[]) => {
          console.log(contacts);
          this.contactService.setRecipes(contacts);
        }
      );
  }

  ngOnInit(): void {
    this.getContacts();
  }
}
