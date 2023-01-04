import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicosCompartilhadosModuloEventosService {

constructor() { }


atualizaFileirasAssentosArrayParaMontagemLayout(dadosLayout: any) {

  const alfabeto = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

  const fileiras = []
  const assentos = []

  for (let index = 0; index < dadosLayout.qtdFileiras; index++) {
    fileiras.push(alfabeto[index])
  }

  for (let index = 1; index <= dadosLayout.qtdAssentosPorFileira; index++) {
    assentos.push(index)
  }

  return {fileiras:fileiras, assentos:assentos}
}

}
