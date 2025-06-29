import { Component, OnInit } from '@angular/core';
import { ProductComponent } from "../product/product.component";
import { Product } from '../modals/product';
import { CommonModule, NgFor } from '@angular/common';
import { CartService } from '../../service/cart.service';
import { ProductService } from '../../service/product.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product-container',
  standalone: true,
  imports: [ProductComponent, NgFor, CommonModule, FormsModule],
  templateUrl: './product-container.component.html',
  styleUrls: ['./product-container.component.scss'],
})
export class ProductContainerComponent implements OnInit {
  productList: Product[] = [];

  public categories: string[] = [];
  selectedCategory: string = 'All';
  filteredProductList: Product[] = [];

  constructor(
    private cartService: CartService,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    this.getAllProducts();
  }

  productOutPutEvent(product: Product) {
    this.cartService.addToCart(product);
  }

  getAllProducts() {
    this.productService.getAllItems().subscribe((data) => {
      this.categories = Array.from(new Set(data.map(product => product.category)));
      this.productList = data;
      this.filteredProductList = data;
    });
  }

  filterByCategory(name: string) {
    this.selectedCategory = name;

    if (name.toLowerCase() === 'all') {

      this.filteredProductList = this.productList;
    } else {
      this.filteredProductList = this.productList.filter(product =>
        product.category.toLowerCase() === name.toLowerCase()
      );
    }
  }


  
categoryChange(name: string) {
  this.filterByCategory(name);
}

}
