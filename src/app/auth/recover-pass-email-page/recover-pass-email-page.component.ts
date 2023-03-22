import { Component ,EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-recover-pass-email-page',
  templateUrl: './recover-pass-email-page.component.html',
  styleUrls: ['./recover-pass-email-page.component.scss']
})
export class RecoverPassEmailPageComponent {

  UserLogin: string;
  Token: string;

  constructor(private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    
    this.route.queryParams.subscribe(params => {
      console.log(params)
      this.UserLogin = params['UserLogin']
      console.log(this.UserLogin)
      this.Token = params['Token']
      console.log(this.Token)
    })

  }

}
