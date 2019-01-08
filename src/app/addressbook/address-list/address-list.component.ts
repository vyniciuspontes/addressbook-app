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
    this.contactService.recipesChanged.subscribe((contacts: Contact[]) => {
      this.contacts = contacts;
    });
    this.contactService.getContacts().subscribe(
      (contacts: Contact[]) => {
        console.log(contacts);
        this.contacts = contacts;
      }
    );
  }

  onContactClick(contact: Contact){
    this.contactService.setCurrentContact(contact);
  }


}
