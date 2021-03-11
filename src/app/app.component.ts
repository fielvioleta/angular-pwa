import { Component } from '@angular/core';
import { ConnectionService } from 'ng-connection-service';
import { get, set } from 'idb-keyval';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  status = 'ONLINE';
  isConnected = true;
  title = 'commerce-angular-pwa';

  constructor(private connectionService: ConnectionService) {
    this.connectionService.monitor().subscribe(isConnected => {
      this.isConnected = isConnected;
      if (this.isConnected) {
        this.status = "ONLINE";
        console.log('online');
      }
      else {
        this.status = "OFFLINE";
        console.log('offline');
      }
    });

    set('hello', 'world')
    .then(() => console.log('It worked!'))
    .catch((err) => console.log('It failed!', err));
  }
}
