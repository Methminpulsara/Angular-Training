import { Component} from '@angular/core';
import { CartService } from '../../service/cart.service';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
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
  observer.next([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
});


getData(){
 this.ngOservable.subscribe({
  next: (data) => this.numbers = data,
  error: (err) => console.log(err),
  complete: () => console.log('Completed')
 })
}


////////////////////////////////////////////////

  onIncrementCount() {
    let count = this.cartService.count() +  1;
    this.cartService.count.set(count);
  }

 test(){
    console.log("first");

    setTimeout(() => {
      console.log("second");

    }, 0);

    console.log("thrid");

    setTimeout(() => {
        console.log("fourth");

    }, 3000);

    console.log("last");


  }


}
