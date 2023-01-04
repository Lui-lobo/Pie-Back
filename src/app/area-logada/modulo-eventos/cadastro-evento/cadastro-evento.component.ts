import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-cadastro-evento',
  templateUrl: './cadastro-evento.component.html',
  styleUrls: ['./cadastro-evento.component.scss']
})
export class CadastroEventoComponent implements OnInit {

  dadosFormulario:object = {}
  dadosLayout:object = {}

  constructor() { }

  ngOnInit(): void {
  }


  recebeDadosBtnAlterarForm(dadosEventoForm:object){
    this.dadosFormulario = dadosEventoForm
  }

  recebeDadosBtnAlterarLayout(dadosEventoLayout:object){
    this.dadosLayout = dadosEventoLayout
  }
}
