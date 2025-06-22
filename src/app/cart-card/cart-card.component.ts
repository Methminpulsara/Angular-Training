import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../modals/product';
import { CartService } from '../../service/cart.service';
import { CommonModule, NgFor } from '@angular/common';

@Component({
  selector: 'app-cart-card',
  imports: [CommonModule],
  templateUrl: './cart-card.component.html',
  styleUrl: './cart-card.component.scss',
})
export class CartCardComponent {
  constructor(public cartService: CartService) {}

  @Input() cartItems: Product[] = [];

  @Output() removeItem = new EventEmitter<number>();


  removeItemFromCart(index: number) {
    this.removeItem.emit(index);
  }


}
