import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from "@angular/http";
import { RouterModule, Routes } from "@angular/router";

import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'
import { ReactiveFormsModule } from '@angular/forms'

import { ProductsComponent } from './components/products/products.component';
import { ProductsService } from './services/products.service'
import { ProductdetailsComponent } from './components/productdetails/productdetails.component';
import { ProductdetailsService } from './services/productdetails.service'

export const routes: Routes = [
  { path: "products", component: ProductsComponent },
  { path: "product-details", component: ProductdetailsComponent }
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
  declarations: [ProductsComponent, ProductdetailsComponent],
  providers: [ProductsService, ProductdetailsService],
  exports: [ProductsComponent, ProductdetailsComponent]
})
export class ProductModule { }
