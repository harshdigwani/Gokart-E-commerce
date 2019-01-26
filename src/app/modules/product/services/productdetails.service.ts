import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ProductdetailsService {

  private url = "http://localhost:8080/product-details/"
  private id
  constructor(private _http: HttpClient,
    private _route: ActivatedRoute) { }

  public getProductDetails() {
    this.id = this._route.snapshot.queryParams.id
    console.log("Product ID : " + this.id)
    return this._http.get(this.url +
      "?id=" + this.id)
  }
}
