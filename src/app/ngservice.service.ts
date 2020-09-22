import { Books } from './books';
import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import{HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class NgserviceService {

  constructor(private _http:HttpClient) { }

  fetchProductListFromRemote():Observable<any>{
    return this._http.get<any>("http://localhost:8083/getbookslist");
  }

  addProductToRemote(book:Books):Observable<any>{
    return this._http.post<any>("http://localhost:8083/addbooks",book);
  }

  fetchProductByidFromRemote(id:number):Observable<any>{
    return this._http.get<any>("http://localhost:8083/getbooksbyid/"+id);
  }

  deleteProductByidFromRemote(id:number):Observable<any>{
    return this._http.delete<any>("http://localhost:8083/deletebooksbyid/"+id);
  }
  
}
