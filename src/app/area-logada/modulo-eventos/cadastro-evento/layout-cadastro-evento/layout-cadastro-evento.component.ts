import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { ServicosCompartilhadosModuloEventosService } from './../../compartilhado/servicos-compartilhados-modulo-eventos.service';


@Component({
  selector: 'app-layout-cadastro-evento',
  templateUrl: './layout-cadastro-evento.component.html',
  styleUrls: ['./layout-cadastro-evento.component.scss']
})
export class LayoutCadastroEventoComponent implements OnInit, OnChanges {

  @Input() dadosRecebidosBtnAlterar:any = {qtdFileiras:0,qtdAssentosPorFileira: 0,}


  dadosRecebidos = {numFileiras:15,numAssentos:10}

  fileiras: string[] = []
  assentos: number[] = []




  constructor(private ServicosCompartilhadosModuloEventosService: ServicosCompartilhadosModuloEventosService) { }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes['dadosRecebidosBtnAlterar']){
      const retornoFileirasAssentos = this.ServicosCompartilhadosModuloEventosService.atualizaFileirasAssentosArrayParaMontagemLayout(this.dadosRecebidosBtnAlterar)
      this.fileiras = retornoFileirasAssentos.fileiras
      this.assentos = retornoFileirasAssentos.assentos
    }
  }

  ngOnInit(): void {

  }



}
