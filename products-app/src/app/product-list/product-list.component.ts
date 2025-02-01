import { Component } from '@angular/core';
import * as data from '../../../public/assets/products.json';
import { Product } from '../types/product';
import { ProductCardComponent } from './product-card/product-card.component';
@Component({
  selector: 'app-product-list',
  imports: [ProductCardComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
})
export class ProductListComponent {
  jsonData: any = (data as any).default;
  productArr: Array<Product> = this.jsonData.products;

  constructor() {
    console.log(this.jsonData.products);
  }
}
