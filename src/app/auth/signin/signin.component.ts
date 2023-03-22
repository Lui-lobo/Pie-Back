import { Component, OnInit, Input, Output, EventEmitter, Inject, Optional } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserLoginService } from 'src/app/services/user-login.service';
import { Isignin } from './signin.interface';
import { HttpClient, HttpClientModule, HttpStatusCode } from '@angular/common/http';
import { catchError } from 'rxjs';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  @Optional()  @Inject(Response) private response: Response
  @Output() onSubmit = new EventEmitter<Isignin>();

  signinForm!: FormGroup;
  alert:boolean = false;
  alertIncorrect:boolean = false;
  
  
  btnEntrar:string = "registrar";
  btnLink:string = "/register"

  constructor(private userLoginService: UserLoginService, private router: Router, private http: HttpClient) { 

  }

  ngOnInit(): void {

  this.signinForm = new FormGroup({
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  })

  }

  get email() {
    return this.signinForm.get('email')!
  }

  get password() {
    return this.signinForm.get('password')!
  }

  async submit(user: Isignin) {
    if(this.signinForm.invalid) {
      console.log("Formulario Invalido");
      return;
    } else {
      console.log(this.signinForm.value);

      const formData = new FormData();

      formData.append('email', user.email);
      formData.append('password', user.password);

      await this.userLoginService.authenticateUser(formData).subscribe((res) => {
        console.log(res);
        let response = JSON.stringify(res)
        localStorage.setItem('Token', JSON.parse(response).token)
      }, (error) => {
        console.log(error.status)
        if(error.status == 404) {
          this.alert = true
          setTimeout(() => {
            this.alert = false
          }, 5000)
        } else if (error.status == 401) {
          this.alertIncorrect = true
          setTimeout(() => {
            this.alertIncorrect = false
          }, 5000)
        }
      });

      
      this.onSubmit.emit(this.signinForm.value);
     
      this.router.navigate(['/arealogada/primeiroAcesso'])

    }
  }
}
