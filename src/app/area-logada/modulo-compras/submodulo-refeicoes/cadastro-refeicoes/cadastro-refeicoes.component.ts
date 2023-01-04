import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro-refeicoes',
  templateUrl: './cadastro-refeicoes.component.html',
  styleUrls: ['./cadastro-refeicoes.component.scss']
})
export class CadastroRefeicoesComponent implements OnInit {

  dadosFormulario:object = {}
  dadosModal:object = {}


  public submodulo : string = 'refeicoes'

  constructor() { }

  ngOnInit(): void {
  }


  recebeDadosBtnAlterarForm(dadosProdutoForm:object){
    this.dadosFormulario = dadosProdutoForm
  }

  recebeDadosBtnExcluirProduto(dadosProdutoBtnExcluir:object){
    this.dadosModal = dadosProdutoBtnExcluir
  }


}
