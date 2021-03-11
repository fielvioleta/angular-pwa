import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { ApiService } from 'src/app/core/http/api.service';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(
    private apiService: ApiService
  ) { }

  list(): Observable<{}> {
    return this.apiService.get(`products`);
  }
}
