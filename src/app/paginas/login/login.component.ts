import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, NgForm, ReactiveFormsModule, Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  public login: string = ''
  public pass: string = ''
  public loginForm = new FormGroup ({
    login: new FormControl('', Validators.required),
    pass: new FormControl('', Validators.required)
  })
  
  public confirmaLogin(): void{
    console.log(`login: ${this.login} - pass: ${this.pass}`)
  }

  public submitLogin(fl: NgForm) {
    console.log("Formulario", fl.form.value)
  }

  public submitLogin2():void {
    console.log('Formulario', this.loginForm.value)
  }
}
