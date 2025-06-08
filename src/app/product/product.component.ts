import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Product } from '../modals/product';

@Component({
  selector: 'app-product',
  imports: [FormsModule, CommonModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss',
  standalone: true,
})
export class ProductComponent {
  //perent eken childt details denw
  @Input() product!: Product;

  //button click ek event ek nisa eventEmitter use krnw meka child marent data pass
  @Output() cartItems = new EventEmitter<Product>();

  addToCart() {
    this.cartItems.emit(this.product);
  }
}
