import { Component, OnInit } from '@angular/core';
import { IMovie } from 'src/app/models/IMovie';
import { Order } from 'src/app/models/Order';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  ordersFromAPI: Order[] = [];
  fullList: IMovie[] = [];
  ordersToPrint: IMovie[] = [];
  constructor(private adminService: MovieService) { }

  ngOnInit(): void {
    this.adminService.collectedOrders$.subscribe((dataFromService: Order[]) => {
      this.ordersFromAPI = dataFromService;
      
    });
    this.adminService.getOrders();
    
    this.adminService.movies$.subscribe((dataFromService: IMovie[]) => {
      this.fullList = dataFromService;
    });

    
    this.adminService.getVideos();
    
    
   
    
      
    };
  

    
  

}
