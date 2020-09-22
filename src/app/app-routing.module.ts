import { ViewproductComponent } from './viewproduct/viewproduct.component';
import { EditproductComponent } from './editproduct/editproduct.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path:'',component:ProductlistComponent},
  {path:'productlist', component:ProductlistComponent},
  {path:'addproduct', component:AddproductComponent},
  {path:'editproduct/:id', component:EditproductComponent},
  {path:'editproduct', component:EditproductComponent},
  {path:'viewproduct',component:ViewproductComponent},
  {path:'viewproduct/:id',component:ViewproductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
