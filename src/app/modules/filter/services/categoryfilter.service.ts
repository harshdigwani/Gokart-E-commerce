import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CategoryfilterService {

  private url = "http://localhost:8080/filter/"
  private categoryId
  private subCategoryId
  constructor(private _http: HttpClient,
    private _route: ActivatedRoute) { }

  public getBrands() {
    this.categoryId = this._route.snapshot.queryParams.category
    this.subCategoryId = this._route.snapshot.queryParams.subcategory
    return this._http.get(this.url +
      "?category=" + this.categoryId +
      "&subcategory=" + this.subCategoryId)
  }
}