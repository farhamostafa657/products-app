import { Component } from '@angular/core';
import * as data from '../../../public/assets/products.json';
@Component({
  selector: 'app-product-list',
  imports: [],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
})
export class ProductListComponent {
  jsonData: any = (data as any).default; // Store JSON data

  constructor() {
    console.log(this.jsonData); // Check data in console
  }
}
