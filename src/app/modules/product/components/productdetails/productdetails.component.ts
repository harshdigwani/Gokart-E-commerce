import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'
import { ProductdetailsService } from '../../services/productdetails.service';
import { DashboardService } from 'src/app/modules/merchent/services/dashboard.service';
import { MycartService } from 'src/app/modules/myactivity/services/mycart.service';
import { MywishlistService } from 'src/app/modules/myactivity/services/mywishlist.service';

@Component({
  selector: 'productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent implements OnInit {

  private product
  private message
  private merchent
  constructor(private _service: ProductdetailsService,
    private _cartService: MycartService,
    private _dashboardService: DashboardService,
    private _wishlistService: MywishlistService,
    private _router: Router,
    private _route: ActivatedRoute) { }

  ngOnInit() {
    this._service.getProductDetails().subscribe(res => {
      if (!res.hasOwnProperty('message'))
        this.product = res
      else
        this.message = Object.values(res)
    })

    var obj = window.localStorage.getItem("loginDetails")
    if (obj == null)
      this.merchent = false
    else if (!(JSON.parse(obj).hasOwnProperty('merchent')))
      this.merchent = false
    else
      this.merchent = JSON.parse(obj).merchent
  }

  public addToCart(id) {
    this._cartService.addCart(id).subscribe(res => {
      this.message = Object.values(res)
      if (this.message == "unauthorised user")
        this._router.navigate(['login'])
    })
  }

  public addToWishlist(id) {
    this._wishlistService.addWishlist(id).subscribe(res => {
      this.message = Object.values(res)
      if (this.message == "unauthorised user")
        this._router.navigate(['login'])
    })
  }

  public select(id) {
    alert("refresh")
    this._router.navigate(['product-details'],
      {
        queryParams: { id: id },
        queryParamsHandling: "merge"
      })
  }

  public sell(id) {
    alert("Thanks for selling with us")
    this._dashboardService.sellWithUs(id).subscribe(res => {
      this.message = Object.values(res)
      if (this.message == "unauthorised")
        // if (window.localStorage.getItem("loginDetails") == null)
        this._router.navigate(['merchent/login'])
    })
  }

  public buyNow(id)
  {
    alert("Payment Gateway currently not working");
  }

}

