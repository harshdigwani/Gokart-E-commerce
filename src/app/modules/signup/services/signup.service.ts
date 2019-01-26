import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { UserDetails }  from '../../../shared/model/UserDetails'

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  private readonly url = "http://localhost:8080/signup"
  constructor(private _http: HttpClient) { }

  public signup(userDetails:UserDetails): any {
    return this._http.post(this.url, userDetails)
  }


}
