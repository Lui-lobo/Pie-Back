import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { Instituicao } from './instituicao.interface';

import { PrimeiroAcessoService } from 'src/app/services/areaLogada/PrimeiroAcesso/primeiro-acesso.service';

@Component({
  selector: 'app-multi-step-form',
  templateUrl: './multi-step-form.component.html',
  styleUrls: ['./multi-step-form.component.scss']
})
export class MultiStepFormComponent implements OnInit {
  @Output() onSubmit = new EventEmitter<Instituicao>();

  multiStep!: FormGroup;

  planos = ['plano-1', 'plano-2', 'plano-3'];

  title = "Formulario de Varias etapas de cadastro de instituição";
  steps: any = 0;

  constructor(private PrimeiroAcessoService: PrimeiroAcessoService, private router: Router) { }

  ngOnInit(): void {
    this.multiStep = new FormGroup({
      //detalhesInstituicao: new FormGroup ({
        nameInstituicao: new FormControl('', [Validators.required]),
        ceo: new FormControl('', [Validators.required]),
      //}),
      //documentosInstituicao: new FormGroup ({
        cnpj: new FormControl('', [Validators.required]),
        razaoSocial: new FormControl('', [Validators.required]),
        inscricaoMunicipal: new FormControl('', [Validators.required]),
        autorizacaoMec: new FormControl('', [Validators.required]),
      //}),
      //contatosInstituicao: new FormGroup ({
        emailInstituicao: new FormControl('', [Validators.required]),
        telefoneComercial1: new FormControl('', [Validators.required]),
        telefoneComercial2: new FormControl(''),
        plano: new FormControl('', [Validators.required])
      //})
    })
  }
 
  get nameInstituicao() {
    return this.multiStep.get('nameInstituicao')!;
  }

  get ceo() {
    return this.multiStep.get('ceo')!;
  }

  get cnpj() {
    return this.multiStep.get('cnpj')!;
  }

  get razaoSocial() {
    return this.multiStep.get('razaoSocial')!;
  }

  get inscricaoMunicipal() {
    return this.multiStep.get('inscricaoMunicipal')!;
  }

  get autorizacaoMec() {
    return this.multiStep.get('autorizacaoMec')!;
  }

  get emailInstituicao() {
    return this.multiStep.get('emailInstituicao')!;
  }

  get telefoneComercial1() {
    return this.multiStep.get('telefoneComercial1')!;
  }

  get telefoneComercial2() {
    return this.multiStep.get('telefoneComercial2')!;
  }

  get plano() {
    return this.multiStep.get('plano')
  }

  async submit(instituicao: Instituicao) {
      if(this.multiStep.invalid) {
        console.log("deu ruim")
        return;
      }
      console.log(this.multiStep.value);

      const detalhesInstituicao = new FormData();

      detalhesInstituicao.append('nome_instituicao', this.nameInstituicao.value);
      detalhesInstituicao.append('nome_Ceo', this.ceo.value);
    
    /* Sessão Dedicada a criar as variaveis para cada documento ser inserido de forma individual na tabela */

      const documentosInstituicaoCnpj = new FormData();

      documentosInstituicaoCnpj.append('documento', this.cnpj.value);
     
      const documentosInstituicaoRazaoSocial = new FormData();

      documentosInstituicaoRazaoSocial.append('documento', this.razaoSocial.value);

      const documentosInstituicaoInscricaoMunicipal = new FormData();

      documentosInstituicaoInscricaoMunicipal.append('documento', this.inscricaoMunicipal.value);

      const documentosInstituicaoAutorizacaoMec = new FormData();

      documentosInstituicaoAutorizacaoMec.append('documento', this.autorizacaoMec.value);

      /* Fim da sessão de documentos individuais */


      /**
       * Inicio da sessão de inserção de contatos Individuais da instituição
       */
      const contatosInstituicaoEmail = new FormData();

      contatosInstituicaoEmail.append('contato', this.emailInstituicao.value);

      const contatosInstituicaoTelefone1 = new FormData();
      contatosInstituicaoTelefone1.append('contato', this.telefoneComercial1.value);

      const contatosInstituicaoTelefone2 = new FormData();
      contatosInstituicaoTelefone2.append('contato', this.telefoneComercial2.value);

      const pagamentoInstituicao = new FormData();
      pagamentoInstituicao.append('nome_pedido', this.plano?.value);

        /**
       * Fim da sessão de inserção de contatos Individuais da instituição
       */

      console.log(this.nameInstituicao)

     await this.PrimeiroAcessoService.createContato(contatosInstituicaoEmail).subscribe((res) => {
      console.log(res);
     })

     await this.PrimeiroAcessoService.createContato(contatosInstituicaoTelefone1).subscribe((res) => {
      console.log(res);
     })

     await this.PrimeiroAcessoService.createContato(contatosInstituicaoTelefone2).subscribe((res) => {
      console.log(res);
     })

     await this.PrimeiroAcessoService.createDocument(documentosInstituicaoCnpj).subscribe((res) => {
      console.log(res);
     })

     await this.PrimeiroAcessoService.createDocument(documentosInstituicaoRazaoSocial).subscribe((res) => {
      console.log(res);
     })

     await this.PrimeiroAcessoService.createDocument(documentosInstituicaoInscricaoMunicipal).subscribe((res) => {
      console.log(res);
     })

     await this.PrimeiroAcessoService.createDocument(documentosInstituicaoAutorizacaoMec).subscribe((res) => {
      console.log(res);
     })

     await this.PrimeiroAcessoService.createInstituicao(detalhesInstituicao).subscribe((res) => {
      console.log(res);
     })

    await this.PrimeiroAcessoService.createPedido(pagamentoInstituicao).subscribe((res) => {
      console.log(res);
    })

     this.onSubmit.emit(this.multiStep.value);

     this.router.navigate(['/arealogada/homeinterno'])
  }

  next() {
    this.steps = this.steps +1;

    if(this.steps == 4) {
      this.steps = this.steps -1;
    } 
  }

  previous() {
    this.steps = this.steps -1;
  }




}
