import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserLoginService } from 'src/app/services/user-login.service';
import { Isignin } from './signin.interface';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  @Output() onSubmit = new EventEmitter<Isignin>();

  signinForm!: FormGroup;

  
  
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
      });

      this.onSubmit.emit(this.signinForm.value);
     
      this.router.navigate(['/arealogada/primeiroAcesso'])

    }
  }
}
