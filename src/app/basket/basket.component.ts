import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SHOPS } from './basketData';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent implements OnInit {
  shop = SHOPS;

  constructor() { }

  ngOnInit() {

  }

  public calculateBasketTotal(basket) {
    const productsTotal = basket.products.map(product => product.amount * product.price);
    return productsTotal.reduce((product1, product2) => product1 + product2);
  }

  public calculateBranchTotal(branch) {
    return branch.baskets.map(this.calculateBasketTotal).reduce((total1, total2) => total1 + total2);
  }


  public calculateProductTotal(product) {
    return product.products.product.map(this.calculateBasketTotal).reduce((total1, total2) => total1 + total2);
  }

}


