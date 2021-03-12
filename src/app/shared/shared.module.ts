import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../core/http/api.service';
import { NgxSpinnerModule } from 'ngx-spinner';
import { MaterialModule } from '../core/material/material.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NgxSpinnerModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [ApiService],
  exports: [
    NgxSpinnerModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class SharedModule { }
