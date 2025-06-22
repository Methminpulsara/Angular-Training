import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { LogerService } from '../../service/LogerService';
import { CommonModule, NgFor } from '@angular/common';
import { CartService } from '../../service/cart.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  count = 0;


  constructor(public cartService :CartService) {}

  onIncrementCount() {

    let count = this.cartService.count() +  1;
    this.cartService.count.set(count);

  }
}
