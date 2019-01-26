import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private readonly url = "http://localhost:8081/merchent/login"
  constructor(private _http: HttpClient) { }

  public authenticate(loginDetails): any {
    return this._http.post(this.url, loginDetails)
  }

}
