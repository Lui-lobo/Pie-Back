import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import { SigninComponent } from './signin/signin.component';
import { RouterModule } from '@angular/router';
import { AreaNaoLogadaModule } from '../area-nao-logada/area-nao-logada.module';
import { CabecalhoAuthComponent } from './cabecalho-auth/cabecalho-auth.component';
import { RegisterAuthComponent } from './register-auth/register-auth.component';
import { CabecalhoComponent } from '../area-nao-logada/cabecalho/cabecalho.component';
import { RecoverPassComponent } from './recover-pass/recover-pass.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AuthComponent,
    SigninComponent,
    CabecalhoAuthComponent,
    RegisterAuthComponent,
    RecoverPassComponent,
   
  ],
  imports: [
    CommonModule,
    RouterModule,
    AreaNaoLogadaModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    AuthComponent,
    SigninComponent,
    CabecalhoComponent
  ]
})
export class AuthModule { }
