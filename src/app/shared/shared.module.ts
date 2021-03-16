import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../core/http/api.service';
import { NgxSpinnerModule } from 'ngx-spinner';
import { MaterialModule } from '../core/material/material.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {WebcamModule} from 'ngx-webcam';
import { CameraComponent } from './components/camera/camera.component';
import { LocalNotifComponent } from './components/local-notif/local-notif.component';
import { PowerbiComponent } from './components/powerbi/powerbi.component';
import { NetworkInfoComponent } from './components/network-info/network-info.component';

@NgModule({
  declarations: [CameraComponent, LocalNotifComponent, PowerbiComponent, NetworkInfoComponent],
  imports: [
    CommonModule,
    NgxSpinnerModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    WebcamModule,
  ],
  providers: [ApiService],
  exports: [
    NgxSpinnerModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    WebcamModule,
    CameraComponent,
    LocalNotifComponent,
    PowerbiComponent,
    NetworkInfoComponent
  ]
})
export class SharedModule { }
