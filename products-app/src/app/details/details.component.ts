import { Component, Input } from '@angular/core';

import * as data from '../../../public/assets/products.json';
import { Product } from '../types/product';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-details',
  imports: [CurrencyPipe],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css',
})
export class DetailsComponent {
  jsonData: any = (data as any).default;
  stars: Array<number> = [];
  starsLength: number = 0;
  productDetails: any = {};
  @Input() id: string = '';

  ngOnInit() {
    this.productDetails = this.jsonData.products.find(
      (product: Product) => product.id == Number(this.id)
    );

    for (let i = 1; i < Math.floor(this.productDetails.rating); i++) {
      this.stars[i] = i;
    }
    this.starsLength = Math.ceil(this.productDetails.rating);
    console.log(this.productDetails.images);
  }
}
