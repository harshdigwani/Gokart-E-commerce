import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class MycartService {

  private url = "http://localhost:8080/mycart"
  constructor(private _http: HttpClient) { }

  public getCart() {
    var obj = window.localStorage.getItem("loginDetails");
    if (obj == null)
      return this._http.post(this.url, { 'token': 'invalid' })
    else {
      var token = JSON.parse(obj).token;
      return this._http.post(this.url, { 'token': token, 'requestFor': 'getCart' });
    }
  }

  public addCart(cart) {
    var obj = window.localStorage.getItem("loginDetails");
    if (obj == null)
      return this._http.post(this.url, { 'token': 'invalid' })
    else {
      console.log("request send to server");

      var token = JSON.parse(obj).token;
      return this._http.post(this.url, { 'token': token, 'requestFor': 'addCart', "cart": cart });
    }
  }

  public removeCart(cart) {
    var obj = window.localStorage.getItem("loginDetails");
    if (obj == null)
      return this._http.post(this.url, { 'token': 'invalid' })
    else {
      var token = JSON.parse(obj).token;
      return this._http.post(this.url, { 'token': token, 'requestFor': 'removeCart', "cart": cart });
    }
  }

}
