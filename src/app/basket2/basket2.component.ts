import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basket2',
  templateUrl: './basket2.component.html',
  styleUrls: ['./basket2.component.css']
})
export class Basket2Component implements OnInit {

  public shop = [
    {
      branch: 'hofer',
      baskets: [
        {
          name: 'hofer1',
          products: [
            { product: 'Apple', amount: 2, price: 1.5, code: 2541 },
            { product: 'Milch', amount: 3, price: 1.2, code: 2542 },
            { product: 'Apple', amount: 2, price: 1.5, code: 2541 }
          ]
        },
        {
          name: 'hofer2',
          products: [
            { product: 'Banana', amount: 2, price: 1.5, code: 2543 },
            { product: 'Apple', amount: 3, price: 1.2, code: 2544 },
            { product: 'coffee', amount: 4, price: 3, code: 2545 }
          ]
        }
      ]
    },
    {
      branch: 'billa',
      baskets: [
        {
          name: 'billa1',
          products: [
            { product: 'tomato', amount: 2, price: 0.5, code: 2546 },
            { product: 'Apple', amount: 3, price: 0.9, code: 2547 },
            { product: 'orange', amount: 4, price: 1.2, code: 2548 }
          ]
        },
        {
          name: 'billa2',
          products: [
            { product: 'juise', amount: 2, price: 1.5, code: 2549 },
            { product: 'Apple', amount: 2, price: 1.5, code: 2541 },
            { product: 'chokolate', amount: 3, price: 2.5, code: 2540 }
          ]
        }
      ]
    }
  ];
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
  public calculateProductTotal(shop) {
    return shop.branch.baskets.map(this.calculateBranchTotal).reduce((total1, total2) => total1 + total2);
  }

}


