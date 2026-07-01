import { Routes } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { Products } from './products/products';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'users',
    pathMatch: 'full',
  },
  {
    path: 'users',
    component: UsersComponent,
  },
  {
    path: 'products',
    component: Products
  }
];
