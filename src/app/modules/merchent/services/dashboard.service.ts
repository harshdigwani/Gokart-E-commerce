import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  private url = "http://localhost:8081/merchent/adds"
  private accountUrl = "http://localhost:8081/merchent/account"
  constructor(private _http: HttpClient) { }

  public sellWithUs(item) {
    var obj = window.localStorage.getItem("loginDetails");
    if (obj == null)
      return this._http.post(this.url, { 'token': 'invalid' })
    else {
      var token = JSON.parse(obj).token;
      return this._http.post(this.url, { 'token': token, 'requestFor': 'sellWithUs', "item": item });
    }
  }

  public getAdds() {
    var obj = window.localStorage.getItem("loginDetails");
    if (obj == null)
      return this._http.post(this.url, { 'token': 'invalid' })
    else {
      var token = JSON.parse(obj).token;
      return this._http.post(this.url, { 'token': token, 'requestFor': 'getAdds' });
    }
  }

  public deleteAdd(item) {
    var obj = window.localStorage.getItem("loginDetails");
    if (obj == null)
      return this._http.post(this.url, { 'token': 'invalid' })
    else {
      var token = JSON.parse(obj).token;
      return this._http.post(this.url, { 'token': token, 'requestFor': 'deleteAdd', "item": item });
    }
  }

  public getAccountDetails() {
    var obj = window.localStorage.getItem("loginDetails");
    if (obj == null)
      return this._http.post(this.url, { 'token': 'invalid' })
    else {
      var token = JSON.parse(obj).token;
      return this._http.post(this.accountUrl, { 'token': token });
    }
  }

}
