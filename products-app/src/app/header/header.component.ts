import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { CounterService } from '../services/counter.service';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive, RouterOutlet],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  counterService = inject(CounterService);
  counter: number = 0;

  ngOnInit() {
    this.counterService.getCounter().subscribe((res) => (this.counter = res));
  }
}
