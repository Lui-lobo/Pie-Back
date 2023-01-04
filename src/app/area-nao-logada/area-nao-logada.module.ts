import { RouterModule } from '@angular/router';
import { LoginCabecalhoHomeModule } from './cabecalho/login-cabecalho-home/login-cabecalho-home.module';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AreaNaoLogadaComponent } from './area-nao-logada.component';
import { CabecalhoComponent } from './cabecalho/cabecalho.component';
import { RodapeComponent } from './rodape/rodape.component';
import { HomeModule } from './home/home.module';
import { TrocaFormularioLogin } from './cabecalho/login-cabecalho-home/troca-formulario-login.model';


@NgModule({
  imports: [
    RouterModule,
    CommonModule,
    HomeModule,
    LoginCabecalhoHomeModule
  ],
  declarations: [

    AreaNaoLogadaComponent,
    CabecalhoComponent,
    RodapeComponent,
    ],
  exports:[
    AreaNaoLogadaComponent
  ],
  providers:[
    TrocaFormularioLogin
  ]
})
export class AreaNaoLogadaModule { }
