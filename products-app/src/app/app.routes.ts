import { Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CartComponent } from './cart/cart.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { DetailsComponent } from './details/details.component';

export const routes: Routes = [
  { path: 'products', component: ProductListComponent, title: 'Products' },
  { path: 'login', component: LoginComponent, title: 'Login' },
  { path: 'register', component: RegisterComponent, title: 'Register' },
  { path: 'cart', component: CartComponent, title: 'Cart' },
  {
    path: 'cart-details/:id',
    component: DetailsComponent,
    title: 'Cart Details',
  },
  { path: '**', component: NotFoundComponent, title: 'Not Found Page' },
];
