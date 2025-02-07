import { Component, Input } from '@angular/core';

import * as data from '../../../public/assets/products.json';
import { Product } from '../types/product';
import { CurrencyPipe } from '@angular/common';
import { ProducRequestService } from '../services/produc-request.service';

@Component({
  selector: 'app-details',
  imports: [CurrencyPipe],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css',
})
export class DetailsComponent {
  stars: Array<number> = [];
  starsLength: number = 0;
  productDetails: any = {};
  @Input() id: string = '';

  constructor(private productrequestservise: ProducRequestService) {}

  ngOnInit() {
    this.productrequestservise.getProductDetails(this.id).subscribe((res) => {
      this.productDetails = res;

      for (let i = 1; i < Math.floor(this.productDetails.rating); i++) {
        this.stars[i] = i;
      }
      this.starsLength = Math.ceil(this.productDetails.rating);
    });
  }
}
