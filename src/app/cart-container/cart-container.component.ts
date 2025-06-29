import { Component } from '@angular/core';
import { CartService } from '../../service/cart.service';
import { CartCardComponent } from "../cart-card/cart-card.component";

@Component({
  selector: 'app-cart-container',
  imports: [CartCardComponent],
  templateUrl: './cart-container.component.html',
  styleUrl: './cart-container.component.scss'
})
export class CartContainerComponent {

  constructor(public cartService :CartService){}


  onRemoveItem(cartItem :number){
    this.cartService.removeItems(cartItem);
  }


}
