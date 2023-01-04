import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reserva-evento',
  templateUrl: './reserva-evento.component.html',
  styleUrls: ['./reserva-evento.component.scss']
})
export class ReservaEventoComponent implements OnInit {

  dadosModal:object = {}
  listaNovasReservas: [] = []
  constructor() { }

  ngOnInit(): void {
  }

  recebeDadosBtnModal(dadosEvento:object){
    this.dadosModal = dadosEvento
  }

  recebeLimpezaMemoriaBtnModal(dadosEvento:[]){
    this.listaNovasReservas = dadosEvento
  }
}
