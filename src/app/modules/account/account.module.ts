import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpModule } from "@angular/http";
import { RouterModule, Routes } from "@angular/router";

import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'
import { ReactiveFormsModule } from '@angular/forms'

import { AccountdetailsComponent } from './components/accountdetails/accountdetails.component';
import { AccountdetailsService } from './services/accountdetails.service'

export const routes: Routes = [
  { path: "account", component: AccountdetailsComponent },
]

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    RouterModule.forRoot(routes),
    FormsModule,
    HttpClientModule,
    RouterModule,
    ReactiveFormsModule
  ],
  declarations: [AccountdetailsComponent],
  providers: [AccountdetailsService],
  exports: [AccountdetailsComponent]
})
export class AccountModule { }
