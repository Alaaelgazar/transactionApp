import { TransactionService } from './../../transaction.service';
import { Component, OnInit } from '@angular/core';
import { Chart,registerables} from 'node_modules/chart.js';
import { CastumerTransaction } from 'src/app/castumer-transaction';
Chart.register(...registerables);
@Component({
  selector: 'app-my-chart',
  templateUrl: './my-chart.component.html',
  styleUrls: ['./my-chart.component.scss']
})
export class MyChartComponent implements OnInit{
  map = new Map<string, number>();

  chart: Chart | null = null;

  CustomerList: any  = [];
  Transiction: any  = [];

  TransactionDate: string[] = [];
  TransactionAmount: number[] = [];

  inputSelect:string =""

  CustomerTransaction : CastumerTransaction[] = []

constructor(private TransactionService:TransactionService){}
ngOnInit(): void {
  this.getCustomers();
    this.RenderChart(this.TransactionDate,this.TransactionAmount);

}

getCustomers(){
  this.TransactionService.CastumerApi().subscribe
  (
    res  =>{
      this.CustomerList = res;
    }
  )
}



getTransictionByCustomerId(id:number){
  this.TransactionService.transactionApi(id).subscribe
  (
    res  =>{
      this.Transiction = res;
      this.TransactionAmount=[];
      this.TransactionDate=[];
      for (let i = 0; i < this.Transiction.length; i++) {
      let TransactionDate = this.Transiction[i].date
      let TransactionAmount = this.Transiction[i].amount
      if (this.map.has(TransactionDate)) {
        let oldAmount = this.map.get(TransactionDate)
        let totalAmount = oldAmount + TransactionAmount
        this.map.set(TransactionDate,totalAmount)


      }else{
        this.map.set(TransactionDate,TransactionAmount)
      }
      }
      for (let [date, amount] of this.map) {
        this.TransactionDate.push(date);
        this.TransactionAmount.push(amount);
      }
      this.map.clear()
      this.RenderChart(this.TransactionDate,this.TransactionAmount)
    }

  )
}



OnchangeCustomer( event: any){
  let customerId = event.target.value;
  this.getTransictionByCustomerId(customerId);
}



RenderChart(TransactionDate:any ,TransactionAmount:any){
  if (this.chart) {
    this.chart.destroy();
  }
  const ctx = document.getElementById('piechart') as HTMLCanvasElement;
   this.chart = new Chart("piechart", {
    type: 'bar',
    data: {
      labels:TransactionDate,
      datasets: [{
        label: '# of Amount',
        data:TransactionAmount,
        backgroundColor: [
          'rgba(0, 0, 0, 0.514)',
        ],
        borderColor: [
          'rgba(0, 0, 0, 0.514)',
        ],
        borderWidth: 1
      }]
    },

    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }});

}

}
