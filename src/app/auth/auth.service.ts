import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AppSettings} from '../shared/AppSettings';
import {Observable} from 'rxjs';

@Injectable()
export class AuthService {

  private token: string;
  loggedUsername: string;

  constructor(private httpClient: HttpClient) {
  }

  login(username: string, password: string): Observable<any> {

    return new Observable(subscriber => {
      this.httpClient.post<any>(AppSettings.SERVER_ENDPOINT + '/login', {username: username, password: password}).subscribe(data => {
        this.token = data.token;
        this.loggedUsername = username;
        subscriber.next();
      }, err => {
        subscriber.error(err);
      });
    });
  }

  signup(username: string, password: string): Observable<any> {
    return this.httpClient.post(AppSettings.SERVER_ENDPOINT + '/signup', {username: username, password: password});
  }

  logout() {
    this.token = null;
    this.loggedUsername = null;
  }

  isAuthenticated() {
    return this.token != null;
  }

  getToken(): string {
    return this.token;
  }
}
