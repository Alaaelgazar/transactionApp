import { Pipe, PipeTransform } from '@angular/core';
import { CastumerTransaction } from '../castumer-transaction';

@Pipe({
  name: 'searchByAmount'
})
export class SearchByAmountPipe implements PipeTransform {

  transform(Customers:CastumerTransaction[] , term:string):CastumerTransaction[]{
    if (term ==undefined || term=="" || term=="   " )
     {
       return Customers
     }
     return Customers.filter( (item)=>item.date.match(term))
   }

}
