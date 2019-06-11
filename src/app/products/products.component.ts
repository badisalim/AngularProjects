import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../products-container/products-container.component';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  @Input() products: Product[];
  invoice: any;
  constructor() { }

  ngOnInit() {
  }
  addItem() {
    this.invoice.push({ qty: 1, description: "", cost: 1 });
  }
}
