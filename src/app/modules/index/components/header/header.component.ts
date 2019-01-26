import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/modules/categories/services/category.service';
import { Router } from '@angular/router';
import { SubcategoryService } from 'src/app/modules/categories/services/subcategory.service';
import { SearchService } from 'src/app/modules/search/services/search.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  private value
  private message
  private category
  constructor(private _categoryService: CategoryService,
    private _subcategoryService: SubcategoryService,
    private _searchService: SearchService,
    private _router: Router) { }

  ngOnInit() {
    //fetch all category
    this._categoryService.getCategories().subscribe(res => {
      if (res.hasOwnProperty)
        this.category = res
      else
        this.message = "Sorry Category Is Wrong"
    })

  }

  public search(value) {
    console.log("Search method from header called")
    this._router.navigate(['search/'+value])
    location.reload()  }

  public categorySelect(category) {
    alert("refresh")
    //Navigate to home ['.'] and navigate to same url []
    this._router.navigate(['sub-category'],
      {
        //UPDATING QUERY PARAMETER
        queryParams: { category: category },
        queryParamsHandling: "merge"
      })
  }
}
