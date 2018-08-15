import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable} from 'rxjs';
import { Product } from './product';
import { ApiKey } from './apiKey';

@Injectable({
  providedIn: 'root'
})

export class ProductsService {
  constructor(private http: HttpClient) { }

  baseUrl = 'https://gdm-interview-api.azurewebsites.net/api/v1';

  productsUrl = `${this.baseUrl}/Products`;
  categoriesUrl = `${this.baseUrl}/Categories`;

  headers = new HttpHeaders({'Authorization': ApiKey});

  getCategories(): Observable<Object[]> {
    return this.http.get<Object[]>(this.categoriesUrl, {headers: this.headers});
  }

  getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.productsUrl, {headers: this.headers});
  }

  getProductDetails(id: number): Observable<Product> {
    return this.http.get<Product>(`${this.productsUrl}/${id}`, {headers: this.headers});
  }

  createNewProduct(newProduct: Product): Observable<Object> {
    return this.http.post<Product>(this.productsUrl, newProduct, {headers: this.headers});
  }

  updateExistingProduct(id: number, updatedProduct: Object): Observable<Object> {
    console.log(updatedProduct);
    return this.http.put(`${this.productsUrl}/${id}`, updatedProduct, {headers: this.headers});
  }
}
