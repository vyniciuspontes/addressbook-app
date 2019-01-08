import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Injectable} from '@angular/core';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor() {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('Intercepted!', req);
    const copiedReq = req.clone({
      headers: req.headers.set('Authorization',
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJwb250ZXMudnluaWNpdXNAZ21haWwuY29tIiwiZXhwIjoxNTQ3Nzg1OTMwfQ.BaNM7VRBS9hBlITl0TbHSCMfV_RfJC_mqYMGCtPAp74')
    });
    return next.handle(copiedReq);
  }
}
