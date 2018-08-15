import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { Category } from '../category';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html'
})

export class CategoriesComponent implements OnInit {

  constructor(private productsService: ProductsService) { }

  categories: Category[];

  ngOnInit() {
    this.getCategories();
  }

  getCategories() {
    this.productsService.getCategories()
    .subscribe((categories: Category[]) => {
      this.categories = categories;
    });
  }
}
