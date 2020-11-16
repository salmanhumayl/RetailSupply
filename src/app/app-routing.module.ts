import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SupplierRFQItemComponent } from './components/supplier-rfq-item/supplier-rfq-item.component';
import{QuotedpriceComponent} from './components/supplier-rfq-item/quotedprice/quotedprice.component';
import {SupplierdashboardComponent } from './components/supplierdashboard/supplierdashboard.component';


const routes: Routes = [
  {path:'Supplierdashboard',component:SupplierdashboardComponent},
  {path:'home',component:SupplierRFQItemComponent},
  {path:'revise/:RFQNumber',component:QuotedpriceComponent},
  {path:'ViewRFQ/:RFQNumber',component:SupplierRFQItemComponent},
  {path: '', redirectTo:'Supplierdashboard',pathMatch:'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
