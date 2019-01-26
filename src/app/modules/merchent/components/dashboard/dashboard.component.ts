import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../services/dashboard.service'
import { Router } from '@angular/router';
import { MerchentDetails } from 'src/app/shared/model/MerchentDetails';
import { LogoutService } from '../../services/logout.service';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  private adds
  private message
  private merchentDetails
  constructor(private _service: DashboardService,
    private _router: Router,
    private _logoutService: LogoutService) { }

  ngOnInit() {

    //Getting account details
    this._service.getAccountDetails().subscribe(res => {
      this.message = Object.values(res)
      if (this.message == "unauthorised")
        this._router.navigate(['merchent/login'])
      else
        this.merchentDetails = res
      this.message = null
    })

    //Getting Addvertisement details
    this._service.getAdds().subscribe(res => {
      this.message = Object.values(res)
      if (this.message == "unauthorised")
        this._router.navigate(['merchent/login'])
      else
        this.adds = res
      this.message = null
    })
  }

  public logout() {
    this._logoutService.logout()
  }

  public select(id) {
    alert("refresh")
    this._router.navigate(['product-details'],
      {
        queryParams: { id: id },
        queryParamsHandling: "merge"
      })
  }

  public deleteAdd(id) {

    if (!confirm("Are you sure u want to delete add"))
      return
    this._service.deleteAdd(id).subscribe(res => {
      this.message = Object.values(res)
      if (this.message == "unauthorised")
        this._router.navigate(['merchent/login'])
      else if (res.hasOwnProperty('message'))
        this.message = Object.values(res)
    })
  }

  public sellMoreItem() {
    this._router.navigate([''])
  }
}
