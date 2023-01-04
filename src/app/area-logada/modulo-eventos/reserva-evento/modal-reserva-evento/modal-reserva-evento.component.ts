import { CadastroEventoReservadoAssentoLivre } from './../../compartilhado/cadastro-evento.model';
import { Component, Input, OnInit, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal-reserva-evento',
  templateUrl: './modal-reserva-evento.component.html',
  styleUrls: ['./modal-reserva-evento.component.scss']
})
export class ModalReservaEventoComponent implements OnChanges {

  @Input() dadosModal :any = {}
  @Input() listaNovasReservas:[] = []

  protected temNecessidadeDeReserva : boolean = false

  constructor() { }


  ngOnChanges(changes: SimpleChanges): void {
    if(changes['dadosModal']){
      this.temNecessidadeDeReserva = this.dadosModal.necessidadeDeReserva
    };
  }


}
