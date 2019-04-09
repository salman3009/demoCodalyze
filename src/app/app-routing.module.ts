import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ListProductComponent } from './list-product/list-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';

const routes:Routes=[
  {
    path:'',component:ListProductComponent
  },
  {
    path:'edit-product',component:EditProductComponent
  }
];


@NgModule({
  imports: [
  RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
