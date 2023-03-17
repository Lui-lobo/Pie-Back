import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserLoginService {

  constructor(private http: HttpClient) { 

    let error = new Error()
  }

  private baseApiUrl = environment.baseApiUrl;
  private apiUrl = `${this.baseApiUrl}api/login`

  authenticateUser(formData: FormData): Observable<FormData> {
    return this.http.post<FormData>(this.apiUrl, formData, {headers:{skip:'true'}})
    
  }
}
