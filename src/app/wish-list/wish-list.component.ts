import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../modals/product';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-wish-list',
  imports: [CommonModule, FormsModule],
  templateUrl: './wish-list.component.html',
  styleUrl: './wish-list.component.scss',
})
export class WishListComponent {

  @Input() wishItems : Product[] = [];

  @Output () toCart = new EventEmitter<{index : number, product:Product}>();



  onAddToCart(i: number) {
    this.toCart.emit({ index: i, product: this.wishItems[i] });

  }

}
