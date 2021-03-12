import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/shared/services/products.service';
import { ProductListModel } from 'src/app/shared/models/products/product-list.model';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  data: ProductListModel;
  apiBaseUrl = environment.app_url;
  searchText: string = '';
  dataTmp: ProductListModel;

  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
    this.productsService.getProductList().then(res => {
      this.dataTmp = res;
      this.data = res;
    }).catch((err) => {
      console.log('It failed!', err);
    });
  }

  onImgError(event){
    event.target.src = './assets/icons/prodgr_default_300.png';
  }
  
  onChange(value) {
    const data: any = this.data;
    if(value) {
      this.data = data.filter(res => {
        return res.name.toLowerCase().includes(value);
      });
    } else {
      this.data = this.dataTmp;
    }
  }
}
