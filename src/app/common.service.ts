import { Injectable } from '@angular/core';
import { Product } from './product';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  editProduct:any;
  globalId;any;
  products:Product[] = [
    {
      name: "Micromax A57",
      pricingTier: "budget",
      priceRange: "5k-8k",
      weight: 200, // In grams,
      availability: 100,
      productUrl: "https://e...content-available-to-author-only...e.com/mma57",
      isEditable: true
    },
    {
      name: "OnePlus 6T",
      pricingTier: "premier",
      priceRange: "35k-45k",
      weight: 200, // In grams
      availability: 30,
      productUrl: "https://e...content-available-to-author-only...e.com/op6t",
      isEditable: true
    },
    {
      name: "Redmi Ultra",
      pricingTier: "budget",
      priceRange: "8k-11k",
      weight: 150, // In grams
      availability: 50,
      productUrl: "https://e...content-available-to-author-only...e.com/redmiu",
      isEditable: true
    }
  ];
  pricingInfo:{budget:any[],premier:any[]} = {
    budget: [
      "4k-6k",
      "5k-8k",
      "8k-11k"
    ],
    premier: [
      "23k-28k",
      "30k-34k",
      "35k-45k"
    ]
  };
  constructor(private router:Router) {

   }

   editService(i)
   {
  
     this.globalId=i;
    this.editProduct=this.products[i];
    this.router.navigate(['/edit-product']);
   }
   
   onPostService(name,pricingTier,weight,availability,productUrl,iseditable)
   {
 
     debugger;
     this.editProduct=null;
     this.products[this.globalId].name=name;
     this.products[this.globalId].pricingTier=pricingTier;
     this.products[this.globalId].weight=weight;
     this.products[this.globalId].availability=availability;
     this.products[this.globalId].productUrl=productUrl;
     this.products[this.globalId].isEditable=iseditable;
     this.router.navigate(['/']);
   }

}
