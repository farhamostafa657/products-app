import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { ProducRequestService } from '../../services/produc-request.service';
@Component({
  selector: 'app-product-card',
  imports: [CommonModule],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css',
})
export class ProductCardComponent {
  @Input() productItem: any;

  constructor(private router: Router) {}

  onInit() {
    // this.activatedRoute.params.subscribe((params) => {
    //   this.id = params['id'];
    //   this.productrequestservise
    //     .getProductDetails(this.id)
    //     .subscribe((res) => console.log(res));
    // });
  }
  handleRedirectToDetails(id: number) {
    this.router.navigate(['/cart-details', id]);
  }
}
