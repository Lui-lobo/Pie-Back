import { Component, OnInit, Input } from '@angular/core';
import { Route } from '@angular/router';

@Component({
  selector: 'app-cabecalho-auth',
  templateUrl: './cabecalho-auth.component.html',
  styleUrls: ['./cabecalho-auth.component.scss']
})
export class CabecalhoAuthComponent implements OnInit {

  @Input() btnEntrar:string = "";
  @Input() btnLink:string = "";

  constructor() { }

  ngOnInit(): void {
  }

}
