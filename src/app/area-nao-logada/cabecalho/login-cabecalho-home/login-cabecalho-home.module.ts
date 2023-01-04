import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginCabecalhoHomeComponent } from './login-cabecalho-home.component';
import { FormLoginComponent } from './form-login/form-login.component';
import { FormCadastroComponent } from './form-cadastro/form-cadastro.component';
import { FormEsqueceuSenhaComponent } from './form-esqueceu-senha/form-esqueceu-senha.component';

@NgModule({

  imports: [
    CommonModule,
    RouterModule,
  ],
  declarations: [LoginCabecalhoHomeComponent, FormLoginComponent, FormCadastroComponent, FormEsqueceuSenhaComponent],
  exports:[
    LoginCabecalhoHomeComponent
  ]
})
export class LoginCabecalhoHomeModule { }
