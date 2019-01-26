import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http'
import { LoginService } from '../../services/login.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private submitted: boolean
  private loginForm: FormGroup
  private loginDetails = {
    email: "",
    password: ""
  }

  constructor(private _service: LoginService,
    private _router: Router) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      email: new FormControl("",
        [Validators.required,
        Validators.email]),
      password: new FormControl("",
        [Validators.required,
        Validators.maxLength(20)])
    })
  }

  public login(): any {

    if (this.loginForm.invalid)
    { this.loginForm.setValue({email:"",password:""})
      this.submitted = true
      console.log("invalid loginForm");
      return
    }

    this.loginDetails.email = (this.loginForm.value.email).toLowerCase()
    this.loginDetails.password = this.loginForm.value.password

    this._service.authenticate(this.loginDetails).subscribe(res => {
      if (res.login == "Success") {
        window.localStorage.setItem("loginDetails", JSON.stringify(res));
        this._router.navigate([""])
        console.log("login success")
        this.submitted = false
      }
      else {
        console.log("login failed")
        this.loginForm.setValue({email:"",password:""})
        this.submitted = true
      }
    }, (err: HttpErrorResponse) => {
      if (err.error instanceof Error)
        console.log("Client side error")
      else
        console.log("Server side error")

    })
  }

  public forgotPassword(){
    alert("forget password")
    this._router.navigate([""])
  }

}