import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { TrocaFormularioLogin } from './troca-formulario-login.model';

@Component({
  selector: 'app-login-cabecalho-home',
  templateUrl: './login-cabecalho-home.component.html',
  styleUrls: ['./login-cabecalho-home.component.scss']
})
export class LoginCabecalhoHomeComponent implements OnChanges {

  @Input() dadosRecebidos : TrocaFormularioLogin = new TrocaFormularioLogin


  protected exibeFormularioLogin: boolean = true
  protected exibeFormularioCadastro: boolean = false
  protected exibeFormularioEsqueceuSenha: boolean = false




  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes['dadosRecebidos']){
      this.recebeDadosTrocaFormulario(this.dadosRecebidos)
    };
  }


  recebeDadosTrocaFormulario(dadosRecebidos : TrocaFormularioLogin){

    this.exibeFormularioLogin = dadosRecebidos.login
    this.exibeFormularioCadastro = dadosRecebidos.cadastro
    this.exibeFormularioEsqueceuSenha = dadosRecebidos.esqueceuSenha

  }

}
