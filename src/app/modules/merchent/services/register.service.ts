import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { MerchentDetails } from '../../../shared/model/MerchentDetails'

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  private readonly url = "http://localhost:8081/merchent/register"
  constructor(private _http: HttpClient) { }

  public register(merchentDetails: MerchentDetails): any {
    // console.log(merchentDetails)
    return this._http.post(this.url, merchentDetails)
  }

}
