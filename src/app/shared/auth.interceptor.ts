import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Injectable} from '@angular/core';
import {AuthService} from '../auth/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    req = req.clone({ headers: req.headers.set('Accept', 'application/json') });
    if (this.authService.getToken()) {
        req = req.clone({
        headers: req.headers.set('Authorization',
          'Bearer ' + this.authService.getToken())
      });
    }
    return next.handle(req);
  }
}
