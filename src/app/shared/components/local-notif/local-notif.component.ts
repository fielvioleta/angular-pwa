import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-local-notif',
  templateUrl: './local-notif.component.html',
  styleUrls: ['./local-notif.component.css']
})
export class LocalNotifComponent implements OnInit {
  notificationPermission = 'unavailable';
  constructor() { }

  ngOnInit(): void {
    this.notificationPermission = Notification.permission;
  }
  
  public requestPermission() {
    if (!('Notification' in window)) {
      alert('Notification API not supported!');
      return;
    }
    
    Notification.requestPermission(result => {
      console.log(result);
      this.notificationPermission = result;
    });
  }

  public nonPersistentNotification() {
    if (!('Notification' in window)) {
      alert('Notification API not supported!');
      return;
    }
    
    try {
      new Notification("Hi there - non-persistent!");
    } catch (err) {
      alert('Notification API error: ' + err);
    }
  }
  
  public persistentNotification() {
    if (!('Notification' in window) || !('ServiceWorkerRegistration' in window)) {
      alert('Persistent Notification API not supported!');
      return;
    }
    
    try {
      navigator.serviceWorker.getRegistration()
        .then((reg) => reg.showNotification("Hi there - persistent!"))
        .catch((err) => alert('Service Worker registration error: ' + err));
    } catch (err) {
      alert('Notification API error: ' + err);
    }
  }

}
