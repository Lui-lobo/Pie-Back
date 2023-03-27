import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EncontrarUsuarioService {

  private baseApiUrl = environment.baseApiUrl
  private acessToken = localStorage.getItem('token')
  private apiUrl = `${this.baseApiUrl}api/register`

  constructor(private http: HttpClient) { }

  findUser() {
    return this.http.get(this.apiUrl)
  }

}
