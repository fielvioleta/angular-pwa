import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-network-info',
  templateUrl: './network-info.component.html',
  styleUrls: ['./network-info.component.css']
})
export class NetworkInfoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    var info = this.getConnection();
    if (info) {
      info.onchange = function (event) {
        this.updateNetworkInfo(event.target);
      }
      this.updateNetworkInfo(info);
    }
  }

  public getConnection() {
    return navigator['connection'] || navigator['mozConnection'] ||
      navigator['webkitConnection'] || navigator['msConnection'];
  }
  
  public updateNetworkInfo(info) {
    document.getElementById('networkType').innerHTML = info.type;
    document.getElementById('effectiveNetworkType').innerHTML = info.effectiveType;
    document.getElementById('downlinkMax').innerHTML = info.downlinkMax;
  }

}
