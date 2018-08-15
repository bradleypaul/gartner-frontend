import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { Product } from '../product';
import { Observable } from 'rxjs';
import { getProductId } from '../urlParser';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  providers: [ ProductsService ]
})

export class DetailsComponent implements OnInit {

  constructor(private productsService: ProductsService) { }
  public details$: Observable<Product>;

  ngOnInit() {
    this.getProductDetails();
  }

  getProductDetails() {
    const id = getProductId();
    this.details$ = this.productsService.getProductDetails(id);
    console.log(this.details$);
  }
}
