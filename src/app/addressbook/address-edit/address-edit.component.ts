import {Component, OnDestroy, OnInit} from '@angular/core';
import {ContactService} from '../../shared/addressbook.service';
import {Subscription} from 'rxjs';
import {FormArray, FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Params, Router} from '@angular/router';

@Component({
  selector: 'app-address-edit',
  templateUrl: './address-edit.component.html',
  styleUrls: ['./address-edit.component.css']
})
export class AddressEditComponent implements OnInit, OnDestroy {

  id: string;
  editMode = false;
  contactForm: FormGroup;
  routeSubscription: Subscription;
  contactsSubscription: Subscription;

  constructor(private route: ActivatedRoute, private contactService: ContactService, private router: Router) {
  }

  ngOnInit() {

    this.routeSubscription = this.route.params.subscribe((params: Params) => {
      this.id = params['id'];
      this.editMode = params['id'] != null;
      this.initForm();
    });

    this.contactsSubscription = this.contactService.contactsChanged.subscribe(() => {
      this.initForm();
    });


  }

  ngOnDestroy() {
    this.routeSubscription.unsubscribe();
    this.contactsSubscription.unsubscribe();
  }

  initForm() {

    let firstName = '';
    let lastName = '';
    let cpf = '';
    let email = '';
    let phone = '';
    let bornDate = null;
    const addresses = new FormArray([]);

    if (this.editMode) {
      const contact = this.contactService.getContact(this.id);

      if (contact) {

        firstName = contact.firstName;
        lastName = contact.lastName;
        cpf = contact.cpf;
        bornDate = contact.bornDate;
        email = contact.email;
        phone = contact.phone;

        if (contact['addresses']) {
          for (const address of contact.addresses) {
            addresses.push(
              new FormGroup({
                'publicPlace': new FormControl(address.publicPlace, Validators.required),
                'number': new FormControl(address.number),
                'complement': new FormControl(address.complement),
                'district': new FormControl(address.district, Validators.required),
                'postalCode': new FormControl(address.postalCode, Validators.required),
                'city': new FormControl(address.city, Validators.required),
                'state': new FormControl(address.state, Validators.required)
              })
            );
          }
        }
      }
    }

    this.contactForm = new FormGroup({
      'firstName': new FormControl(firstName, Validators.required),
      'lastName': new FormControl(lastName, Validators.required),
      'email': new FormControl(email, Validators.email),
      'cpf': new FormControl(cpf, [Validators.required, Validators.maxLength(11), Validators.minLength(11)]),
      'phone': new FormControl(phone, [Validators.maxLength(11), Validators.minLength(11)]),
      'bornDate': new FormControl(bornDate, Validators.required),
      'addresses': addresses
    });
  }

  get addressesControls() {
    return (<FormArray>this.contactForm.get('addresses')).controls;
  }

  onCancel() {
    this.router.navigate(['../'], {relativeTo: this.route});
  }

  onSubmit() {
    if (this.editMode) {
      this.contactService.updateContact(this.contactForm.value, this.id);
    } else {
      this.contactService.saveContact(this.contactForm.value);
    }

    this.onCancel();
  }

  onAddAddress() {
    (<FormArray>this.contactForm.get('addresses')).push(
      new FormGroup({
        'publicPlace': new FormControl(null, Validators.required),
        'number': new FormControl(null, Validators.pattern(/^[1-9]+[0-9]*$/)),
        'complement': new FormControl(null),
        'district': new FormControl(null, Validators.required),
        'postalCode': new FormControl(null, Validators.required),
        'city': new FormControl(null, Validators.required),
        'state': new FormControl(null, Validators.required)
      })
    );
  }

  onRemoveAddress(i: number) {
    (<FormArray>this.contactForm.get('addresses')).removeAt(i);
  }
}
