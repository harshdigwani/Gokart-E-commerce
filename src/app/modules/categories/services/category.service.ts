import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private url = "http://localhost:8080/categories"
  constructor(private _http: HttpClient) { }

  public getCategories() {
    return this._http.get(this.url)
  }
}
