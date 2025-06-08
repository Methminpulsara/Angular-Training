import { Component, Input } from '@angular/core';
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

  @Input() product!: Product;

  // public product: Product = {
  //   price: 1000.0,
  //   productName: 'Nike Air Max 90',
  //   description:
  //     'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, quos',
  //   stockCount: 1,
  //   imgUrl:
  //     'https://cdn.pixabay.com/photo/2020/10/11/05/36/nike-5644799_1280.jpg',
  // };
}
