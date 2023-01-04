import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AlertService } from 'ngx-alerts';
import { ServicosCompartilhadosService } from 'src/app/servicos-compartilhados/servicos-compartilhados.service';
import { CadastroProduto } from '../compartilhado/cadastro-produto.model';

@Component({
  selector: 'app-form-cadastro-produtos',
  templateUrl: './form-cadastro-produtos.component.html',
  styleUrls: ['./form-cadastro-produtos.component.scss']
})
export class FormCadastroProdutosComponent implements OnInit, OnChanges {

  @Input() public submodulo : string = ''
  @Input() dadosRecebidosBtnAlterar:any = undefined
  private loja : string = "Casa do Pão de Queijo"
  private idLoja : number = 0

  protected novoProduto: CadastroProduto = new CadastroProduto

  protected cadastroForm: FormGroup = this.FormBuilder.group({})


  constructor(
    private FormBuilder: FormBuilder,
    private alertService: AlertService,
    private servicosCompartilhados : ServicosCompartilhadosService) { }
  ngOnChanges(changes: SimpleChanges): void {
    if(changes['dadosRecebidosBtnAlterar'] && this.dadosRecebidosBtnAlterar != undefined){
      this.cadastroForm.patchValue({
        nomeProduto: this.dadosRecebidosBtnAlterar.nomeProduto,
        descricao:this.dadosRecebidosBtnAlterar.descricao,
        qtdEstoque:this.dadosRecebidosBtnAlterar.qtdEstoque,
        precoUnitario:this.dadosRecebidosBtnAlterar.precoUnitario,
        categoria:this.dadosRecebidosBtnAlterar.categoria,
        imgProduto:this.dadosRecebidosBtnAlterar.imgProduto,
        status:this.dadosRecebidosBtnAlterar.status
      })
     };
  }

  ngOnInit(): void {

    this.cadastroForm = this.FormBuilder.group({
      nomeProduto:["", Validators.required ],
      descricao:["", Validators.required ],
      qtdEstoque:["", Validators.required ],
      precoUnitario:["", Validators.required ],
      categoria:["",Validators.required],
      imgProduto:[""],
      status:["",Validators.required],
    })
  }

  onSubmit(){

    if(this.servicosCompartilhados.validaValorIgualMenorQueZero(parseInt(this.cadastroForm.get('precoUnitario')?.value))){
      this.alertService.danger('A quantidade de vagas precisa ser superior a zero')
      return false
    }

    if(this.servicosCompartilhados.validaValorIgualMenorQueZero(parseInt(this.cadastroForm.get('qtdEstoque')?.value))){
      this.alertService.danger('O limite de reservas por usuário precisa ser superior a zero')
      return false
    }



    this.novoProduto = {
      idProduto:0,
      nomeProduto:this.cadastroForm.get('nomeProduto')?.value,
      descricao:this.cadastroForm.get('descricao')?.value,
      qtdEstoque:parseInt(this.cadastroForm.get('qtdEstoque')?.value),
      precoUnitario:parseInt(this.cadastroForm.get('precoUnitario')?.value),
      categoria:this.cadastroForm.get('categoria')?.value,
      imgProduto:this.cadastroForm.get('imgProduto')?.value,
      status:this.cadastroForm.get('status')?.value,
      loja: this.loja,
      idLoja: this.idLoja,
      dataHoraCriacaoProduto: "",
      nomeUsuarioCriadorProduto: "",
      dataHoraUltimaProduto:  "",
      nomeUsuarioUltimaProduto: "",
  }

  return true

  }


}
