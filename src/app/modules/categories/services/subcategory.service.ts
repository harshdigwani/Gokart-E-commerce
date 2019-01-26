import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SubcategoryService {

  private url = "http://localhost:8080/sub-categories"
  private categoryId
  constructor(private _http: HttpClient,
    private _route: ActivatedRoute) { }

  public getSubCategories() {
    this.categoryId = this._route.snapshot.queryParams.category
    return this._http.get(this.url + "?category=" + this.categoryId)//this.url,{"CategoryId":categoryId}
  }
}