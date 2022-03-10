import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { IMovie } from 'src/app/models/IMovie';
import { IOrder } from 'src/app/models/IOrder';
import { IOrderRow } from 'src/app/models/IOrderRow';
import { Order } from 'src/app/models/Order';
import { MovieService } from 'src/app/services/movie.service';
import { ShoppingcartService } from 'src/app/services/shoppingcart.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  purchases: IMovie[] = [];
  price: number = 0;
  itemsFromLS: any = [];

  orderRow: IOrderRow[] = [];
  newOrder!: Order;

  userForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
  });

  mockData: any = {id:0,companyId:23,created:"0001-01-01T00:00:00",createdBy:"Mats testar",paymentMethod:"Paypal",totalPrice:0,status:0,orderRows:[]};

  constructor(private service: ShoppingcartService, private postService: MovieService) { }

  ngOnInit(): void {
    this.itemsFromLS = localStorage.getItem("checkout" || "[]"); // Lägg detta i en tjänst istället om det finns tid
    this.purchases = JSON.parse(this.itemsFromLS);
    //this.service.purchases$.subscribe((res: IMovie[]) => {
    //  this.purchases = res;
    //});
    //this.service.fromLS();
    if (this.purchases) {
      this.price = this.service.totalPrice(this.purchases)
    }
  }

  submitOrder() { // Fixa sen så det inte blir dubletter i amount
    
    for (let i = 0; i < this.purchases.length; i++) {
      this.orderRow.push(
        {
          productId: this.purchases[i].id,
          product: "",
          amount: 1
        }
      )
    }

    this.newOrder = new Order(
      new Date, this.userForm.value.firstName+ " " + this.userForm.value.lastName, this.price, this.orderRow)

    

    this.postService.order$.subscribe((addNew: Order) => {
      this.newOrder = addNew;
    });

    this.postService.postOrder(this.newOrder);
   
  }
  clearOrder() {
    localStorage.clear()
    this.purchases= [];
    this.price = 0;
  }
}
