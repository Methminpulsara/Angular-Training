import { Injectable, signal } from '@angular/core';
import { Product } from '../app/modals/product';

@Injectable({
  providedIn: 'root',
})

export class CartService {
  constructor() {}

  public count = signal<number>(0);

  private cartItems = signal<Product[]>([]);


  //... => Spred operetor   ==> wenne thiyena eewt paase aluth ewa save wenn

  addToCart(product:Product){
    this.cartItems.update(items =>[...items,product]);
  }


}
