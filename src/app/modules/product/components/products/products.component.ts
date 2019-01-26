import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'
import { ProductsService } from '../../services/products.service'
import { MycartService } from 'src/app/modules/myactivity/services/mycart.service';
import { MywishlistService } from 'src/app/modules/myactivity/services/mywishlist.service';
import { log } from 'util';
import { DashboardService } from 'src/app/modules/merchent/services/dashboard.service';
// import { Product } from '../../../../shared/model/Product'

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  //take input from route.param
  private products
  private message
  private merchent: boolean = false
  constructor(private _service: ProductsService,
    private _cartService: MycartService,
    private _wishlistService: MywishlistService,
    private _dashboardService: DashboardService,
    private _route: ActivatedRoute,
    private _router: Router) {
  }

  ngOnInit() {
    this._service.getProducts().subscribe(res => {
      if (!res.hasOwnProperty('message'))
        this.products = res
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

  public addProduct(){
    alert("attach mail and send to our executive | nodemailer")
  }
}
