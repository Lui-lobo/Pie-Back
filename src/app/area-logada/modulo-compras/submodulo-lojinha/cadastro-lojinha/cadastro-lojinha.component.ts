import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro-lojinha',
  templateUrl: './cadastro-lojinha.component.html',
  styleUrls: ['./cadastro-lojinha.component.scss']
})
export class CadastroLojinhaComponent implements OnInit {

  dadosFormulario:object = {}
  dadosModal:object = {}

  public submodulo : string = 'lojinha'

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
