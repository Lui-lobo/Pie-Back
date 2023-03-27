import { HttpClient, HttpParams } from '@angular/common/http';
import { Component ,EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { param } from 'jquery';
import { UserRecoverService } from 'src/app/services/user-recover.service';
import { Isignin } from '../signin/signin.interface';


@Component({
  selector: 'app-recover-pass-email-page',
  templateUrl: './recover-pass-email-page.component.html',
  styleUrls: ['./recover-pass-email-page.component.scss']
})
export class RecoverPassEmailPageComponent {
  @Output() onSubmit = new EventEmitter<Isignin>()

  UserLogin: string;
  Token: string;
  alertSuccess:boolean;

  resetForm!: FormGroup;

  constructor(private route: ActivatedRoute, private router: Router, private http: HttpClient, private userRecoverService: UserRecoverService) {

  }

  ngOnInit(): void {
    
    this.route.queryParams.subscribe(params => {
      console.log(params)
      this.UserLogin = params['UserLogin']
      console.log(this.UserLogin)
      this.Token = params['Token']
      console.log(this.Token)
    })

    this.resetForm = new FormGroup({
      password: new FormControl('', [Validators.required]),
      passwordConf: new FormControl('', [Validators.required]),
    })

  }

  get password() {
    return this.resetForm.get('password')!
  }

  get passwordConf() {
    return this.resetForm.get('passwordConf')!
  }

  async submit(user: Isignin) {
    if(this.resetForm.invalid) {
      console.log('formulario invalido')
      return;
    } else {
      console.log(this.resetForm.value)

      const formData = new FormData();

      formData.append('password', user.password)
      let params = new URLSearchParams();
      params.append('UserLogin', this.UserLogin)
      formData.set('UserLogin', this.UserLogin)


      if(this.password.value !== this.passwordConf.value) {
        console.log('as senhas devem ser iguais')
      } else {
        await this.userRecoverService.resetPass(formData).subscribe((res) => {
          console.log(res) 
          this.alertSuccess = true
          setTimeout(() => {
            this.alertSuccess = false
              
            this.router.navigate(['/auth/login'])
            }, 5000)
        }, (error) => {
          console.log(error)
        })
  
        this.onSubmit.emit(this.resetForm.value);
      }
    }
  }

}
