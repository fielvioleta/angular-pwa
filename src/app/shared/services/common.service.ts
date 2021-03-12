import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

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
}
