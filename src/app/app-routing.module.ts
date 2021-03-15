import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { UsersModule } from './components/users/users.module';
import { ProductsModule } from './components/products/products.module';

const routes: Routes = [
  {
    path: '',
    // redirectTo: '/users/login',
    // redirectTo: '/products/list',
    redirectTo: '/products/hardwares',
    pathMatch: 'full',
  },
  {
    path: 'users',
    loadChildren: () => UsersModule,
    canActivate: [/*AuthenticationGuard*/]
  },
  {
    path: 'products',
    loadChildren: () => ProductsModule,
    canActivate: [/*AuthenticationGuard*/]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { useHash: true, onSameUrlNavigation: 'reload' })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
