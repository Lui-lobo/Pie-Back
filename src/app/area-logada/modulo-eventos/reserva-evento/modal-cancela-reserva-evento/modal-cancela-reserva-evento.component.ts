import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal-cancela-reserva-evento',
  templateUrl: './modal-cancela-reserva-evento.component.html',
  styleUrls: ['./modal-cancela-reserva-evento.component.scss']
})
export class ModalCancelaReservaEventoComponent implements OnInit {

  @Input() dadosModal :any = {}

  constructor() { }

  ngOnInit() {
  }

  cancelarReserva(){
    //implementar logica
  }
}
