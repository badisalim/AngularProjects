import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  invoice = [{ qty: 2, description: "Apple", cost: 2 }];

  constructor() { }

  ngOnInit() {
  }

  addItem() {
    this.invoice.push({ qty: 1, description: "", cost: 1 });
  }

  total() {
    const productsTotal = this.invoice.map(product => product.qty * product.cost);
    return (this.invoice.length > 0) ? productsTotal.reduce((product1, product2) => product1 + product2) : 0;
  }

  removeItem(id) {
    console.log(this.invoice[id]);
    this.invoice.splice(id, 1);
  }

}
