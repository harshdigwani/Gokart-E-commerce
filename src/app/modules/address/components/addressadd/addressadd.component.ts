import { Component, OnInit } from '@angular/core';
import { UserAddress } from '../../../../shared/model/UserAddress';
import { HttpErrorResponse } from '@angular/common/http'
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Cities } from '../../../../../assets/citiesIndia'
import { States } from '../../../../../assets/statesIndia';
import { Router } from '@angular/router';
import { AddressService } from '../../services/address.service';

@Component({
  selector: 'app-addressadd',
  templateUrl: './addressadd.component.html',
  styleUrls: ['./addressadd.component.css']
})
export class AddressaddComponent implements OnInit {


  private submitted: boolean = false
  private showFormError: boolean = false
  private address: UserAddress
  private cities = Cities
  private states = States
  private result
  private addressForm: FormGroup

  constructor(private _service: AddressService,
    private _router: Router) {
    var obj = window.localStorage.getItem("loginDetails")
    if (JSON.parse(obj).token == "invalid") {
      alert("you are not logged in")
      this._router.navigate(['/login'])
    }
  }

  ngOnInit() {

    this.addressForm = new FormGroup({
      name: new FormControl("", [Validators.required, Validators.minLength(3)]),
      mobile: new FormControl("", [Validators.minLength(10),
      Validators.maxLength(10), Validators.pattern("[6-9][0-9]+")]),
      pincode: new FormControl("", [Validators.required, Validators.minLength(6), Validators.maxLength(6)]),
      house: new FormControl("", Validators.required),
      colony: new FormControl("", Validators.required),
      landmark: new FormControl("", Validators.required),
      state: new FormControl("", Validators.required),
      city: new FormControl("", Validators.required),
      type: new FormControl("", Validators.required)
    })

  }
  public getCities() {
    return Cities[this.addressForm.value.state]
  }

  public save() {
    if (this.addressForm.invalid) {
      this.showFormError = true
      return
    }
    else {
      this.submitted = false
      this.showFormError = false
    }

    this.address = {
      id: null,
      name: (this.addressForm.value.name).trim(),
      mobile: (this.addressForm.value.mobile).trim(),
      pincode: (this.addressForm.value.pincode).trim(),
      house: (this.addressForm.value.house).trim(),
      colony: (this.addressForm.value.colony).trim(),
      landmark: (this.addressForm.value.landmark).trim(),
      city: (this.addressForm.value.city).trim(),
      state: (this.addressForm.value.state).trim(),
      type: (this.addressForm.value.type).trim()
    }

    console.log(this.address);

    this._service.setAddress(this.address).subscribe(res => this.result = res, (err: HttpErrorResponse) => {
      if (err.error instanceof Error)
        console.log("Client side error")
      else
        console.log("Server side error")
    })
    alert('send success')
    console.log(this.result);
  }
}
