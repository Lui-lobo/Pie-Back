import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal-exclui-produto',
  templateUrl: './modal-exclui-produto.component.html',
  styleUrls: ['./modal-exclui-produto.component.scss']
})
export class ModalExcluiProdutoComponent implements OnInit {

  @Input() dadosRecebidosBtnExcluirProduto:any = {
        
  }

  constructor() { }

  ngOnInit(): void {
  }

}
