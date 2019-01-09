import {Component, OnInit} from '@angular/core';
import {Contact} from '../shared/contact.model';
import {ContactService} from '../shared/addressbook.service';
import {Observable, Subscription} from 'rxjs';
import {ActivatedRoute, Params, Router} from '@angular/router';

@Component({
  selector: 'app-address-details',
  templateUrl: './address-details.component.html',
  styleUrls: ['./address-details.component.css']
})
export class AddressDetailsComponent implements OnInit {

  contact: Contact;

  id: string;
  subscription: Subscription;

  constructor(private route: ActivatedRoute, private contactService: ContactService, private router: Router) {
  }

  ngOnInit() {

    this.subscription = this.route.params.subscribe((params: Params) => {
      this.id = params['id'];
      this.setContact(this.id);
    });

    this.contactService.contactsChanged.subscribe(() => {
      this.setContact(this.id);
    });
  }

  setContact(id: string) {
    this.contact = this.contactService.getContact(id);
  }


  onDeleteContact() {
    this.contactService.deleteContact(this.id);
    this.router.navigate(['/addressbook']);
  }
}
