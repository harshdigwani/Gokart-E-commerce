import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from "@angular/http";
import { RouterModule, Routes } from "@angular/router";

import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'
import { ReactiveFormsModule } from '@angular/forms'

import { CategoryfilterComponent } from './components/categoryfilter/categoryfilter.component'
import { CategoryfilterService } from './services/categoryfilter.service';
import { ProductfilterComponent } from './components/productfilter/productfilter.component'
import { ProductfilterService } from './services/productfilter.service';
// import { }

export const routes: Routes = [
  { path: "category-filter", component: CategoryfilterComponent },
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
  declarations: [CategoryfilterComponent, ProductfilterComponent],
  providers: [CategoryfilterService, ProductfilterService],
  exports: [CategoryfilterComponent, ProductfilterComponent]
})
export class FilterModule { }
