import { Component } from '@angular/core';
import * as data from '../../../public/assets/products.json';
import { Product } from '../types/product';
import { ProductCardComponent } from './product-card/product-card.component';
import { ProducRequestService } from '../services/produc-request.service';
@Component({
  selector: 'app-product-list',
  imports: [ProductCardComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
})
export class ProductListComponent {
  // jsonData: any = (data as any).default;
  // productArr: Array<Product> = this.jsonData.products;
  productArr: any;
  constructor(private productrequestservice: ProducRequestService) {}

  ngOnInit() {
    this.productrequestservice
      .getProductList()
      .subscribe((res: any) => (this.productArr = res.products));
  }
}
