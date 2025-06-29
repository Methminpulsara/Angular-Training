import { Injectable, signal } from '@angular/core';
import { Product } from '../app/modals/product';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor() {}

  public count = signal<number>(0);

  private cartItems = signal<Product[]>([]);

  public totalItems = signal<number>(0);

  //... => Spred operetor   ==> wenne thiyena eewt paase aluth ewa save wenn

  addToCart(product: Product) {
    // to avoid refference issues , we create a new object => Product Service
    const productToAdd = { ...product };

    this.cartItems.update((items) => [...items, productToAdd]);


    this.updateTotalItems();
  }

  getItems() {
    return this.cartItems();
  }

  removeItems(index: number) {
    this.cartItems.update((items) => {
      const newItems = [...items];
      newItems.splice(index, 1);
      return newItems;
    });
   this.updateTotalItems();
  }

  updateTotalItems() {
    this.totalItems.set(this.cartItems().length);
  }


}
