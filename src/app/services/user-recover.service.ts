import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit, Inject } from '@angular/core';
import { param } from 'jquery';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ActivatedRoute } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class UserRecoverService {

  //UserLogin:string;
  Token: string;

  constructor(@Inject('UserLogin') private UserLogin: string,private http: HttpClient, private route: ActivatedRoute ) { 

  }

  ngOnInit():void {
    this.route.queryParams.subscribe(params => {
      console.log(params)
      //this.UserLogin = params['UserLogin']
    })
 
  }
  

  private baseApiUrl = environment.baseApiUrl;
  private apiUrl = `${this.baseApiUrl}api/recoverPass`
  private apiUrlReset = `${this.baseApiUrl}api/recoverPassEmail`
  

  recoverUser(formData: FormData): Observable<FormData> {
    return this.http.post<FormData>(this.apiUrl, formData, {headers:{skip:'true'}})
  }

  resetPass(formData: FormData): Observable<FormData> {
    return this.http.post<FormData>(this.apiUrlReset, formData,  {headers:{skip:'true'}, params:{UserLogin:this.UserLogin, Token:this.Token}})
  }
}
