import { Component} from '@angular/core';
import { CartService } from '../../service/cart.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  standalone:true
})
export class HomeComponent {
  count = 0;

  constructor(public cartService :CartService) {}



  numbers:number [] =[];


////////////////////OBSERVABLES///////////////


ngOservable = new Observable<number[]>((observer) => {
  observer.next([1, 2, 3, 4, 5,6,7,8,9,10]);
});




////////////////////////////////////////////////

  onIncrementCount() {
    let count = this.cartService.count() +  1;
    this.cartService.count.set(count);
  }




}
