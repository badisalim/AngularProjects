import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  invoice = [{
    name: 'Apple',
    quantity: 3,
    price: 1.10
  },
  {
    name: 'Orange',
    quantity: 2,
    price: 1.99
  },
  {
    name: 'Melon',
    quantity: 1,
    price: 3.22
  }
  ];
  constructor() { }

  ngOnInit() {
  }

  addItem() {
    this.invoice.push({ name: '', quantity: 1, price: 1 });
  }

  total() {
    const productsTotal = this.invoice.map(product => product.quantity * product.price);
    return (this.invoice.length > 0) ? productsTotal.reduce((product1, product2) => product1 + product2) : 0;
  }

  removeItem(id) {
    console.log(this.invoice[id]);
    this.invoice.splice(id, 1);
  }

}
