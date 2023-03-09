import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { Instituicao } from './Instituicao.interface';

import { PrimeiroAcessoService } from 'src/app/services/areaLogada/PrimeiroAcesso/primeiro-acesso.service';

@Component({
  selector: 'app-multi-step-form',
  templateUrl: './multi-step-form.component.html',
  styleUrls: ['./multi-step-form.component.scss']
})
export class MultiStepFormComponent implements OnInit {
  @Output() onSubmit = new EventEmitter<Instituicao>();

  multiStep!: FormGroup;

  title = "Formulario de Varias etapas de cadastro de instituição";
  steps: any = 0;

  constructor(private PrimeiroAcessoService: PrimeiroAcessoService) { }

  ngOnInit(): void {
    this.multiStep = new FormGroup({
      //detalhesInstituicao: new FormGroup ({
        nameInstituicao: new FormControl(''),
        ceo: new FormControl(''),
      //}),
      //documentosInstituicao: new FormGroup ({
        cnpj: new FormControl(''),
        razaoSocial: new FormControl(''),
        inscricaoMunicipal: new FormControl(''),
        autorizacaoMec: new FormControl(''),
      //}),
      //contatosInstituicao: new FormGroup ({
        emailInstituicao: new FormControl(''),
        telefoneComercial1: new FormControl(''),
        telefoneComercial2: new FormControl('')
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

  async submit(instituicao: Instituicao) {
      if(this.multiStep.invalid) {
        console.log("deu ruim")
        return;
      }
      console.log(this.multiStep.value);

      const detalhesInstituicao = new FormData();

      detalhesInstituicao.append('nome_instituicao', this.nameInstituicao.value);
      detalhesInstituicao.append('nome_Ceo', this.ceo.value);

      const documentosInstituicao = new FormData();

      documentosInstituicao.append('cnpj', this.cnpj.value);
      documentosInstituicao.append('razaoSocial', this.razaoSocial.value);
      documentosInstituicao.append('inscricaoMunicipal', this.inscricaoMunicipal.value);
      documentosInstituicao.append('autorizacaoMec', this.autorizacaoMec.value);

      const contatosInstituicao = new FormData();

      contatosInstituicao.append('contato', this.emailInstituicao.value);
      contatosInstituicao.append('contato', this.telefoneComercial1.value);
      contatosInstituicao.append('contato', this.telefoneComercial2.value);

      console.log(this.nameInstituicao)

     await this.PrimeiroAcessoService.createContato(contatosInstituicao).subscribe((res) => {
      console.log(res);
     })

     await this.PrimeiroAcessoService.createDocument(documentosInstituicao).subscribe((res) => {
      console.log(res);
     })

     await this.PrimeiroAcessoService.createInstituicao(detalhesInstituicao).subscribe((res) => {
      console.log(res);
     })

    
     this.onSubmit.emit(this.multiStep.value);
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
