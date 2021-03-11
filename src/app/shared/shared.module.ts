import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../core/http/api.service';
import { NgxSpinnerModule } from 'ngx-spinner';
import { MaterialModule } from '../core/material/material.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NgxSpinnerModule,
    MaterialModule
  ],
  providers: [ApiService],
  exports: [
    NgxSpinnerModule,
    MaterialModule
  ]
})
export class SharedModule { }
