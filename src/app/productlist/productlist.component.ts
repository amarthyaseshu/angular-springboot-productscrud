import { Books } from './../books';
import { NgserviceService } from './../ngservice.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {

  booklist:Books[];

  constructor(private _service:NgserviceService,private _route:Router) { }

  ngOnInit() {
this._service.fetchProductListFromRemote().subscribe(
  data=>{console.log("response received");
this.booklist=data;
console.log(this.booklist);
},
  error=>console.log("exception occured")
)
  }

 goToEditProduct(id:number){
   console.log("id"+id);
   this._route.navigate(['/editproduct',id]);
 }

 goToViewProduct(id:number){
  console.log("id"+id);
  this._route.navigate(['/viewproduct',id]);
}

deleteProduct(id:number){
  this._service.deleteProductByIdFromRemote(id).subscribe(
    data=>{console.debug("deleted succesfully");
    this._route.navigate(['/productlist']);
  },
    error=>{console.log("exception occured")}
  )
}

}
