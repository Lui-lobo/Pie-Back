import { CarrinhoLojinhaComponent } from './area-logada/modulo-compras/submodulo-lojinha/carrinho-lojinha/carrinho-lojinha.component';
import { CarrinhoRefeicoesComponent } from './area-logada/modulo-compras/submodulo-refeicoes/carrinho-refeicoes/carrinho-refeicoes.component';
import { ReservaEventoComponent } from './area-logada/modulo-eventos/reserva-evento/reserva-evento.component';
import { HomeInternoComponent } from './area-logada/home-interno/home-interno.component';
import { CadastroEventoComponent } from './area-logada/modulo-eventos/cadastro-evento/cadastro-evento.component';
import { AreaNaoLogadaComponent } from './area-nao-logada/area-nao-logada.component';
import { AreaLogadaComponent } from './area-logada/area-logada.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroLojinhaComponent } from './area-logada/modulo-compras/submodulo-lojinha/cadastro-lojinha/cadastro-lojinha.component';
import { CadastroRefeicoesComponent } from './area-logada/modulo-compras/submodulo-refeicoes/cadastro-refeicoes/cadastro-refeicoes.component';
import { CatalogoLojinhaComponent } from './area-logada/modulo-compras/submodulo-lojinha/catalogo-lojinha/catalogo-lojinha.component';
import { CatalogoRefeicoesComponent } from './area-logada/modulo-compras/submodulo-refeicoes/catalogo-refeicoes/catalogo-refeicoes.component';
import { AuthComponent } from './auth/auth.component';
import { RegisterAuthComponent } from './auth/register-auth/register-auth.component';
import { SigninComponent } from './auth/signin/signin.component';
import { RecoverPassComponent } from './auth/recover-pass/recover-pass.component';

const routes: Routes = [
  {
    path: '',
    component: AreaNaoLogadaComponent,
    data:{
      title:"PIE | Home",
      breadcrumb:[{label: 'home'}]
    }
  },
  {
    path: 'auth',
    component: AuthComponent,
    data:{
      title: "PIE | Login",
      btnEntrar: "Registrar",
      btnEntrarHref: "register",
      breadcrumb:[{label: 'login'}]  
    },
    children:[
      {path: 'login', component: SigninComponent},
      {path: 'register', component: RegisterAuthComponent},
      {path: 'recoverPass', component: RecoverPassComponent}
    ]
  }, 
  {
    path: 'arealogada',
    component: AreaLogadaComponent,
    data:{
      title:"PIE | Bem vindo!",
      breadcrumb:[{label: 'areaLogada'}]
    },
    children:[
      {path: 'homeinterno',component: HomeInternoComponent},
      {path: 'cadastroevento',component: CadastroEventoComponent},
      {path: 'inscricaoevento',component: ReservaEventoComponent},
      {path: 'cadastrolojinha',component: CadastroLojinhaComponent},
      {path: 'catalogolojinha',component: CatalogoLojinhaComponent},
      {path: 'carrinholojinha',component: CarrinhoLojinhaComponent},
      {path: 'cadastrorefeicoes',component: CadastroRefeicoesComponent},
      {path: 'catalogorefeicoes',component: CatalogoRefeicoesComponent},
      {path: 'carrinhorefeicoes',component: CarrinhoRefeicoesComponent},
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
