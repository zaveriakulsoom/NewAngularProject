import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class DruginterceptorInterceptor implements HttpInterceptor {

  constructor() {}
  

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if(req.url.endsWith("/authenticate")){
      return next.handle(req);
    }
    let token = (localStorage.getItem('jwtToken'))!
    let tokenreq = req.clone({
      setHeaders : {
        Authorization : "Bearer " +token
      }
    });
    console.log(tokenreq);
    return next.handle(tokenreq);
    
        
  }

}
