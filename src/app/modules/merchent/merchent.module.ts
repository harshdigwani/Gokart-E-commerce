import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpModule } from "@angular/http";
import { RouterModule, Routes } from "@angular/router";

import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'
import { ReactiveFormsModule } from '@angular/forms'

import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginService } from './services/login.service'
import { RegisterService } from './services/register.service'
import { DashboardService } from './services/dashboard.service'

export const routes: Routes = [
  { path: "merchent/login", component: LoginComponent },
  { path: "merchent/register", component: RegisterComponent },
  { path: "merchent/dashboard", component: DashboardComponent }
]

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    RouterModule.forRoot(routes),
    FormsModule,
    HttpClientModule,
    RouterModule,
    ReactiveFormsModule],
  declarations: [LoginComponent, RegisterComponent, DashboardComponent],
  providers: [LoginService, DashboardService, RegisterService],
  exports: [LoginComponent, DashboardComponent, RegisterComponent]
})
export class MerchentModule { }
