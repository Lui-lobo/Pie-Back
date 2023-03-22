import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { UserRecoverService } from 'src/app/services/user-recover.service';
import { Isignin } from '../signin/signin.interface';
import { User } from '../user.interface';

@Component({
  selector: 'app-recover-pass',
  templateUrl: './recover-pass.component.html',
  styleUrls: ['./recover-pass.component.scss']
})
export class RecoverPassComponent implements OnInit {
  @Output() onSubmit = new EventEmitter<Isignin>();
  alert:boolean = false;
  alertSucess:boolean = false;

  recoverForm!: FormGroup;

  constructor(private route: Router, private http: HttpClient, private userRecoverService: UserRecoverService) { }

  ngOnInit(): void {

    this.recoverForm = new FormGroup({
      email: new FormControl('', [Validators.required]),
    })
  
  }

  get email() {
    return this.recoverForm.get('email')!
  }

  async submit(user: Isignin) {

    if(this.recoverForm.invalid) {
      console.log("Formulario Invalido");
      return;
    } else {
      console.log(this.recoverForm.value);

      const formData = new FormData();

      formData.append('email', user.email);

      await this.userRecoverService.recoverUser(formData).subscribe((res) => {
        console.log(res)
        this.alertSucess = true
        setTimeout(() => {
          this.alertSucess = false
          }, 3000)
      }, (error) => {
        console.log(error.status)
        if(error.status == 401) {
          this.alert = true
          setTimeout(() => {
          this.alert = false
          }, 3000)
        }
      })

   
      this.onSubmit.emit(this.recoverForm.value);
    }
  }

}
