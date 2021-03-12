import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { set, get } from 'idb-keyval';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  private networkStatusOnline = new Subject<any>();

  constructor() { }

  networkStatusObs(): Observable<any> {
    return this.networkStatusOnline.asObservable();
  }

  networkStatusUpdate(data) {
    this.networkStatusOnline.next(data);
  }

  getDataFromIndexDB(name) {
    return get(name);
    // .then(val => {
    //   console.log(val);
    //   return val;
    // });
  }

  setDataFromIndexDB(name, value) {
    set(name, value);
  }
}
