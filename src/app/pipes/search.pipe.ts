import { Pipe, PipeTransform } from '@angular/core';
import { CastumerTransaction } from '../castumer-transaction';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(Customers:CastumerTransaction[] , term:string):CastumerTransaction[]{
    if (term ==undefined || term=="" || term=="   " )
     {
       return Customers
     }
     return Customers.filter( (item)=>item.name.includes(term.toLowerCase()) ||item.amount.toString().includes(term) )

   }


}
