import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LogoutService {

  constructor(private _router: Router) { }

  public logout() {
    alert("logout")
    window.localStorage.setItem('loginDetails', JSON.stringify({ 'token': 'invalid' }))
    console.log("Logout Success");
    //this._router.onSameUrlNavigation
    this._router.navigate(["/merchent/login"])
  }
}
