import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { tokenKey } from '@angular/core/src/view';

@Injectable({
  providedIn: 'root'
})
export class AccountdetailsService {

  private readonly url = "http://localhost:8080/account"
  constructor(private _http: HttpClient) { }

  public getAccountDetails(): any {
    var obj = window.localStorage.getItem("loginDetails");
    if (obj == null)
      return this._http.post(this.url, { 'token': 'invalid' })
    var token = JSON.parse(obj).token;
    return this._http.post(this.url, { 'token': token });
  }
}
