import { Component } from '@angular/core';
import { WishListComponent } from "../wish-list/wish-list.component";
import { WishListService } from '../../service/wishListService';
import { Product } from '../modals/product';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-wish-list-container',
  imports: [WishListComponent,CommonModule,FormsModule],
  templateUrl: './wish-list-container.component.html',
  styleUrl: './wish-list-container.component.scss'
})
export class WishListContainerComponent {


  constructor(public wishLustService:WishListService){}

addToCart(product:any){
  this.wishLustService.addToWishList(product);
}

}
