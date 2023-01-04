import { ServicosCompartilhadosModuloEventosService } from './../../compartilhado/servicos-compartilhados-modulo-eventos.service';
import { ListaReservasEvento} from './../../compartilhado/lista-reservas-evento.model';
import { Component,Input,OnInit,OnChanges,SimpleChanges,} from '@angular/core';
import * as $ from 'jquery';


@Component({
  selector: 'app-layout-reserva-evento',
  templateUrl: './layout-reserva-evento.component.html',
  styleUrls: ['./layout-reserva-evento.component.scss']
})
export class LayoutReservaEventoComponent implements OnInit, OnChanges {

  @Input() dadosModal: any = {}
  @Input() listaNovasReservas: ListaReservasEvento[] = []

  fileiras: string[] = []
  assentos: number[] = []

  assentosHtml: NodeListOf < any > = document.querySelectorAll('[data-idassento]')

  //A LISTA DE RESERVAS TEM QUE SER DINAMICO E VIR DO BACKEND
  listaReservados: ListaReservasEvento[] = [{
      idEvento: 0,
      nomeEvento: 'Evento 1',
      idUsuario: '0',
      nomeUsuario: 'João',
      idAssentoReservado: "H2",
      dataHoraReserva: '00/00/000 00:00'
    },
    {
      idEvento: 0,
      nomeEvento: 'Evento 2',
      idUsuario: '0',
      nomeUsuario: 'João',
      idAssentoReservado: "J3",
      dataHoraReserva: '00/00/000 00:00'
    },
    {
      idEvento: 0,
      nomeEvento: 'Evento 3',
      idUsuario: '0',
      nomeUsuario: 'João',
      idAssentoReservado: "A8",
      dataHoraReserva: '00/00/000 00:00'
    },
    {
      idEvento: 0,
      nomeEvento: 'Evento 4',
      idUsuario: '0',
      nomeUsuario: 'João',
      idAssentoReservado: "C1",
      dataHoraReserva: '00/00/000 00:00'
    },
    {
      idEvento: 0,
      nomeEvento: 'Evento 1',
      idUsuario: '0',
      nomeUsuario: 'João',
      idAssentoReservado: "K2",
      dataHoraReserva: '00/00/000 00:00'
    },
    {
      idEvento: 0,
      nomeEvento: 'Evento 2',
      idUsuario: '0',
      nomeUsuario: 'João',
      idAssentoReservado: "D3",
      dataHoraReserva: '00/00/000 00:00'
    },
    {
      idEvento: 0,
      nomeEvento: 'Evento 3',
      idUsuario: '0',
      nomeUsuario: 'João',
      idAssentoReservado: "B8",
      dataHoraReserva: '00/00/000 00:00'
    },
    {
      idEvento: 0,
      nomeEvento: 'Evento 4',
      idUsuario: '0',
      nomeUsuario: 'João',
      idAssentoReservado: "I1",
      dataHoraReserva: '00/00/000 00:00'
    },
  ]


  assentosJaReservados: string[] = []

  constructor(private ServicosCompartilhadosModuloEventosService: ServicosCompartilhadosModuloEventosService) {}

  ngOnInit(): void {
    $(document).ready(() => {
      this.assentosHtml = document.querySelectorAll('[data-idassento]')
      this.ativaEventoAssentos(this.dadosModal.idEvento)
    })

  }


  ngOnChanges(changes: SimpleChanges): void {
    if (changes['dadosModal']){

      //AQUI - QUANDO O BACKEND ESTIVER PRONTO, DEVERAH FAZER UMA CHAMADA INFORMANDO O ID DO EVENTO PARA ATUALIZAR A LISTA DE RESERVAS

      const retornoFileirasAssentos = this.ServicosCompartilhadosModuloEventosService.atualizaFileirasAssentosArrayParaMontagemLayout(this.dadosModal)
      this.fileiras = retornoFileirasAssentos.fileiras
      this.assentos = retornoFileirasAssentos.assentos

      this.ativaEventoAssentos(this.dadosModal.idEvento)
    }

  }


  ativaEventoAssentos(idEvento: number) {
    this.listaNovasReservas = []
    this.assentosJaReservados = []

    this.listaReservados.forEach((elemento) => {
      this.assentosJaReservados.push(elemento.idAssentoReservado)
    })

    this.assentosHtml.forEach((elemento) => {
      if (this.assentosJaReservados.includes(elemento.dataset.idassento)) {
        elemento.classList.add('bg-danger')
      } else {
        elemento.addEventListener('click', (evento: any) => {

          if(this.listaNovasReservas.includes(elemento.dataset.idassento)){
            elemento.classList.remove('bg-success')
            this.listaNovasReservas = this.listaNovasReservas.filter(item=> item!=elemento.dataset.idassento)
          }else{
            evento.preventDefault()
            elemento.classList.add('bg-success')
            this.listaNovasReservas.push(elemento.dataset.idassento)
             console.log(this.listaNovasReservas)

          }

        })

      }
    })
  }

  limpaMemoria(){
    this.listaNovasReservas = []
  }

}
