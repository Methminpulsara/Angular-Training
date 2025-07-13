import { Component, OnInit } from '@angular/core';
import { ProductComponent } from "../product/product.component";
import { Product } from '../modals/product';
import { CommonModule, NgFor } from '@angular/common';
import { CartService } from '../../service/cart.service';
import { ProductService } from '../../service/product.service';
import { FormsModule } from '@angular/forms';
import { WishListService } from '../../service/wishListService';
import { debounceTime, distinctUntilChanged, Subject } from 'rxjs';

@Component({
  selector: 'app-product-container',
  standalone: true,
  imports: [ProductComponent, NgFor, CommonModule, FormsModule],
  templateUrl: './product-container.component.html',
  styleUrls: ['./product-container.component.scss'],
})
export class ProductContainerComponent implements OnInit {


  private searchSubject = new Subject<string>();


  productList: Product[] = [];

  public categories: string[] = [];
  selectedCategory: string = 'All';
  filteredProductList: Product[] = [];
  search:string =''

  constructor(
    private cartService: CartService,
    private productService: ProductService,
    private wishService :WishListService
  ) {}

  ngOnInit(): void {
    this.setupSearchSubscription();
    this.getAllProducts();
    this.getCategorys()
  }

  productOutPutEvent(product: Product) {
    this.cartService.addToCart(product);
  }

  wishOut(product:Product){
    this.wishService.addToWishList(product);
  }




  getAllProducts() {
    this.productService.getAllItems().subscribe((data) => {
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

productRemoveEvent($event: Product) {
console.log("deleted");

}

getCategorys(){
  this.productService.getCategoryItems().subscribe({
    next : (data) => {
      this.categories = data;
    },
    error : (error) => {
      console.log(error);
    }
  })
}







private setupSearchSubscription(){
  this.searchSubject.pipe(
    debounceTime(300),
    distinctUntilChanged(),

  ).subscribe(val => {
    this.filterterProduct();
  })
}

filterterProduct(){

  let filterd = this.productList;

  if(this.selectedCategory != 'All'){
    filterd = filterd.filter( p => p.category == this.selectedCategory
    );
  }

  if(this.search){
    let searchTermLower = this.search.toLowerCase()

    filterd = filterd.filter(
      p =>
        p.title.toLowerCase().includes(searchTermLower) ||
        p.description.toLowerCase().includes(searchTermLower)
    );
  }

  this.filteredProductList = filterd;


}

onInputChange($event:string) {
  this.searchSubject.next($event);
}




}
