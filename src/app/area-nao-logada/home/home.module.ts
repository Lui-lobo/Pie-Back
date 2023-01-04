import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { BannerHomeComponent } from './banner-home/banner-home.component';
import { NossosServicosHomeComponent } from './nossos-servicos-home/nossos-servicos-home.component';
import { PerguntasFrequentesHomeComponent } from './perguntas-frequentes-home/perguntas-frequentes-home.component';
import { ContatoHomeComponent } from './contato-home/contato-home.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
  ],
  declarations: [HomeComponent, BannerHomeComponent, NossosServicosHomeComponent, PerguntasFrequentesHomeComponent, ContatoHomeComponent],
  exports:[
    HomeComponent
  ]
})
export class HomeModule { }
