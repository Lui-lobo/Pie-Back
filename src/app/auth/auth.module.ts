import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import { SigninComponent } from './signin/signin.component';
import { RouterModule } from '@angular/router';
import { AreaNaoLogadaModule } from '../area-nao-logada/area-nao-logada.module';



@NgModule({
  declarations: [
    AuthComponent,
    SigninComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    AreaNaoLogadaModule
  ],
  exports: [
    AuthComponent,
    SigninComponent
  ]
})
export class AuthModule { }
