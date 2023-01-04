import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CadastroProduto } from '../compartilhado/cadastro-produto.model';

@Component({
  selector: 'app-lista-produtos',
  templateUrl: './lista-produtos.component.html',
  styleUrls: ['./lista-produtos.component.scss']
})
export class ListaProdutosComponent implements OnInit {

  @Output() enviaDadosAoFormularioProdutos = new EventEmitter()
  @Output() enviaDadosAoModalExcluirProduto = new EventEmitter()

  protected pageAtual :number = 1

  protected listaDeProdutos:CadastroProduto[] = [
    {idProduto:0,
    nomeProduto:'Produto 1',
    descricao:'Descricao Produto 1',
    qtdEstoque:500,
    precoUnitario:123.50,
    categoria:"doces",
    imgProduto:"img.png",
    status: "ativo",
    loja: "Casa do Pão de Queijo",
    idLoja: 1,
    dataHoraCriacaoProduto: '01/01/0001 00:00',
    nomeUsuarioCriadorProduto: "Clarisse",
    dataHoraUltimaProduto: "",
    nomeUsuarioUltimaProduto: "",
    },
    {idProduto:1,
    nomeProduto:'Produto 2',
    descricao:'Descricao Produto 2',
    qtdEstoque:500,
    precoUnitario:470.50,
    categoria:"lanches",
    imgProduto:"img.png",
    status: "ativo",
    loja: "Casa Bauducco",
    idLoja: 0,
    dataHoraCriacaoProduto: '01/01/0001 00:00',
    nomeUsuarioCriadorProduto: "Clarisse",
    dataHoraUltimaProduto: "",
    nomeUsuarioUltimaProduto: "",
    },{idProduto:2,
    nomeProduto:'Produto 3',
    descricao:'Descricao Produto 3',
    qtdEstoque:500,
    precoUnitario:960.50,
    categoria:"pizza",
    imgProduto:"img.png",
    status: "ativo",
    loja: "Casa do Pão de Queijo",
    idLoja: 1,
    dataHoraCriacaoProduto: '01/01/0001 00:00',
    nomeUsuarioCriadorProduto: "Clarisse",
    dataHoraUltimaProduto: "",
    nomeUsuarioUltimaProduto: "",
    },{idProduto:3,
    nomeProduto:'Produto 4',
    descricao:'Descricao Produto 4',
    qtdEstoque:500,
    precoUnitario:11.50,
    categoria:"vestuario",
    imgProduto:"img.png",
    status: "inativo",
    loja: "Casa Bauducco",
    idLoja: 0,
    dataHoraCriacaoProduto: '01/01/0001 00:00',
    nomeUsuarioCriadorProduto: "Clarisse",
    dataHoraUltimaProduto: "",
    nomeUsuarioUltimaProduto: "",
    },{idProduto:4,
    nomeProduto:'Produto 5',
    descricao:'Descricao Produto 5',
    qtdEstoque:500,
    precoUnitario:432.50,
    categoria:"materialEscolar",
    imgProduto:"img.png",
    status: "ativo",
    loja: "Casa do Pão de Queijo",
    idLoja: 1,
    dataHoraCriacaoProduto: '01/01/0001 00:00',
    nomeUsuarioCriadorProduto: "Clarisse",
    dataHoraUltimaProduto: "",
    nomeUsuarioUltimaProduto: "",
    },{idProduto:5,
    nomeProduto:'Produto 6',
    descricao:'Descricao Produto 6',
    qtdEstoque:500,
    precoUnitario:43.50,
    categoria:"livro",
    imgProduto:"img.png",
    status: "ativo",
    loja: "Casa Bauducco",
    idLoja: 0,
    dataHoraCriacaoProduto: '01/01/0001 00:00',
    nomeUsuarioCriadorProduto: "Clarisse",
    dataHoraUltimaProduto: "",
    nomeUsuarioUltimaProduto: "",
    }]

  constructor() { }

  ngOnInit(): void {
  }

  carregaFormularioBtnAlterar(index:number){

    this.listaDeProdutos.forEach((elemento)=>{
      if(elemento.idProduto == index){
        this.enviaDadosAoFormularioProdutos.emit({
          nomeProduto: elemento.nomeProduto,
          descricao: elemento.descricao,
          qtdEstoque: elemento.qtdEstoque,
          precoUnitario: elemento.precoUnitario,
          categoria: elemento.categoria,
          imgProduto:elemento.imgProduto,
        })
      }
    })

  }

  carregaModalExcluirProduto(index:number){
    this.listaDeProdutos.forEach((elemento)=>{
      if(elemento.idProduto == index){
        this.enviaDadosAoModalExcluirProduto.emit({
          nomeProduto: elemento.nomeProduto,
          descricao: elemento.descricao,
          qtdEstoque: elemento.qtdEstoque,
          precoUnitario: elemento.precoUnitario,
          categoria: elemento.categoria,
          imgProduto:elemento.imgProduto,
        })
      }
    })
  }


}
