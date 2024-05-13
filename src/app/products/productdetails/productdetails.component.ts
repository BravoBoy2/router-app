import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { NotFoundError } from 'rxjs';

@Component({
  selector: 'app-productdetails',
  standalone: true,
  imports: [],
  templateUrl: './productdetails.component.html',
  styleUrl: './productdetails.component.css'
})
export class ProductdetailsComponent implements OnInit{
  product : any = {};
constructor(private store: ProductsService, private  route: ActivatedRoute){

}
  ngOnInit(): void {
   this.route.paramMap.subscribe((params: ParamMap) => {
      let id = params.get('id');

      if (id) {
      this.store.getProduct(id).subscribe(product => this.product = product);
      } else {
        //
      }
    
      });
    }
}
