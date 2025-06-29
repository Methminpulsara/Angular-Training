import { Component, OnInit } from '@angular/core';
import { ProductComponent } from "../product/product.component";
import { Product } from '../modals/product';
import { NgFor } from '@angular/common';
import { CartService } from '../../service/cart.service';
import { ProductService } from '../../service/product.service';


@Component({
  selector: 'app-product-container',
  imports: [ProductComponent, NgFor],
  templateUrl: './product-container.component.html',
  styleUrl: './product-container.component.scss',
})
export class ProductContainerComponent implements OnInit {
  constructor(
    private cartService: CartService,
    private productService: ProductService
  ) {}
  ngOnInit(): void {
   this.getAllProducts();
  }

  productList: Product[] = [];

  productOutPutEvent(product: Product) {
    this.cartService.addToCart(product);
  }

  getAllProducts() {
    this.productService.getAllItems().subscribe((data) => {
      this.productList = data;
    })
  }








}
