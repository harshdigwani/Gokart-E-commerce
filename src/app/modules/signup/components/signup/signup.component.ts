import { Component, OnInit } from '@angular/core';
import { UserDetails } from '../../../../shared/model/UserDetails'
import { SignupService } from '../../services/signup.service';
import { HttpErrorResponse } from '@angular/common/http'
import { FormBuilder, FormGroup, FormControl, Validators, NgForm } from '@angular/forms'
import { Router } from '@angular/router';

@Component({
  selector: 'signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  private submitted : boolean = false
  private showFormError : boolean = false
  private isErrorMessage : boolean = false
  private errorMessage : string 
  private signupForm: FormGroup
  private userDetails: UserDetails
  constructor(private _service : SignupService,
              private _router : Router) { }

  ngOnInit() {
    
    this.signupForm = new FormGroup({
      firstName: new FormControl("", [Validators.required,
      Validators.minLength(3)]),
      lastName: new FormControl("", Validators.required),
      email: new FormControl("", Validators.email),
      mobile: new FormControl("", [Validators.minLength(10),
      Validators.maxLength(10),Validators.pattern("[6-9][0-9]+")]),
      password: new FormGroup({
        pass: new FormControl("",[Validators.required,Validators.minLength(6)]),
        cpass: new FormControl("",[Validators.required,Validators.minLength(6)])
      })
    })
  }

  public signup() {

    if(this.signupForm.invalid)
      { this.showFormError = true
        return
      }
    if (this.signupForm.value.password.pass != this.signupForm.value.password.cpass) {
        this.submitted = true
        this.signupForm.controls.password.setValue({
          pass:"",
          cpass:""
        })
        return
      }
    else{
      this.submitted = false  
      this.showFormError = false
    }
    alert("signup requested")
    this.userDetails = {
      firstName: (this.signupForm.value.firstName).toLowerCase(),
      lastName: (this.signupForm.value.lastName).toLowerCase(),
      email: (this.signupForm.value.email).toLowerCase(),
      mobile: this.signupForm.value.mobile,
      password: this.signupForm.value.password.pass,
    }

    this._service.signup(this.userDetails).subscribe(res => {
      if (res.signup == "Success") {
          this._router.navigate(["/login"]);
        alert("Registration Succes")
      }
      else {
        alert("Registration failed");
        this.isErrorMessage = true
        this.errorMessage = res.message
        console.log(res.message);
      }
    }, (err: HttpErrorResponse) => {
      if (err.error instanceof Error)
        console.log("Client side error")
      else
        console.log("Server side error")

    })
  }
}
