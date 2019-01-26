import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class MywishlistService {
  private url = "http://localhost:8080/wishlist"
  constructor(private _http: HttpClient) { }

  public getWishlist() {
    var obj = window.localStorage.getItem("loginDetails");
    if (obj == null)
      return this._http.post(this.url, { 'token': 'invalid' })
    else {
      var token = JSON.parse(obj).token;
      return this._http.post(this.url, { 'token': token, 'requestFor': 'getWishlist' });
    }
  }

  public addWishlist(wishlist) {
    var obj = window.localStorage.getItem("loginDetails");
    if (obj == null)
      return this._http.post(this.url, { 'token': 'invalid' })
    else {
      var token = JSON.parse(obj).token;
      return this._http.post(this.url, { 'token': token, 'requestFor': 'addWishlist', "wishlist": wishlist });
    }
  }

  public removeWishlist(wishlist) {
    var obj = window.localStorage.getItem("loginDetails");
    if (obj == null)
      return this._http.post(this.url, { 'token': 'invalid' })
    else {
      var token = JSON.parse(obj).token;
      return this._http.post(this.url, { 'token': token, 'requestFor': 'removeWishlist', "wishlist": wishlist });
    }
  }

}
