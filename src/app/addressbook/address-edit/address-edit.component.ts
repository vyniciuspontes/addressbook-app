import {Component, OnDestroy, OnInit} from '@angular/core';
import {ContactService} from '../shared/addressbook.service';
import {Subscription} from 'rxjs';
import {FormGroup} from '@angular/forms';
import {ActivatedRoute, Params, Router} from '@angular/router';

@Component({
  selector: 'app-address-edit',
  templateUrl: './address-edit.component.html',
  styleUrls: ['./address-edit.component.css']
})
export class AddressEditComponent implements OnInit, OnDestroy {

  id: number;
  editMode = false;
  recipeForm: FormGroup;
  subscription: Subscription;

  constructor(private route: ActivatedRoute, private contactService: ContactService, private router: Router) {
  }

  ngOnInit() {

    this.subscription = this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.editMode = params['id'] != null;
      this.initForm();
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  initForm() {

  }

  onCancel() {
    this.router.navigate(['../'], {relativeTo: this.route});
  }

}
