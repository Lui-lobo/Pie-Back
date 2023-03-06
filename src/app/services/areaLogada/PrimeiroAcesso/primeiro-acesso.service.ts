import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PrimeiroAcessoService {
  
  private acessToken = localStorage.getItem('token')

  private baseApiUrl = environment.baseApiUrl;
  private apiUrlDocuments = `${this.baseApiUrl}api/documentos`
  private apiUrlInstituicao = `${this.baseApiUrl}api/instituicao`
  private apiUrlContatos = `${this.baseApiUrl}api/contatos`

  constructor(private http: HttpClient) { }

  createInstituicao(formData: FormData): Observable<FormData> {
    return this.http.post<FormData>(this.apiUrlInstituicao, formData)
  }

  createDocument(formData: FormData): Observable<FormData> {
    return this.http.post<FormData>(this.apiUrlDocuments, formData)
  }

  createContato(formData: FormData): Observable<FormData> {
    return this.http.post<FormData>(this.apiUrlContatos, formData)
  }
}
