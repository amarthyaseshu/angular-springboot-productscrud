import { Books } from './../books';
import { NgserviceService } from './../ngservice.service';
import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import{NgForm} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {
  book=new Books();

  constructor(private _route:Router,private _service:NgserviceService) { }

  ngOnInit(): void {
  }

  addproductformsubmit(){
this._service.addProductToRemote(this.book).subscribe(
  data=>{
    console.log("data added succesfully");
    this._route.navigate(['productlist'])
  },
 error=> console.error("error")
  
)
  }

}
