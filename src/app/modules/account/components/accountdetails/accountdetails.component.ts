import { Component, OnInit } from '@angular/core';
import { AccountdetailsService } from '../../services/accountdetails.service'
import { Router } from '@angular/router';
import { LoginService } from '../../../login/services/login.service'
import { LogoutService } from '../../../login/services/logout.service';

@Component({
  selector: 'accountdetails',
  templateUrl: './accountdetails.component.html',
  styleUrls: ['./accountdetails.component.css']
})
export class AccountdetailsComponent implements OnInit {

  private accountDetails: JSON
  private message
  constructor(private _service: AccountdetailsService,
    private _logoutService: LogoutService,
    private _router: Router) { }

  ngOnInit() {
    this._service.getAccountDetails().subscribe(res => {
      this.message = Object.values(res)
      if (this.message == "unauthorised user")
        this._router.navigate(['login'])
      else
        this.accountDetails = res
    })
  }

  //event fired or method execute on LOG OUT button clicked
  public logout() {
    this._logoutService.logout()
  }
}
