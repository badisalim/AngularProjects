import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Product } from '../invoice-container/invoice-container.component';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})

export class EditComponent implements OnInit {
  product$: Observable<Product>;

  constructor(private httpClient: HttpClient, private route: ActivatedRoute, private router: Router) { }

  async ngOnInit() {
    const id = this.route.snapshot.params.id;
    //await this.httpClient.delete(`http://localhost:3000/invoice/${id}`).toPromise();
    this.product$ = this.httpClient.get<Product>(`http://localhost:3000/invoice/${id}`);
  }

  async submit(product) { }

  async remove(product) {
    await this.httpClient.delete(`http://localhost:3000/invoice/${product.id}`).toPromise();
    this.router.navigateByUrl('/invoice');

    this.router.navigateByUrl('/shop/products');

  }

  // async edit(product: Product) {
  //   await this.httpClient.edit(`http://localhost:3000/invoice/${product.id}`).toPromise();
  //   this.router.navigateByUrl('/invoice');

  // }


}

