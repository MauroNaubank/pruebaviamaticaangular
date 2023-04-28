import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {

  miformulario : FormGroup = this.fb.group({
    email : ['', [Validators.required, Validators.minLength(5)]],
    password : ['', [Validators.required, Validators.minLength(5)]]
  });
  constructor(private fb : FormBuilder,
    private route : Router
    ){
  }

  login(){

    const {email, password} = this.miformulario.value;

    if(email == "admin" && password == "admin")
    {
      localStorage.setItem('tokenPrueba', "soy el token mas seguro que existe xdd" )
      console.log("correcto")
      this.route.navigateByUrl('/paises') 
    }
    else{
      console.log("incorrecto")
      this.route.navigateByUrl('')
    }
    
  }

}
