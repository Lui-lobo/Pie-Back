import { TrocaFormularioLogin } from './login-cabecalho-home/troca-formulario-login.model';
import { Component, OnInit , Output } from '@angular/core';

@Component({
  selector: 'app-cabecalho',
  templateUrl: './cabecalho.component.html',
  styleUrls: ['./cabecalho.component.scss']
})



  export class CabecalhoComponent implements OnInit {



  @Output() trocaFormularioInfos : TrocaFormularioLogin = new TrocaFormularioLogin



  private btnEntrar = document.querySelector<HTMLElement>(".cabec__btn--entrar")


  constructor(private trocaFormularioLogin : TrocaFormularioLogin) { }

  ngOnInit(): void {

    this.btnEntrar = document.querySelector<HTMLElement>(".cabec__btn--entrar")

  }


  ativaLoginForm(){

    this.trocaFormularioLogin = {login:true,cadastro:false,esqueceuSenha:false}
    this.trocaFormulario(this.trocaFormularioLogin)

  }


  ativaCadastroForm(){

    this.trocaFormularioLogin = {login:false,cadastro:true,esqueceuSenha:false}
    this.trocaFormulario(this.trocaFormularioLogin)

  }

  ativaEsqueceuSenhaForm(){

    this.trocaFormularioLogin = {login:false,cadastro:false,esqueceuSenha:true}
    this.trocaFormulario(this.trocaFormularioLogin)

  }


  trocaFormulario(dadosInformados : TrocaFormularioLogin){

    this.trocaFormularioInfos =
      {
        login: dadosInformados.login,
        cadastro: dadosInformados.cadastro,
        esqueceuSenha: dadosInformados.esqueceuSenha
      }
  }


}
