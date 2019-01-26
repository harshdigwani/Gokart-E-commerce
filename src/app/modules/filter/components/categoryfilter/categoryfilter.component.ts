import { Component, OnInit } from '@angular/core';
import { CategoryfilterService } from '../../services/categoryfilter.service';
import { Router } from '@angular/router';

@Component({
  selector: 'categoryfilter',
  templateUrl: './categoryfilter.component.html',
  styleUrls: ['./categoryfilter.component.css']
})
export class CategoryfilterComponent implements OnInit {

  private brands
  constructor(private _service: CategoryfilterService,
    private _router: Router) { }

  ngOnInit() {
    this._service.getBrands().subscribe(res => this.brands = res)
  }
  public select(brand) {
    this._router.navigate(['products'],
      {
        queryParams: { brand: brand },
        queryParamsHandling: "merge"
      })
  }
}
