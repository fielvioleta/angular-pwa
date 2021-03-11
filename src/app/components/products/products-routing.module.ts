import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './list/list.component';

const routes: Routes = [
  {
    path: 'list',
    component: ListComponent,
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
