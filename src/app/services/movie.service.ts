import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IMovie } from '../models/IMovie';

import { Order } from '../models/Order';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private movies = new Subject<IMovie[]>();
  movies$ = this.movies.asObservable();

  private order = new Subject<Order>();
  order$ = this.order.asObservable();

  private collectedOrders = new Subject<Order[]>();
  collectedOrders$ = this.collectedOrders.asObservable();

  constructor(private http: HttpClient) { }

  getVideos() {
    this.http.get<IMovie[]>(environment.videoUrl)
      .subscribe((data) => {

        this.movies.next(data)
      })
  }

  postOrder(newOrder: Order) {
    this.http.post<Order>(environment.postUrl, newOrder)
      .subscribe((orderData: Order) => {
        this.order.next(orderData);
      })
  }

  getOrders() {
    this.http.get<Order[]>(environment.adminUrl)
    .subscribe((result: Order[]) => {
      this.collectedOrders.next(result);
    })
  }
  
    
   
      
  }
 

