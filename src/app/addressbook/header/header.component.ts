import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


  username: string;

  constructor(private authService: AuthService, private router: Router) {
  }


  ngOnInit() {
    this.username = this.authService.loggedUsername;
  }

  onLogout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

}
