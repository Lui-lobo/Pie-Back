import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModuloComprasComponent } from './modulo-compras.component';
import { SubmoduloRefeicoesComponent } from './submodulo-refeicoes/submodulo-refeicoes.component';
import { SubmoduloLojinhaComponent } from './submodulo-lojinha/submodulo-lojinha.component';
import { FormCadastroProdutosComponent } from './form-cadastro-produtos/form-cadastro-produtos.component';
import { ListaProdutosComponent } from './lista-produtos/lista-produtos.component';
import { CadastroLojinhaComponent } from './submodulo-lojinha/cadastro-lojinha/cadastro-lojinha.component';
import { CatalogoLojinhaComponent } from './submodulo-lojinha/catalogo-lojinha/catalogo-lojinha.component';
import { CatalogoRefeicoesComponent } from './submodulo-refeicoes/catalogo-refeicoes/catalogo-refeicoes.component';
import { CadastroRefeicoesComponent } from './submodulo-refeicoes/cadastro-refeicoes/cadastro-refeicoes.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ModalExcluiProdutoComponent } from './modal-exclui-produto/modal-exclui-produto.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { ListaProdutosCatalogoLojaComponent } from './lista-produtos-catalogo-loja/lista-produtos-catalogo-loja.component';
import { AlertModule } from 'ngx-alerts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarrinhoLojinhaComponent } from './submodulo-lojinha/carrinho-lojinha/carrinho-lojinha.component';
import { CarrinhoRefeicoesComponent } from './submodulo-refeicoes/carrinho-refeicoes/carrinho-refeicoes.component';



@NgModule({
  declarations: [
    ModuloComprasComponent,
    SubmoduloRefeicoesComponent,
    SubmoduloLojinhaComponent,
    FormCadastroProdutosComponent,
    ListaProdutosComponent,
    CadastroLojinhaComponent,
    CatalogoLojinhaComponent,
    CatalogoRefeicoesComponent,
    CadastroRefeicoesComponent,
    ModalExcluiProdutoComponent,
    ListaProdutosCatalogoLojaComponent,
    CarrinhoLojinhaComponent,
    CarrinhoRefeicoesComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    AlertModule.forRoot({maxMessages: 5, timeout: 5000, positionX: 'right'}),
    BrowserAnimationsModule,
  ]
})
export class ModuloComprasModule { }
