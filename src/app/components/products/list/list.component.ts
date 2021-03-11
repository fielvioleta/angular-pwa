import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ProductsService } from 'src/app/shared/services/products.service';
import { ProductListModel } from 'src/app/shared/models/products/product-list.model';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  displayedColumns = ['id', 'name', 'price'];
  datasource: MatTableDataSource<{}>;

  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
    this.productsService.list().subscribe((res: ProductListModel[]) => {
      this.datasource = new MatTableDataSource(res);
    });
  }

}
