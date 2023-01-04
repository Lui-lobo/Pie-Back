import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicosCompartilhadosService {

  constructor() { }

  validaValorIgualMenorQueZero(valor:number){
    if(valor <= 0){
      return true
    } else {
      return false
    }
  }

}
