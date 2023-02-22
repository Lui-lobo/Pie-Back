import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

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

  async submit() {
      
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
