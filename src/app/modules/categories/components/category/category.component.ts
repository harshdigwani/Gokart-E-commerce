import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../services/category.service';
import { Router } from '@angular/router';

@Component({
  selector: 'category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  private category
  private message
  constructor(private _service: CategoryService,
    private _router: Router) { }

  ngOnInit() {
    this._service.getCategories().subscribe(res => {
      if (res.hasOwnProperty)
        this.category = res
      else
        this.message = "Sorry Category Is Wrong"
    })
  }

  public select(category) {
    //Navigate to home ['.'] and navigate to same url []
    this._router.navigate(['sub-category'],
      {
        //UPDATING QUERY PARAMETER
        queryParams: { category: category },
        queryParamsHandling: "merge"
      })
  }
}
