import { Injectable, Injector } from '@angular/core';
import { HttpHandler, HttpInterceptor, HttpRequest, HttpEvent } from '@angular/common/http';
import { Observable, observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor() { 

 
  }

  

  private acessToken: any = localStorage.getItem('Token')


  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    if(req.headers.get('skip')) {
      return next.handle(req);
    }
    //let Token = JSON.parse(this.acessToken.token)
    let tokeninzedReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${this.acessToken}`
      }
    })
    return next.handle(tokeninzedReq)
  }
}