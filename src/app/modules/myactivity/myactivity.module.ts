import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpModule } from "@angular/http";
import { RouterModule, Routes } from "@angular/router";

import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'
import { ReactiveFormsModule } from '@angular/forms'

import { MycartComponent } from './components/mycart/mycart.component'
import { MycartService } from './services/mycart.service'
import { MywishlistComponent } from './components/mywishlist/mywishlist.component'
import { MywishlistService } from './services/mywishlist.service'

export const routes: Routes = [
  { path: "wishlist", component: MywishlistComponent },
  { path: "mycart", component: MycartComponent }
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
  declarations: [MycartComponent, MywishlistComponent],
  providers: [MycartService, MywishlistService],
  exports: [MycartComponent, MywishlistComponent]
})
export class MyactivityModule { }
