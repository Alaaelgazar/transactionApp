
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  constructor(private _HttpClient:HttpClient  ) { }
  CastumerApi():Observable<any>{
    let Castumers =this._HttpClient.get(`http://localhost:3000/customers`)
    return Castumers
  }
  transactionApi(id:number):Observable<any>{
    let transactions =this._HttpClient.get(`http://localhost:3000/transactions?customer_id=${id}`)
    return transactions
  }

}
