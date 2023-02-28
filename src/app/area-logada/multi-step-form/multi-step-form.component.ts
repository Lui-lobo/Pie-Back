import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { instituicao } from './instituicao.interface';

@Component({
  selector: 'app-multi-step-form',
  templateUrl: './multi-step-form.component.html',
  styleUrls: ['./multi-step-form.component.scss']
})
export class MultiStepFormComponent {

  title = "Formulario de Varias etapas de cadastro de instituição";
  steps: any = 0;


  multiStep = new FormGroup({
    detalhesInstituicao: new FormGroup ({
      nameInstituicao: new FormControl(''),
      ceo: new FormControl('')
    }),
    documentosInstituicao: new FormGroup ({
      cnpj: new FormControl(''),
      razaoSocial: new FormControl(''),
      inscricaoMunicipal: new FormControl(''),
      autorizacaoMec: new FormControl(''),
    }),
    contatosInstituicao: new FormGroup ({
      emailInstituicao: new FormControl(''),
      telefoneComercial1: new FormControl(''),
      telefoneComercial2: new FormControl(''),
    })
  })

  get nameInstituicao() {
    return this.multiStep.get('nameInstituicao')
  }

  get ceo() {
    return this.multiStep.get('ceo')
  }

  get cnpj() {
    return this.multiStep.get('cnpj')
  }

  get razaoSocial() {
    return this.multiStep.get('razaoSocial')
  }

  get inscricaoMunicipal() {
    return this.multiStep.get('inscricaoMunicipal')
  }

  get autorizacaoMec() {
    return this.multiStep.get('autorizacaoMec')
  }

  async submit(instituicao: instituicao) {
      if(this.multiStep.invalid) {
        console.log("deu ruim")
        return;
      }
        console.log(this.multiStep.value);

      const detalhesInstituicao = new FormData();

      detalhesInstituicao.append('nameInstituicao', instituicao.nameInstituicao)
      detalhesInstituicao.append('ceo', instituicao.ceo)

      const documentosInstituicao = new FormData();

      documentosInstituicao.append('cnpj', instituicao.cnpj)
      documentosInstituicao.append('razaoSocial', instituicao.razaoSocial)
      documentosInstituicao.append('inscricaoMunicipal', instituicao.inscricaoMunicipal)
      documentosInstituicao.append('autorizacaoMec', instituicao.autorizacaoMec)

      const contatosInstituicao = new FormData();

   

  }

  next() {
    this.steps = this.steps +1;

    if(this.steps == 3) {
      this.steps = this.steps -1;
    } 
  }

  previous() {
    this.steps = this.steps -1;
  }




}
