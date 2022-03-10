import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IMovie } from '../models/IMovie';

@Injectable({
  providedIn: 'root'
})
export class ShoppingcartService {
  private purchases: IMovie[] = [];
  private itemsFromLS: any = [];
  purchases$: Observable<IMovie[]> = of(this.purchases); // Gör till en observable
  
  
  constructor() { }

  addToCart(product: IMovie) {
    console.log(product)
    this.purchases.push(product);
    
    localStorage.setItem("checkout", JSON.stringify(this.purchases));
    
  }

  totalPrice(products: IMovie[]) {
    let cost = 0;
    for (let i = 0; i<products.length; i++) {
        cost = cost + products[i].price
    }
    console.log(cost);
    return cost;
  }

}
