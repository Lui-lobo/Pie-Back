import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CadastroEventoReservadoAssentoLivre } from '../../compartilhado/cadastro-evento.model';

@Component({
  selector: 'app-lista-cadastro-evento',
  templateUrl: './lista-cadastro-evento.component.html',
  styleUrls: ['./lista-cadastro-evento.component.scss']
})


export class ListaCadastroEventoComponent implements OnInit {


  @Output() enviaDadosAoFormularioEvento = new EventEmitter()
  @Output() enviaDadosAoLayoutEvento = new EventEmitter()


  protected listadeEventos : Array<CadastroEventoReservadoAssentoLivre> = [

    {
      idEvento: 0,
      nomeEvento :'Evento 1',
      dataHoraEvento:'01/01/0001 00:00',
      localEvento:'Auditório 1',
      descricao: "Descricao Evento 1",
      qtdVagas : 3000,
      limiteReservaPorUsuario:3,
      necessidadeDeReserva : true,
      qtdFileiras : 12,
      qtdAssentosPorFileira : 15,
      qtdReservas: 10,
      status : 'inativo',
      dataHoraCriacaoEvento  : '01/01/0001 00:00',
      nomeUsuarioCriadorEvento  :  "Clarisse",
      dataHoraUltimaAlteracao  :  "",
      nomeUsuarioUltimaAlteracao  : ""},
      {
        idEvento: 1,
        nomeEvento :'Evento 2',
        dataHoraEvento:'01/01/0001 00:00',
        localEvento:'Auditório 1',
        descricao: "Descricao Evento 2",
        qtdVagas : 3000,
        limiteReservaPorUsuario:3,
        necessidadeDeReserva : false,
        qtdFileiras : 0,
        qtdAssentosPorFileira : 0,
        qtdReservas: 0,
        status : 'ativo',
        dataHoraCriacaoEvento  : "",
        nomeUsuarioCriadorEvento  :  "Sheila",
        dataHoraUltimaAlteracao  :  "",
        nomeUsuarioUltimaAlteracao  : ""},
        {
          idEvento: 2,
          nomeEvento :'Evento 3',
          dataHoraEvento:'01/01/0001 00:00',
          localEvento:'Auditório 1',
          descricao: "Descricao Evento 3",
          qtdVagas : 3000,
          limiteReservaPorUsuario:3,
          necessidadeDeReserva : false,
          qtdFileiras : 0,
          qtdAssentosPorFileira : 0,
          qtdReservas: 0,
          status : 'ativo',
          dataHoraCriacaoEvento  : '01/01/0001 00:00',
          nomeUsuarioCriadorEvento  :  "Lorrane",
          dataHoraUltimaAlteracao  :  "",
          nomeUsuarioUltimaAlteracao  : ""},
          {
            idEvento: 3,
            nomeEvento :'Evento 4',
            dataHoraEvento:'01/01/0001 00:00',
            localEvento:'Auditório 1',
            descricao: "Descricao Evento 4",
            qtdVagas : 3000,
            limiteReservaPorUsuario:3,
            necessidadeDeReserva : false,
            qtdFileiras : 0,
            qtdAssentosPorFileira : 0,
            qtdReservas: 0,
            status : 'inativo',
            dataHoraCriacaoEvento  : '01/01/0001 00:00',
            nomeUsuarioCriadorEvento  :  "Zeca",
            dataHoraUltimaAlteracao  :  "",
            nomeUsuarioUltimaAlteracao  : ""},

    ]

  temEventosParaExibir = false

  constructor() { }

  ngOnInit(): void {

  }


  carregaFormularioBtnAlterar(index:number){

    this.listadeEventos.forEach((elemento)=>{
      if(elemento.idEvento == index){
        this.enviaDadosAoFormularioEvento.emit({
          idEvento: elemento.idEvento,
          nomeEvento: elemento.nomeEvento,
          dataHora: elemento.dataHoraEvento,
          local: elemento.localEvento,
          descricao: elemento.descricao,
          qtdVagas:elemento.qtdVagas,
          limiteReservaPorUsuario:elemento.limiteReservaPorUsuario,
          necessidadeDeReserva:elemento.necessidadeDeReserva.toString(),
          qtdFileiras:elemento.qtdFileiras,
          qtdAssentosPorFileira: elemento.qtdAssentosPorFileira,
          status: elemento.status
        })
      }
    })

  }

  carregarLayoutBtnAlterar(index:number){

    this.listadeEventos.forEach((elemento)=>{
      if(elemento.idEvento == index){

          this.enviaDadosAoLayoutEvento.emit({
            qtdFileiras:elemento.qtdFileiras,
            qtdAssentosPorFileira: elemento.qtdAssentosPorFileira,
          })

      }
    })

  }

}
