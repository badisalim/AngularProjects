import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Component({
  selector: 'app-basket3',
  templateUrl: './basket3.component.html',
  styleUrls: ['./basket3.component.css']
})
export class Basket3Component implements OnInit {

  httpClient: any;
  shop: any;
  constructor() { }

  ngOnInit() {
    this.httpClient.get("https://my-json-server.typicode.com/badisalim/AngularProjects/shop")
    //this.httpClient.get('http://localhost:3000/dbshop')
      .subscribe(shop => this.shop = shop);
  }

  public calculateBasketTotal(basket) {
    const productsTotal = basket.products.map(product => product.amount * product.price);
    return productsTotal.reduce((product1, product2) => product1 + product2);
  }

  public calculateBranchTotal(branch) {
    return branch.baskets.map(this.calculateBasketTotal).reduce((total1, total2) => total1 + total2);
  }
  public calculateProductTotal(branch) {
    return branch.baskets.map(this.calculateBasketTotal).reduce((total1, total2) => total1 + total2);
  }

}


