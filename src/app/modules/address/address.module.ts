import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpModule } from "@angular/http";
import { RouterModule, Routes } from "@angular/router";

import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'
import { ReactiveFormsModule } from '@angular/forms'

import { AddressbookComponent } from './components/addressbook/addressbook.component';
import { AddressupdateComponent } from './components/addressupdate/addressupdate.component';
import { AddressaddComponent } from './components/addressadd/addressadd.component';
import { AddressService } from './services/address.service'

export const routes: Routes = [
  { path: "address", component: AddressbookComponent },
  { path: "address-add", component: AddressaddComponent },
  { path: "address-update", component: AddressupdateComponent }
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
  declarations: [AddressbookComponent, AddressupdateComponent, AddressaddComponent],
  providers: [AddressService],
  exports: [AddressbookComponent, AddressaddComponent, AddressupdateComponent]
})
export class AddressModule { }
