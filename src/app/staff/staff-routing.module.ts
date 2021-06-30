import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddmoreordersComponent } from './addmoreorders/addmoreorders.component';
import { NavigateroutesComponent } from './navigateroutes/navigateroutes.component';
import { OrdersComponent } from './orders/orders.component';

const routes: Routes = [ 
{
  path: 'navigateroutes',
  component: NavigateroutesComponent
},
{
  path: 'more-routes',
  component: AddmoreordersComponent
},
{
  path: 'orders',
  component: OrdersComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StaffRoutingModule { }
