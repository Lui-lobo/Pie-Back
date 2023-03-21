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
import { HttpClientModule } from '@angular/common/http';
import { AuthGuardGuard } from './auth-guard.guard';
import { BrowserModule } from '@angular/platform-browser';
import { RecoverPassEmailPageComponent } from './recover-pass-email-page/recover-pass-email-page.component';

@NgModule({
  declarations: [
    AuthComponent,
    SigninComponent,
    CabecalhoAuthComponent,
    RegisterAuthComponent,
    RecoverPassComponent,
    RecoverPassEmailPageComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    AreaNaoLogadaModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserModule
  ],
  exports: [
    AuthComponent,
    SigninComponent,
    CabecalhoComponent
  ]
})
export class AuthModule { }
