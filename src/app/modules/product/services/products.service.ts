import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private url = "http://localhost:8080/products/"
  private categoryId
  private subCategoryId
  private brand
  constructor(private _http: HttpClient,
    private _route: ActivatedRoute) { }

  public getProducts() {
    this.categoryId = this._route.snapshot.queryParams.category
    this.subCategoryId = this._route.snapshot.queryParams.subcategory
    this.brand = this._route.snapshot.queryParams.brand
    return this._http.get(this.url + 
      "?category=" + this.categoryId + 
      "&subcategory=" + this.subCategoryId + 
      "&brand=" + this.brand)
  }
}