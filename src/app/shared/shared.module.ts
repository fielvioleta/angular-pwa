import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../core/http/api.service';
import { NgxSpinnerModule } from 'ngx-spinner';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NgxSpinnerModule,
  ],
  providers: [ApiService],
  exports: [
    NgxSpinnerModule,
  ]
})
export class SharedModule { }
