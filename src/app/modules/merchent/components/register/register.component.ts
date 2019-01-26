import { Component, OnInit } from '@angular/core';
import { MerchentDetails } from '../../../../shared/model/MerchentDetails'
import { RegisterService } from '../../services/register.service'
import { HttpErrorResponse } from '@angular/common/http'
import { FormBuilder, FormGroup, FormControl, Validators, NgForm } from '@angular/forms'
import { Router } from '@angular/router';

@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  private submitted: boolean = false
  private showFormError: boolean = false
  private isErrorMessage: boolean = false
  private errorMessage: string
  private registerForm: FormGroup
  private merchentDetails: MerchentDetails
  constructor(private _service: RegisterService,
    private _router: Router) { }

  ngOnInit() {

    this.registerForm = new FormGroup({
      name: new FormControl("", [Validators.required,
      Validators.minLength(3)]),
      shopName: new FormControl("", Validators.required),
      email: new FormControl("", Validators.email),
      mobile: new FormControl("", [Validators.minLength(10),
      Validators.maxLength(10), Validators.pattern("[6-9][0-9]+")]),
      password: new FormGroup({
        pass: new FormControl("", [Validators.required, Validators.minLength(6)]),
        cpass: new FormControl("", [Validators.required, Validators.minLength(6)])
      })
    })
  }
//method called on register button clicked
  public register() {

    if (this.registerForm.invalid) {
      this.showFormError = true
      return
    }
    if (this.registerForm.value.password.pass != this.registerForm.value.password.cpass) {
      this.submitted = true
      this.registerForm.controls.password.setValue({
        pass: "",
        cpass: ""
      })
      return
    }
    else {
      this.submitted = false
      this.showFormError = false
    }
    alert("register requested")
    this.merchentDetails = {
      name: (this.registerForm.value.name).toLowerCase().trim(),
      shopName: (this.registerForm.value.shopName).toLowerCase().trim(),
      email: (this.registerForm.value.email).toLowerCase().trim(),
      mobile: this.registerForm.value.mobile,
      password: this.registerForm.value.password.pass,
    }

    this._service.register(this.merchentDetails).subscribe(res => {
      if (res.message == "success") {
        this._router.navigate(["/login"]);
        alert("Registration Success")
      }
      else {
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
