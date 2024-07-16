import { Component, OnInit } from '@angular/core';
import { TransactionService } from '../component/transaction.service';
import { CastumerTransaction } from '../castumer-transaction';
// import { TransactionService } from '../transaction.service';
// import { Castumers } from '../../interface/castumers';
// import { CastumerTransaction } from '../../castumer-transaction';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {
constructor(private TransactionService:TransactionService){}



Customers:any[] = [];
Transiction:any[] = [];
searchInput:string ="";
CustomerTransaction : CastumerTransaction[] = [];


ngOnInit(): void {

  this.getCustomer();

}
getCustomer(){
  this.TransactionService.CastumerApi().subscribe({
    next:(reponse)=>{
      this.Customers=reponse;
      for(let i=0;i<this.Customers.length;i++){
        this.getTransaction(this.Customers[i].id,this.Customers[i].name)
      }
    }
  })
}

getTransaction(id:number,customereName:string){
  this.TransactionService.transactionApi(id).subscribe({
      next:(response)=>{
        this.Transiction=response;
        for(let i=0 ;i<this.Transiction.length;i++){
          let allCustomer =new CastumerTransaction(customereName,this.Transiction[i].date,this.Transiction[i].amount)
          this.CustomerTransaction.push(allCustomer)
        }
      }
  })
}
}
