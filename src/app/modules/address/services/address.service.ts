import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class AddressService {

  //this service have change event so any component can use that method to transfer data
  // @Output() change: EventEmitter<any> = new EventEmitter();
  private selectedAddress
  private readonly url = "http://localhost:8080/address"
  constructor(private _http: HttpClient) { }

  public getAddress(): any {
    var obj = window.localStorage.getItem("loginDetails");
    if (obj == null)
      return this._http.post(this.url, { 'token': 'invalid' })
    else {
      var token = JSON.parse(obj).token;
      return this._http.post(this.url, { 'token': token, 'requestFor': 'getAddress' });
    }
  }

  public setAddress(address): any {
    var obj = window.localStorage.getItem("loginDetails");
    if (obj == null)
      return this._http.post(this.url, { 'token': 'invalid' })
    else {
      var token = JSON.parse(obj).token;
      return this._http.post(this.url, { 'token': token, 'requestFor': 'setAddress', 'addressDetails': address });
    }
  }

  public updateAddress(address): any {
    var obj = window.localStorage.getItem("loginDetails");
    if (obj == null)
      return this._http.post(this.url, { 'token': 'invalid' })
    else {
      var token = JSON.parse(obj).token;
      return this._http.post(this.url, { 'token': token, 'requestFor': 'updateAddress', 'addressDetails': address });
    }
  }

  public deleteAddress(id): any {
    var obj = window.localStorage.getItem("loginDetails");
    if (obj == null)
      return this._http.post(this.url, { 'token': 'invalid' })
    else {
      var token = JSON.parse(obj).token;
      return this._http.post(this.url, { 'token': token, 'requestFor': 'deleteAddress', 'addressId': id });
    }
  }

  //setter method for selected address
  public setSelectedAddress(address) {
    this.selectedAddress = address
  }

  //getter method for selected address
  public getSelectedAddress(): any {
    return this.selectedAddress
  }
}