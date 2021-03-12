import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductListModel } from 'src/app/shared/models/products/product-list.model';
import { CommonService } from 'src/app/shared/services/common.service';
import { ProductsService } from 'src/app/shared/services/products.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  data: any;
  id: string;
  apiBaseUrl = environment.app_url;

  constructor(
    private productsService: ProductsService,
    private route: ActivatedRoute,
    private commonService: CommonService
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.productsService.getProductDetails(+this.id).then(res => {
      this.data = res;
    }).catch((err) => {
      this.commonService.getDataFromIndexDB('products').then(res => {
        res.forEach(element => {
          if(element.id === +this.id) {
            this.data = element;
          }
        });
      });
    });
  }

  onImgError(event){
    event.target.src = './assets/icons/prodgr_default_300.png';
  }
}
