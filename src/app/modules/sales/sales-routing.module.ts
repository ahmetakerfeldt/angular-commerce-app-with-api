import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SaleItemComponent} from "./pages/sale-item/sale-item.component";
import {MySalesComponent} from "./pages/my-sales/my-sales.component";
import {MyBuysComponent} from "./pages/my-buys/my-buys.component";
import {EditSaleComponent} from "./pages/edit-sale/edit-sale.component";

const routes: Routes = [

  {
    path: 'sale-item',
    component: SaleItemComponent

  },
  {
    path: 'my-sales',
    component: MySalesComponent
  },
  {
    path: 'my-buys',
    component: MyBuysComponent
  },
  {
    path: 'edit-sale',
    component: EditSaleComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SalesRoutingModule {
}
