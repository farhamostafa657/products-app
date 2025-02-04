import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
@Component({
  selector: 'app-product-card',
  imports: [CommonModule],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css',
})
export class ProductCardComponent {
  @Input() productItem: any;

  constructor(private router: Router) {}

  handleRedirectToDetails(id: number) {
    this.router.navigate(['/cart-details', id]);
  }
}
