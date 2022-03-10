import { Injectable } from '@angular/core';
import { IMovie } from '../models/IMovie';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
itemsFromLS: IMovie[] = [];
dataFromLS: string = "";
  constructor() { }

  fromLS() {
   // this.dataFromLS = JSON.parse(localStorage.getItem("checkout"));
   // this.itemsFromLS = JSON.parse()
  }
}
