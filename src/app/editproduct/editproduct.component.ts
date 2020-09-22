import { Books } from './../books';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { NgserviceService } from '../ngservice.service';
@Component({
  selector: 'app-editproduct',
  templateUrl: './editproduct.component.html',
  styleUrls: ['./editproduct.component.css']
})
export class EditproductComponent implements OnInit {

  book=new Books();

  constructor(private _route:Router,private _service:NgserviceService,private _activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    let id=parseInt(this._activatedRoute.snapshot.paramMap.get('id'));
    this._service.fetchProductByidFromRemote(id).subscribe(
      data=>{console.log("data received");
    this.book=data;
    },
      error=>{
console.log("exception occured");
      }
    )
  }

  updateproductformsubmit(){
    this._service.addProductToRemote(this.book).subscribe(
      data=>{
        console.log("data added succesfully");
        this._route.navigate(['productlist'])
      },
     error=> console.error("error")
      
    )
      }

}
