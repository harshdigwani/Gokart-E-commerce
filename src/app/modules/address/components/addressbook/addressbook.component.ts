import { Component, OnInit } from '@angular/core';
import { UserAddress } from '../../../../shared/model/UserAddress';
import { AddressService } from '../../services/address.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addressbook',
  templateUrl: './addressbook.component.html',
  styleUrls: ['./addressbook.component.css']
})
export class AddressbookComponent implements OnInit {


  private updateTemp: boolean = false
  private address: UserAddress[]
  private message
  private selectedAddress: UserAddress
  constructor(private _service: AddressService,
              private _router: Router) { }

  ngOnInit() {
    this._service.getAddress().subscribe(res => {
      if (res.message === "success")
        this.address = res.address
      else
        this.message = res.message
    })
  }

  public update(address) {
    // this.selectedAddress = addr //not necessary
    //USING GETTER AND SETTER METHOD TO EXCHANGE DATA BTW COMPONENTS
    this._service.setSelectedAddress(address)
    this._router.navigate(["address-update"])
    this.updateTemp = true
  }

  public delete(id) {
    if (confirm("Are You Sure Want to delete Address?"))
      this._service.deleteAddress(id).subscribe(res => this.message = res.message)
  }
}
