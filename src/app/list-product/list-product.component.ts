import { Component, OnInit } from '@angular/core';
import { CommonService} from '../common.service';
import { Product } from '../product';
import {Router} from '@angular/router';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {

  productList:Product[]=[];
  constructor(private CommonData:CommonService) {
     this.productList=this.CommonData.products;
   }

  ngOnInit() {
  }

  onEdit(i)
  {
    this.CommonData.editService(i);
  }
}
