import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { User } from '../auth/user.interface';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserRegisterService {
  private baseApiUrl = environment.baseApiUrl;
  private apiUrl = `${this.baseApiUrl}api/register`

  constructor(private http: HttpClient) { }

  createUser(formData: FormData): Observable<FormData> {
    return this.http.post<FormData>(this.apiUrl, formData)
  }
}
