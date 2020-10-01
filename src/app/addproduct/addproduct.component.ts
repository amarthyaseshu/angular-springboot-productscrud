import { Books } from './../books';
import { NgserviceService } from './../ngservice.service';
import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css'],
})
export class AddproductComponent implements OnInit {
  book = new Books();

  catOptions: any = ['Engineering','Medical', 'Competitive','Self-Development','Biographies','Computers And Tech','Entertainment','Literature And Fiction','SciFi And Fantasy','Travel','Others'];
  contentROptions: any = ['1', '2', '3','4','5'];
  qualityROptions: any = ['1', '2', '3','4','5'];






  constructor(private _route: Router, private _service: NgserviceService) {}

  ngOnInit(): void {}

 
  selectCat(tempCat: any): any {
    this.book.bookCategory = tempCat;
  }

  selectContentRating(tempContR: any): any {
    this.book.bookContentRating = tempContR;
  }

  selectQualityRating(tempContR: any): any {
    this.book.bookQualityRating = tempContR;
  }

  addProductFormSubmit() {
    this._service.addProductToRemote(this.book).subscribe(
      (data) => {
        console.log('data added succesfully');
        this._route.navigate(['productlist']);
      },
      (error) => console.error('error')
    );
  }
}
