import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SalesRoutingModule } from './sales-routing.module';
import { SaleItemComponent } from './pages/sale-item/sale-item.component';
import {SharedModule} from "../../shared/shared.module";
import { MySalesComponent } from './pages/my-sales/my-sales.component';
import { MyBuysComponent } from './pages/my-buys/my-buys.component';
import { EditSaleComponent } from './pages/edit-sale/edit-sale.component';


@NgModule({
  declarations: [
    SaleItemComponent,
    MySalesComponent,
    MyBuysComponent,
    EditSaleComponent,
  ],
  imports: [
    CommonModule,
    SalesRoutingModule,
    SharedModule
  ]
})
export class SalesModule { }
