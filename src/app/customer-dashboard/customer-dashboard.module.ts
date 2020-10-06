import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

import { CustomerDashboardRoutingModule } from "./customer-dashboard-routing.module";
import { CustomerDashboardComponent } from './customer-dashboard/customer-dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: CustomerDashboardComponent
  }
];

@NgModule({
  declarations: [CustomerDashboardComponent],
  exports: [
    CustomerDashboardComponent,
  ],
  imports: [
    CommonModule,
    CustomerDashboardRoutingModule
  ]
})
export class CustomerDashboardModule { }
