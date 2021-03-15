import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsRoutingModule } from './products-routing.module';
import { ListComponent } from './list/list.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { DetailsComponent } from './details/details.component';
import { HardwaresComponent } from './hardwares/hardwares.component';

@NgModule({
  declarations: [ListComponent, DetailsComponent, HardwaresComponent],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    SharedModule
  ]
})
export class ProductsModule { }
