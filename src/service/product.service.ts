import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Product } from "../app/modals/product";
import { Observable } from "rxjs";

@Injectable ({
  providedIn:'root'
})
export class ProductService{

    constructor (private http:HttpClient){}



  getAllItems():Observable<Product[]> {
    return this.http.get<Product[]>('https://fakestoreapi.com/products');
  }


}
