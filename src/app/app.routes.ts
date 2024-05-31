import { Routes } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ContactComponent } from './contact/contact.component';
import { ProductslistComponent } from './products/productslist/productslist.component';
import { ProductdetailsComponent } from './products/productdetails/productdetails.component';

export const routes: Routes = [
    //routes with empty string means this is the home page
    {path: '', component: FirstComponent},
    //routes with string 
    {path: 'second', component: SecondComponent},
    //lazy loaded components
    // {path: 'contact', loadComponent: () => import('./contact/contact.component').then(contact => contact.ContactComponent)},

    {path: 'contact', component: ContactComponent},
    {path: 'products', component: ProductslistComponent},
    //dynamic routes
    {path: 'products/:id', component: ProductdetailsComponent},

    //routes with wildcard
    {path: '**', component: NotFoundComponent}
];
