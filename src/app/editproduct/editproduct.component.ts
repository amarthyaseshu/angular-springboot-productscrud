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
  catOptions: any = ['Engineering','Medical', 'Competitive','Self-Development','Biographies','Computers And Tech','Entertainment','Literature And Fiction','SciFi And Fantasy','Travel','Others'];
  contentROptions: any = ['1', '2', '3','4','5'];
  qualityROptions: any = ['1', '2', '3','4','5'];

  constructor(private _route:Router,private _service:NgserviceService,private _activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    let id=parseInt(this._activatedRoute.snapshot.paramMap.get('id'));
    this._service.fetchProductByIdFromRemote(id).subscribe(
      data=>{console.log("data received");
    this.book=data;
    },
      error=>{
console.log("exception occured");
      }
    )
  }

  selectCat(tempCat: any): any {
    this.book.bookCategory = tempCat;
  }

  selectContentRating(tempContR: any): any {
    this.book.bookContentRating = tempContR;
  }

  selectQualityRating(tempContR: any): any {
    this.book.bookQualityRating = tempContR;
  }

  updateProductFormSubmit(){
    this._service.addProductToRemote(this.book).subscribe(
      data=>{
        console.log("data added succesfully");
        this._route.navigate(['productlist'])
      },
     error=> console.error("error")
      
    )
      }

}
