import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './products-container/products-container.component';
import { HttpClient } from '@angular/common/http';

export interface Product {
  product: string;
  amount: number;
  price: number;
  code: number;

  // id: number;
  // name: string;




}

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  host = 'http://localhost:3000/shop/products';
  constructor(private httpClient: HttpClient) { }

  getProduct(): Observable<Product[]> {

    return this.httpClient.get<Product[]>(this.host);
  }
  addProduct(product: Product) {
    return this.httpClient.post(this.host, product);

  }
}
