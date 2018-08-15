import { Component } from '@angular/core';
import { ProductsService } from '../products.service';
import { Product } from '../product';
import { formatCSV } from '../formatCSV';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html'
})

export class CreateComponent {
  model = new Product(null, '');
  categoryIds: string;

  constructor(private productsService: ProductsService) {}

  createNewProduct(model: Product) {
    this.productsService.createNewProduct(model).subscribe(() => {
      window.location.replace('/');
    });
  }

  submit() {
    const ids = formatCSV(this.categoryIds);
    const temp = Object.assign(this.model, {CategoryIds: ids});
    console.log(temp);
    this.createNewProduct(Object.assign(this.model, {CategoryIds: ids}));
  }
}
