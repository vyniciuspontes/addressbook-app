import { Component, OnInit } from '@angular/core';
import {Contact} from '../shared/contact.model';
import {ContactService} from '../shared/addressbook.service';

@Component({
  selector: 'app-address-details',
  templateUrl: './address-details.component.html',
  styleUrls: ['./address-details.component.css']
})
export class AddressDetailsComponent implements OnInit {

  contact: Contact;

  constructor(private contactService: ContactService) { }

  ngOnInit() {
    this.contactService.currentContactChanged.subscribe((contact: Contact) => {
      this.contact = contact;
    });
  }

}
