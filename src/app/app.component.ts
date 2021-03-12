import { Component } from '@angular/core';
import { ConnectionService } from 'ng-connection-service';
import { CommonService } from './shared/services/common.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isConnected = true;

  constructor(
    private connectionService: ConnectionService,
    private commonService: CommonService
  ) {
    this.commonService.networkStatusUpdate(true);
    this.connectionService.monitor().subscribe(isConnected => {
      this.isConnected = isConnected;
      if (this.isConnected) {
        this.commonService.networkStatusUpdate(true);
      }
      else {
        this.commonService.networkStatusUpdate(false);
      }
    });
  }
}
