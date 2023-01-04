
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AreaNaoLogadaModule } from './area-nao-logada/area-nao-logada.module';
import { AreaLogadaModule } from './area-logada/area-logada.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AreaLogadaModule,
    AreaNaoLogadaModule,
    AuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
