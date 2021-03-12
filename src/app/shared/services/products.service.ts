import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { ApiService } from 'src/app/core/http/api.service';
import { ProductListModel } from 'src/app/shared/models/products/product-list.model';
import { CommonService } from './common.service';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(
    private apiService: ApiService,
    private commonService: CommonService
  ) { }

  getProductList(): Promise<ProductListModel> {
    return new Promise((resolve, reject) => {
      this.apiService.get<ProductListModel>(`products`).subscribe(res => {
        this.commonService.setDataFromIndexDB('products', res);
        resolve(res);
      }, err => {
        reject(err);
      });
    });
  }

  getProductDetails(id: number): Promise<ProductListModel> {
    return new Promise((resolve, reject) => {
      this.apiService.get<ProductListModel>(`products/${id}`).subscribe(res => {
        resolve(res);
      }, err => {
        reject(err);
      });
    });
  }
}
