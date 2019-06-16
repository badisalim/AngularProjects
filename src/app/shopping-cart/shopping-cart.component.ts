import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  HttpClient: any;
  data: any;

  constructor(private httpClient: HttpClient) { }

  // ngOnInit() {
  //   this.httpClient.get("https://my-json-server.typicode.com/badisalim/AngularProjects/shop")
  //     .subscribe(shop => this.shop = shop);
  // }


  ngOnInit() {
    this.httpClient.get('http://localhost:4000/shop/invoice')
      .subscribe(data => {
        console.log(data);
        this.data = data;
      });
  }
  // invoice = [{
  //   name: 'Apple',
  //   quantity: 3,
  //   price: 1.10
  // },
  // {
  //   name: 'Orange',
  //   quantity: 2,
  //   price: 1.99
  // },
  // {
  //   name: 'Melon',
  //   quantity: 1,
  //   price: 3.22
  // }
  // ];
  // constructor() { }

  // ngOnInit() {
  // }

  addItem() {
    this.data.push({ name: '', quantity: 1, price: 1 });
  }

  total() {
    const productsTotal = this.data.map(product => product.quantity * product.price);
    return (this.data.length > 0) ? productsTotal.reduce((product1, product2) => product1 + product2) : 0;
  }

  removeItem(id) {
    console.log(this.data[id]);
    this.data.splice(id, 1);
  }

}
