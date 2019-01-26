import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  private url = "http://localhost:8080/search"
  private urlpd = ""
  constructor(private _http: HttpClient) { }

  public getProducts(item: string) {
    return this._http.post(this.url, { "item": item })
  }
}
