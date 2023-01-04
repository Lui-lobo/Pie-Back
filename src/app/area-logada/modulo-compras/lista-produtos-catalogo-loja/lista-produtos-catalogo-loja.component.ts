import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AlertService } from 'ngx-alerts';
import { CadastroProduto } from '../compartilhado/cadastro-produto.model';

@Component({
  selector: 'app-lista-produtos-catalogo-loja',
  templateUrl: './lista-produtos-catalogo-loja.component.html',
  styleUrls: ['./lista-produtos-catalogo-loja.component.scss']
})
export class ListaProdutosCatalogoLojaComponent implements OnInit {

  @Output() enviaDadosAoFormularioProdutos = new EventEmitter()
  @Output() enviaDadosAoModalExcluirProduto = new EventEmitter()


  protected pageAtual :number = 1

  protected listaDeProdutos:CadastroProduto[] = [
    {idProduto:0,nomeProduto:'Produto 1',descricao:'Descricao Produto 1',qtdEstoque:500,precoUnitario:123.50,categoria:"doces",imgProduto:"img.png",status: "ativo",loja: "Casa do Pão de Queijo",idLoja:0,dataHoraCriacaoProduto: '01/01/0001 00:00',nomeUsuarioCriadorProduto: "Clarisse",dataHoraUltimaProduto: "",nomeUsuarioUltimaProduto: "",},
    {idProduto:1,nomeProduto:'Produto 2',descricao:'Descricao Produto 2',qtdEstoque:500,precoUnitario:470.50,categoria:"lanches",imgProduto:"img.png",status: "ativo",loja: "Casa Bauducco",idLoja:0,dataHoraCriacaoProduto: '01/01/0001 00:00',nomeUsuarioCriadorProduto: "Clarisse",dataHoraUltimaProduto: "",nomeUsuarioUltimaProduto: "",},
    {idProduto:2,nomeProduto:'Produto 3',descricao:'Descricao Produto 3',qtdEstoque:500,precoUnitario:960.50,categoria:"pizza",imgProduto:"img.png",status: "ativo",loja: "Casa do Pão de Queijo",idLoja:0,dataHoraCriacaoProduto: '01/01/0001 00:00',nomeUsuarioCriadorProduto: "Clarisse",dataHoraUltimaProduto: "",nomeUsuarioUltimaProduto: "",},
    {idProduto:3,nomeProduto:'Produto 4',descricao:'Descricao Produto 4',qtdEstoque:500,precoUnitario:11.50,categoria:"vestuario",imgProduto:"img.png",status: "ativo",loja: "Casa Bauducco",idLoja:0,dataHoraCriacaoProduto: '01/01/0001 00:00',nomeUsuarioCriadorProduto: "Clarisse",dataHoraUltimaProduto: "",nomeUsuarioUltimaProduto: "",},
    {idProduto:4,nomeProduto:'Produto 5',descricao:'Descricao Produto 5',qtdEstoque:500,precoUnitario:432.50,categoria:"materialEscolar",imgProduto:"img.png",status: "ativo",loja: "Casa do Pão de Queijo",idLoja:0,dataHoraCriacaoProduto: '01/01/0001 00:00',nomeUsuarioCriadorProduto: "Clarisse",dataHoraUltimaProduto: "",nomeUsuarioUltimaProduto: "",},
    {idProduto:5,nomeProduto:'Produto 6',descricao:'Descricao Produto 6',qtdEstoque:500,precoUnitario:43.50,categoria:"livro",imgProduto:"img.png",status: "ativo",loja: "Casa Bauducco",idLoja:0,dataHoraCriacaoProduto: '01/01/0001 00:00',nomeUsuarioCriadorProduto: "Clarisse",dataHoraUltimaProduto: "",nomeUsuarioUltimaProduto: "",},
    {idProduto:6,nomeProduto:'Produto 7',descricao:'Descricao Produto 7',qtdEstoque:500,precoUnitario:123.50,categoria:"doces",imgProduto:"img.png",status: "ativo",loja: "Casa do Pão de Queijo",idLoja:0,dataHoraCriacaoProduto: '01/01/0001 00:00',nomeUsuarioCriadorProduto: "Clarisse",dataHoraUltimaProduto: "",nomeUsuarioUltimaProduto: "",},
    {idProduto:7,nomeProduto:'Produto 8',descricao:'Descricao Produto 8',qtdEstoque:500,precoUnitario:466.50,categoria:"lanches",imgProduto:"img.png",status: "ativo",loja: "Casa Bauducco",idLoja:0,dataHoraCriacaoProduto: '01/01/0001 00:00',nomeUsuarioCriadorProduto: "Clarisse",dataHoraUltimaProduto: "",nomeUsuarioUltimaProduto: "",},
    {idProduto:8,nomeProduto:'Produto 9',descricao:'Descricao Produto 9',qtdEstoque:500,precoUnitario:945.50,categoria:"pizza",imgProduto:"img.png",status: "ativo",loja: "Casa do Pão de Queijo",idLoja:0,dataHoraCriacaoProduto: '01/01/0001 00:00',nomeUsuarioCriadorProduto: "Clarisse",dataHoraUltimaProduto: "",nomeUsuarioUltimaProduto: "",},
    {idProduto:9,nomeProduto:'Produto 10',descricao:'Descricao Produto 10',qtdEstoque:500,precoUnitario:18.20,categoria:"vestuario",imgProduto:"img.png",status: "ativo",loja: "Casa Bauducco",idLoja:0,dataHoraCriacaoProduto: '01/01/0001 00:00',nomeUsuarioCriadorProduto: "Clarisse",dataHoraUltimaProduto: "",nomeUsuarioUltimaProduto: "",},
    {idProduto:10,nomeProduto:'Produto 11',descricao:'Descricao Produto 11',qtdEstoque:500,precoUnitario:401.70,categoria:"materialEscolar",imgProduto:"img.png",status: "ativo",loja: "Casa do Pão de Queijo",idLoja:0,dataHoraCriacaoProduto: '01/01/0001 00:00',nomeUsuarioCriadorProduto: "Clarisse",dataHoraUltimaProduto: "",nomeUsuarioUltimaProduto: "",},
    {idProduto:11,nomeProduto:'Produto 12',descricao:'Descricao Produto 12',qtdEstoque:500,precoUnitario:430.50,categoria:"livro",imgProduto:"img.png",status: "ativo",loja: "Casa Bauducco",idLoja:0,dataHoraCriacaoProduto: '01/01/0001 00:00',nomeUsuarioCriadorProduto: "Clarisse",dataHoraUltimaProduto: "",nomeUsuarioUltimaProduto: "",},
    {idProduto:12,nomeProduto:'Produto 13',descricao:'Descricao Produto 13',qtdEstoque:500,precoUnitario:222.50,categoria:"livro",imgProduto:"img.png",status: "ativo",loja: "Casa do Pão de Queijo",idLoja:0,dataHoraCriacaoProduto: '01/01/0001 00:00',nomeUsuarioCriadorProduto: "Clarisse",dataHoraUltimaProduto: "",nomeUsuarioUltimaProduto: "",},
  ]

  constructor(private alertService : AlertService) { }

  ngOnInit(): void {
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

  adicionaAoCarrinho(){

    this.alertService.success('Item Adicionado ao Carrinho')

  }


}
