import { HttpClient, HttpHeaders, HttpStatusCode } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { error } from 'jquery';
import { catchError, Observable, pipe } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UserLoginService {

  constructor(private http: HttpClient) { 

  }

  private baseApiUrl = environment.baseApiUrl;
  private apiUrl = `${this.baseApiUrl}api/login`

  authenticateUser(formData: FormData): Observable<FormData> {
    return this.http.post<FormData>(this.apiUrl, formData, {headers:{skip: 'true'}})
  
  }
}
