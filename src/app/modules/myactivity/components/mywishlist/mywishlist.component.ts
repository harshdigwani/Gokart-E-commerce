import { Component, OnInit } from '@angular/core';
import { MywishlistService } from '../../services/mywishlist.service';
import { MycartService } from '../../services/mycart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'mywishlist',
  templateUrl: './mywishlist.component.html',
  styleUrls: ['./mywishlist.component.css']
})
export class MywishlistComponent implements OnInit {
  private wishlist
  private message
  constructor(private _service: MywishlistService,
    private _cartService: MycartService,
    private _router: Router) { }

  ngOnInit() {
    this._service.getWishlist().subscribe(res => {
      if (!res.hasOwnProperty('message'))
        this.wishlist = res
      else
        this.message = Object.values(res)
    })
  }

  public remove(productId) {
    this._service.removeWishlist(productId).subscribe(res => this.message = Object.values(res))
  }

  //ADD TO CART FUNCTIONS
  public addToCart(id) {
    this._cartService.addCart(id).subscribe(res => {
      this.message = Object.values(res)
      if (this.message == "unauthorised user")
        this._router.navigate(['login'])
    })
  }
}
