import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CustomerComponent } from './customer/customer.component';
import { SearchByAmountPipe } from './pipes/search-by-amount.pipe';
import { SearchPipe } from './pipes/search.pipe';
import { FormsModule } from '@angular/forms';
import { MyChartComponent } from './component/mychart/my-chart/my-chart.component';


@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    SearchByAmountPipe,
    SearchPipe,
    MyChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
