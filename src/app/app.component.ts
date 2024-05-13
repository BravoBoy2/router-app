import { Component } from '@angular/core';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { ContactModule } from './contact/contact.module';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ContactModule],
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
