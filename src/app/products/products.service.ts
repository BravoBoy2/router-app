import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private data : any[] = [
    {id: '1', name: 'pc', price:2000},
    {id: '2', name: 'laptop', price:1000},
    {id: '3', name: 'Mobile', price:800}
  ];

  constructor() { }

  getAllProducts() {
    return of(this.data);
  }

  getProduct(id : string) {
    return of(this.data.find(p => p.id === id));
  }
}
