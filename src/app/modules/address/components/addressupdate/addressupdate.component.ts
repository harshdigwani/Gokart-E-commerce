import { Component, OnInit, Input, OnChanges, Output } from '@angular/core';
import { UserAddress } from '../../../../shared/model/UserAddress';
import { HttpErrorResponse } from '@angular/common/http'
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Cities } from '../../../../../assets/citiesIndia'
import { States } from '../../../../../assets/statesIndia';
import { Router } from '@angular/router';
import { AddressService } from '../../services/address.service';

@Component({
  selector: 'app-addressupdate',
  templateUrl: './addressupdate.component.html',
  styleUrls: ['./addressupdate.component.css']
})
export class AddressupdateComponent implements OnInit {


  private count: number = 0
  private selectedAddress
  private submitted: boolean = false
  private showFormError: boolean = false
  //take input decorator from address component and store  in address
  private address: UserAddress
  private cities = Cities
  private states = States
  private addressForm: FormGroup

  constructor(private _service: AddressService,
    private _router: Router) {
    //USING GETTER AND SETTER METHOD TO EXCHANGE DATA BTW COMPONENTS
    this.selectedAddress = this._service.getSelectedAddress()
  }

  ngOnInit() {

    if (this.selectedAddress == null)
      //condition for disabling entire form
      this.addressForm.disable()

    this.addressForm = new FormGroup({
      name: new FormControl(this.selectedAddress.name, [Validators.required, Validators.minLength(3)]),
      mobile: new FormControl(this.selectedAddress.mobile, [Validators.minLength(10),
      Validators.maxLength(10), Validators.pattern("[6-9][0-9]+")]),
      pincode: new FormControl(this.selectedAddress.pincode, [Validators.required, Validators.minLength(6), Validators.maxLength(6)]),
      house: new FormControl(this.selectedAddress.houseNo, Validators.required),
      colony: new FormControl(this.selectedAddress.colony, Validators.required),
      landmark: new FormControl(this.selectedAddress.landmark, Validators.required),
      state: new FormControl(this.selectedAddress.state, Validators.required),
      city: new FormControl(this.selectedAddress.city, Validators.required),
      type: new FormControl(this.selectedAddress.type, Validators.required)
    })
  }

  public getCities() {
    return Cities[this.addressForm.value.state]
  }

  public save() {
    //Client Side Validation
    if (this.addressForm.invalid) {
      this.showFormError = true
      return
    }
    else {
      this.submitted = false
      this.showFormError = false
    }

    this.address = {
      id: this.selectedAddress.addressId,
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

    //remove this line
    // console.log(this.address);

    //sending json object of updated address to the server using service
    this._service.updateAddress(this.address).subscribe(res => console.log(res),
      (err: HttpErrorResponse) => {
        if (err.error instanceof Error)
          console.log("Client side error")
        else
          console.log("Server side error")
      })
    alert('send success')
  }
}
