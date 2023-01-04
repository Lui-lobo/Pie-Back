import { ServicosCompartilhadosService } from '../../../../servicos-compartilhados/servicos-compartilhados.service';
import { CadastroEventoReservadoAssentoLivre } from '../../compartilhado/cadastro-evento.model';
import { Component, Input, OnInit, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AlertService } from 'ngx-alerts';

@Component({
  selector: 'app-form-cadastro-evento',
  templateUrl: './form-cadastro-evento.component.html',
  styleUrls: ['./form-cadastro-evento.component.scss']
})
export class FormCadastroEventoComponent implements OnInit, OnChanges {

  private eventosCadastrados : Array<CadastroEventoReservadoAssentoLivre>  = []

  protected cadastroForm: FormGroup = this.FormBuilder.group({})

  constructor(
    private FormBuilder: FormBuilder,
    private alertService: AlertService,
    private servicosCompartilhados : ServicosCompartilhadosService) { }


  private novoEvento: CadastroEventoReservadoAssentoLivre= new CadastroEventoReservadoAssentoLivre

  protected temNecessidadeDeReserva : boolean = false

  @Input() dadosRecebidosBtnAlterar:any = undefined
  @Output() enviaDadosAoLayoutEvento = new EventEmitter()


  ngOnInit(): void {

    this.cadastroForm = this.FormBuilder.group({
      nomeEvento:["", Validators.required ],
      dataHora:["", Validators.required ],
      local:["", Validators.required ],
      descricao:['', Validators.required],
      qtdVagas:["", Validators.required ],
      limiteReservaPorUsuario:["", Validators.required ],
      necessidadeDeReserva:['', Validators.required],
      qtdFileiras:['0', Validators.required],
      qtdAssentosPorFileira:['0', Validators.required],
      status:['0', Validators.required]
    })

  }

  ngOnChanges(changes: SimpleChanges): void {
   if(changes['dadosRecebidosBtnAlterar'] && this.dadosRecebidosBtnAlterar != undefined){
    this.cadastroForm.patchValue({
      nomeEvento: this.dadosRecebidosBtnAlterar.nomeEvento,
      dataHora:this.dadosRecebidosBtnAlterar.dataHora,
      local:this.dadosRecebidosBtnAlterar.local,
      descricao:this.dadosRecebidosBtnAlterar.descricao,
      qtdVagas:this.dadosRecebidosBtnAlterar.qtdVagas,
      limiteReservaPorUsuario:this.dadosRecebidosBtnAlterar.limiteReservaPorUsuario,
      necessidadeDeReserva:this.dadosRecebidosBtnAlterar.necessidadeDeReserva,
      qtdFileiras:this.dadosRecebidosBtnAlterar.qtdFileiras,
      qtdAssentosPorFileira:this.dadosRecebidosBtnAlterar.qtdAssentosPorFileira,
      status:this.dadosRecebidosBtnAlterar.status
    })
    this.atualizaNecessidadeDeReserva((this.cadastroForm.get('necessidadeDeReserva')?.value === 'true') )
   };
  }


  atualizaNecessidadeDeReserva(booleano:boolean){
    this.temNecessidadeDeReserva = booleano
  }


  onSubmit() : boolean {

    if(this.servicosCompartilhados.validaValorIgualMenorQueZero(parseInt(this.cadastroForm.get('qtdVagas')?.value))){
      this.alertService.danger('A quantidade de vagas precisa ser superior a zero')
      return false
    }

    if(this.servicosCompartilhados.validaValorIgualMenorQueZero(parseInt(this.cadastroForm.get('limiteReservaPorUsuario')?.value))){
      this.alertService.danger('O limite de reservas por usuário precisa ser superior a zero')
      return false
    }

    this.novoEvento = {
      idEvento : 0,
      nomeEvento : this.cadastroForm.get('nomeEvento')?.value,
      dataHoraEvento : this.cadastroForm.get('dataHora')?.value,
      localEvento : this.cadastroForm.get('local')?.value,
      descricao: this.cadastroForm.get('descricao')?.value,
      qtdVagas : parseInt(this.cadastroForm.get('qtdVagas')?.value),
      limiteReservaPorUsuario : parseInt(this.cadastroForm.get('limiteReservaPorUsuario')?.value),
      necessidadeDeReserva : (this.cadastroForm.get('necessidadeDeReserva')?.value === 'true'),
      qtdFileiras : parseInt(this.cadastroForm.get('qtdFileiras')?.value),
      qtdAssentosPorFileira : parseInt(this.cadastroForm.get('qtdAssentosPorFileira')?.value),
      qtdReservas: parseInt(this.cadastroForm.get('qtdReservas')?.value),
      status : '',
      dataHoraCriacaoEvento  : new Date().toLocaleString(),
      nomeUsuarioCriadorEvento  :  "Usuario1",
      dataHoraUltimaAlteracao  :  "",
      nomeUsuarioUltimaAlteracao  : "",
    }

    this.eventosCadastrados.push(this.novoEvento)

    console.log(this.eventosCadastrados)
    return true

  }

  previa(){
    this.enviaDadosAoLayoutEvento.emit({
      qtdFileiras: parseInt(this.cadastroForm.get('qtdFileiras')?.value),
      qtdAssentosPorFileira: parseInt(this.cadastroForm.get('qtdAssentosPorFileira')?.value),
    })

  }



}
