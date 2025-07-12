import { Injectable, signal } from '@angular/core';
import { Product } from '../app/modals/product';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class WishListService {
  constructor() {}

  public count = signal<number>(0);

  private wish = signal<Product[]>([]);

  public totalItems = signal<number>(0);

  //... => Spred operetor   ==> wenne thiyena eewt paase aluth ewa save wenn

  addToWishList(product: Product) {
    // to avoid refference issues , we create a new object => Product Service
    const productToAdd = { ...product };

    this.wish.update((items) => [...items, productToAdd]);

    this.updateTotalItems();
  }

  getItems() {
    return this.wish();
  }
removeItems(productId: number) {
  this.wish.update((items) => items.filter(item => item.id !== productId));
  this.updateTotalItems();
}

  updateTotalItems() {
    this.totalItems.set(this.wish().length);
  }
}
