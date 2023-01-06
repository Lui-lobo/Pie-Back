import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  
  btnEntrar:string = "registrar";
  btnLink:string = "/register"


  constructor() { }

  ngOnInit(): void {
  }

}
