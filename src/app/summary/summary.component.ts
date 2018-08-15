import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { Product } from '../product';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  providers: [ ProductsService ]
})

export class SummaryComponent implements OnInit {

  constructor(private productsService: ProductsService) { }
  public products: Product[];

  ngOnInit() {
    this.getProducts();
  }

  getProducts() {
    this.productsService.getAllProducts()
    .subscribe((products: Product[]) => {
      this.products = products;
    });
  }
}
