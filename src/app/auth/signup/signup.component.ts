import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {AuthService} from '../auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  error = false;
  errorMessage: string;

  constructor(private authService: AuthService, private router: Router) {
  }

  ngOnInit() {
    this.error = false;
    this.errorMessage = '';
  }

  onSignUp(form: NgForm) {
    const username = form.value.username;
    const password = form.value.password;
    this.authService.signup(username, password).subscribe(data => {
      this.router.navigate(['/login']);
    }, error => {
      this.error = true;
      this.errorMessage = error.error.message;
    });
  }
}
