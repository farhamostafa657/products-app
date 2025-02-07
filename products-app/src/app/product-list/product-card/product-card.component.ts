import { Component, inject, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { ProducRequestService } from '../../services/produc-request.service';
import { CounterService } from '../../services/counter.service';
@Component({
  selector: 'app-product-card',
  imports: [CommonModule],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css',
})
export class ProductCardComponent {
  @Input() productItem: any;
  counter: number = 0;

  counterService = inject(CounterService);
  constructor(private router: Router) {}

  ngOnInit() {
    this.counterService.getCounter().subscribe((res) => (this.counter = res));
  }
  handleRedirectToDetails(id: number) {
    this.router.navigate(['/cart-details', id]);
  }

  increaseCounter() {
    this.counterService.changeCounter(this.counter + 1);
  }
  handleCounter() {}
}
