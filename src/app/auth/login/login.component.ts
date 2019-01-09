import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {AuthService} from '../auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  error: boolean;
  errorMessage: string;

  constructor(private authService: AuthService, private router: Router) {
  }

  ngOnInit() {
    this.errorMessage = 'Username or password invalid';
  }

  onLogin(form: NgForm) {
    const username = form.value.username;
    const password = form.value.password;
    this.authService.login(username, password).subscribe(data => {

      this.router.navigate(['/addressbook']);
    }, error => {
      this.error = true;
    });
  }
}
