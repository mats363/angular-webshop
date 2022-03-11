import { Component, OnInit } from '@angular/core';
import { IMovie } from 'src/app/models/IMovie';
import { MovieService } from 'src/app/services/movie.service';
import { ShoppingcartService } from 'src/app/services/shoppingcart.service';


@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  movies: IMovie[] = [];

  constructor(private service: MovieService, private service2: ShoppingcartService) { }

  ngOnInit(): void { // Hämtar lista med filmer från tjänsten
    this.service.movies$.subscribe((dataFromService: IMovie[]) => {
      this.movies = dataFromService;
    })
    this.service.getVideos();
  }

  
  addToCart(itemToBuy: IMovie) {
    this.service2.addToCart(itemToBuy)

  }
}
