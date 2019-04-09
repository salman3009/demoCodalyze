import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  nameContain:string;
  weight:string;
  availability:string;
  producturl:string;
  priceTier:boolean;
  isEditable:boolean;
  priceRange:any[]=[];
  price:string;
  commonprice:string;

  constructor(private commonData:CommonService) { }

  ngOnInit() {
    this.setData();
  }

setData()
{
  debugger;
  this.nameContain=this.commonData.editProduct.name;
  this.weight=this.commonData.editProduct.weight;
  this.availability=this.commonData.editProduct.availability;
  this.producturl=this.commonData.editProduct.productUrl;
  this.priceTier=this.commonData.editProduct.pricingTier;
  this.isEditable=this.commonData.editProduct.isEditable;
}


  selectPricing(flag)
  {
    debugger;
      if(flag)
      {
        this.priceRange=this.commonData.pricingInfo.budget;
      }
      else
      {
        this.priceRange=this.commonData.pricingInfo.premier;
      }
  }

  updatePost(form:NgForm){
    debugger;
    if(form.invalid)
    {
      return;
    }
    this.commonData.onPostService(this.nameContain,this.priceTier,this.weight,this.availability,this.producturl,this.isEditable);
  }

}
