import { ModalCancelaReservaEventoComponent } from './reserva-evento/modal-cancela-reserva-evento/modal-cancela-reserva-evento.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { CadastroEventoReservadoAssentoLivre } from './compartilhado/cadastro-evento.model';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModuloEventosComponent } from './modulo-eventos.component';
import { CadastroEventoComponent } from './cadastro-evento/cadastro-evento.component';
import { ReservaEventoComponent } from './reserva-evento/reserva-evento.component';
import { FormCadastroEventoComponent } from './cadastro-evento/form-cadastro-evento/form-cadastro-evento.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ListaCadastroEventoComponent } from './cadastro-evento/lista-cadastro-evento/lista-cadastro-evento.component';
import { ListaReservasEvento } from './compartilhado/lista-reservas-evento.model';
import { AlertModule } from 'ngx-alerts';
import { LayoutCadastroEventoComponent } from './cadastro-evento/layout-cadastro-evento/layout-cadastro-evento.component';
import { ListaReservaEventoComponent } from './reserva-evento/lista-reserva-evento/lista-reserva-evento.component';
import { ModalReservaEventoComponent } from './reserva-evento/modal-reserva-evento/modal-reserva-evento.component';
import { LayoutReservaEventoComponent } from './reserva-evento/layout-reserva-evento/layout-reserva-evento.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    AlertModule.forRoot({maxMessages: 5, timeout: 5000, positionX: 'right'}),
    BrowserAnimationsModule,
  ],
  declarations: [
    ModuloEventosComponent,
    CadastroEventoComponent,
    ReservaEventoComponent,
    FormCadastroEventoComponent,
    ListaCadastroEventoComponent,
    LayoutCadastroEventoComponent,
    ListaReservaEventoComponent,
    ModalReservaEventoComponent,
    LayoutReservaEventoComponent,
    ModalCancelaReservaEventoComponent],
  providers:[
    CadastroEventoReservadoAssentoLivre,
    ListaReservasEvento
  ],
})
export class ModuloEventosModule { }
