import { Component, OnInit, } from '@angular/core';
import { Product } from '../../../../shared/model/Product'
import { ActivatedRoute } from '@angular/router';
import { SearchService } from '../../services/search.service';

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  private item
  private message
  private products
  constructor(private _service: SearchService,
    private _route: ActivatedRoute) {
    this.item = this._route.snapshot.params['item']
  }

  ngOnInit() {
    this.search()
  }

  // ngDoCheck() {
  //   if (this.item != this._route.snapshot.params['item'])
  //     console.log("do check");
      
  // }

  search() {
    this._service.getProducts((this.item).toLowerCase()).subscribe(res => {
      if (!res.hasOwnProperty('message'))
        this.products = res
      else
        this.message = Object.values(res)
    })
  }
}
