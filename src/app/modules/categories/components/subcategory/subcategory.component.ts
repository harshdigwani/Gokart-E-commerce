import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SubcategoryService } from '../../services/subcategory.service';

@Component({
  selector: 'subcategory',
  templateUrl: './subcategory.component.html',
  styleUrls: ['./subcategory.component.css']
})
export class SubcategoryComponent implements OnInit {

  //take id as route param or querry parameter 
  private categoryID
  private subCategory
  constructor(private _service: SubcategoryService,
    private _router: Router) { }

  ngOnInit() {
    this._service.getSubCategories().subscribe(res => this.subCategory = (res))
  }
  public select(subCategory) {
    this._router.navigate(['category-filter'],
      {
        queryParams: { subcategory: subCategory },
        queryParamsHandling: "merge"
      })
  }
}