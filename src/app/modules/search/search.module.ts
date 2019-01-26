import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpModule } from "@angular/http";
import { RouterModule, Routes } from "@angular/router";

import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'
import { ReactiveFormsModule } from '@angular/forms'

import { SearchComponent } from './components/search/search.component';
import { SearchService } from './services/search.service'

export const routes: Routes = [
  { path: "search", component: SearchComponent },
  { path: "search/:item", component: SearchComponent },
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
  declarations: [SearchComponent],
  providers: [SearchService],
  exports: [SearchComponent]
})
export class SearchModule { }
