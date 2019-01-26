import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from "@angular/http";
import { RouterModule, Routes } from "@angular/router";

import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'
import { ReactiveFormsModule } from '@angular/forms'

import { CategoryComponent } from './components/category/category.component'
import { CategoryService } from './services/category.service'
import { SubcategoryComponent } from './components/subcategory/subcategory.component'
import { SubcategoryService } from './services/subcategory.service'

export const routes: Routes = [
  { path: "", component: CategoryComponent },
  { path: "sub-category", component: SubcategoryComponent }
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
  declarations: [SubcategoryComponent, CategoryComponent],
  providers: [CategoryService, SubcategoryService],
  exports: [CategoryComponent, SubcategoryComponent]
})
export class CategoriesModule { }
