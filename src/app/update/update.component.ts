import { Component } from '@angular/core';
import { ProductsService } from '../products.service';
import { Product } from '../product';
import { getProductId } from '../urlParser';
import { formatCSV } from '../formatCSV';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html'
})

export class UpdateComponent {
  id = getProductId();
  model = new Product(this.id, '');
  categoryIds: string;

  constructor(private productsService: ProductsService) { }

  updateExistingProduct(model: Product, categoryIds: number[]) {
    this.productsService.updateExistingProduct(model.ProductId, {
      'Name': model.Name,
      'Description': model.Description,
      'Url': model.Url,
      'CategoryIds': categoryIds
    }).subscribe(() => {
      window.location.replace('/');
    });
  }

  submit() {
    const ids = formatCSV(this.categoryIds);
    this.updateExistingProduct(this.model, ids);
  }
}
