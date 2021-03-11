import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsRoutingModule } from './products-routing.module';
import { ListComponent } from './list/list.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [ListComponent],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    SharedModule
  ]
})
export class ProductsModule { }
