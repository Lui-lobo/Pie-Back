import { Injectable, Injector } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor() { }

  private acessToken: any = localStorage.getItem('token')

  intercept(req: any, next:any) {

    let token = JSON.parse(this.acessToken).token
    let tokeninzedReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    })
    return next.handle(tokeninzedReq)
  }
}
