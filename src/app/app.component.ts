import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';
import { ContactModule } from './contact/contact.module';
import { ProductsModule } from './products/products.module';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ContactModule, RouterLink, RouterLinkActive, ProductsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor(private router : Router) {
    

   }
  title = 'router-app';

  goToContact() {
  this.router.navigate(['contact']);
  }
}
