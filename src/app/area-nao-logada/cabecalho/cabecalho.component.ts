import { TrocaFormularioLogin } from './login-cabecalho-home/troca-formulario-login.model';
import { Component, OnInit , Output } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-cabecalho',
  templateUrl: './cabecalho.component.html',
  styleUrls: ['./cabecalho.component.scss']
})



  export class CabecalhoComponent implements OnInit {
    

  private btnEntrar = document.querySelector<HTMLElement>(".cabec__btn--entrar")

    
  


  constructor() { 

   
  }

  ngOnInit(): void {

    this.btnEntrar = document.querySelector<HTMLElement>(".cabec__btn--entrar")

    
    
  }

}
