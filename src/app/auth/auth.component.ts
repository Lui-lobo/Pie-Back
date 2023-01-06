import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
                      
  public btnEntrar:string = "";
  public btnLink:string = ""


  constructor(private route:Router) {

    if(this.route.url === "/auth/login"){
    this.btnEntrar = "registrar";
    this.btnLink = "auth/register"
    } else if(this.route.url === "/auth/register") {
      this.btnEntrar = "Já possui uma conta?";
      this.btnLink = "auth/login"
    } else if(this.route.url === "/auth/recoverPass") {
      this.btnEntrar = "Voltar ao Login";
      this.btnLink  = "auth/login";
      
    }
    
   }

  ngOnInit(): void {
  }

}
