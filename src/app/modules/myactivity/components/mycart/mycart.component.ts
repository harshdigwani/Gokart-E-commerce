import { Component, OnInit } from '@angular/core';
import { MycartService } from '../../services/mycart.service'
import { Cart } from '../../../../shared/model/Cart'
import { Router } from '@angular/router';

@Component({
  selector: 'mycart',
  templateUrl: './mycart.component.html',
  styleUrls: ['./mycart.component.css']
})
export class MycartComponent implements OnInit {

  private cart
  private message
  constructor(private _service: MycartService,
    private _router: Router) { }

  ngOnInit() {
    this._service.getCart().subscribe(res => {
      if (!res.hasOwnProperty('message'))
        this.cart = res
      else
        this.message = Object.values(res)
    })
  }

  //Remove form cart method
  public remove(productId) {
    this._service.removeCart(productId).subscribe(res => this.message = Object.values(res))
  }

  //ADD TO CART FUNCTIONS
  public buyNow(productId) {
    //Redirect to payment Gatway
    alert("Payment Gatway is not available")
  }

  //productsDetails On select product
  public select(id) {
    alert("refresh")
    this._router.navigate(['product-details'],
      {
        queryParams: { id: id },
        queryParamsHandling: "merge"
      })
  }

}
