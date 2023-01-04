import { ModuloEventosModule } from './modulo-eventos/modulo-eventos.module';
import { RouterModule } from '@angular/router';
import { AlertModule } from 'ngx-alerts';
import { MenuLateralComponent } from './menu-lateral/menu-lateral.component';
import { RodapeInternoComponent } from './rodape-interno/rodape-interno.component';
import { HomeInternoComponent } from './home-interno/home-interno.component';
import { CabecalhoInternoComponent } from './cabecalho-interno/cabecalho-interno.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AreaLogadaComponent } from './area-logada.component';
import { ModuloCadastroComponent } from './modulo-cadastro/modulo-cadastro.component';
import { ModuloComprasModule } from './modulo-compras/modulo-compras.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ModuloEventosModule,
    ModuloComprasModule,
    AlertModule.forRoot({maxMessages: 5, timeout: 5000, positionX: 'right'})
  ],
  declarations: [
    AreaLogadaComponent,
    CabecalhoInternoComponent,
    HomeInternoComponent,
    RodapeInternoComponent,
    MenuLateralComponent,
    ModuloCadastroComponent,

  ],
  exports:[
    CabecalhoInternoComponent,
    HomeInternoComponent,
    RodapeInternoComponent,
    MenuLateralComponent
  ]
})
export class AreaLogadaModule { }
