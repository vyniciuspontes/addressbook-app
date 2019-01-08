import {Component, Input, OnInit} from '@angular/core';
import {Contact} from '../shared/contact.model';
import {ContactService} from '../shared/addressbook.service';

@Component({
  selector: 'app-address-list',
  templateUrl: './address-list.component.html',
  styleUrls: ['./address-list.component.css']
})
export class AddressListComponent implements OnInit {

  contacts: Contact[];

  constructor(private contactService: ContactService) {
  }

  ngOnInit() {
    this.contactService.contactsChanged.subscribe((contacts: Contact[]) => {
      this.contacts = contacts;
    });

    this.contactService.retrieveContacts();

  }


}
