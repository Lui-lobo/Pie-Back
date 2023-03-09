import { Injectable, Injector } from '@angular/core';
import { HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor() { }

  private acessToken: any = localStorage.getItem('Token')


  intercept(req: HttpRequest<any>, next: HttpHandler) {

    if(req.url.includes('/auth/')) {
      return next.handle(req)
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