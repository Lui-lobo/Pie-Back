import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from '../user.interface';

import { UserRegisterService } from 'src/app/services/user-register.service';


@Component({
  selector: 'app-register-auth',
  templateUrl: './register-auth.component.html',
  styleUrls: ['./register-auth.component.scss']
})
export class RegisterAuthComponent implements OnInit {
  @Output() onSubmit = new EventEmitter<User>();

  registerForm!: FormGroup;

  tipoUsers = [
    {id: '1', name: 'Usuario Comum'},
    {id: '2',name: 'Instituição'}
  ]

  public typeUserId:number;

  constructor(private userRegisterService: UserRegisterService) { }

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      id: new FormControl(''),
      idStatus: new FormControl('2'),
      idTipoUser: new FormControl('', [Validators.required]),
      Login: new FormControl('', [Validators.required]),
      confLogin: new FormControl('', [Validators.required]),
      PassWord: new FormControl('', [Validators.required]),
      confPassWord: new FormControl('', [Validators.required]),
      HashPass: new FormControl(''),
    })
  }

  get Login() {
    return this.registerForm.get('Login')!;
  }

  get confLogin() {
    return this.registerForm.get('confLogin')!;
  }
  
  get PassWord() {
    return this.registerForm.get('PassWord')!;
  }

  get confPassWord() {
    return this.registerForm.get('confPassWord')!;
  }

  get HashPass() {
    return this.registerForm.get('confPassWord')!;
  }

  get idTipoUser() {
    return this.registerForm.get('idTipoUser')!;
  }

  async createHandler(user: User) {
    
 
    
  }

  async submit(user: User) {
    if(this.registerForm.invalid) {
      console.log("deu ruim");
      return;
    } 
      console.log(this.registerForm.value);

      const formData = new FormData();

      formData.append('idStatus', user.idStatus);
      formData.append('Login', user.Login);
      formData.append('password', user.password);
      formData.append('HashPass', user.HashPass);
      formData.append('idTipoUser', user.idTipoUser);
  
      await this.userRegisterService.createUser(formData).subscribe((res) => {
        console.log(res);
      });

      this.onSubmit.emit(this.registerForm.value);
  }

}
