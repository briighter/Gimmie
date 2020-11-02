import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { NavRoutingModule } from "./navbar/nav-routing.module";

@NgModule({
  declarations: [NavbarComponent],
  imports: [
    CommonModule,
    NavRoutingModule
  ],
  exports: [
    NavbarComponent,
    NavRoutingModule
  ]
})
export class SharedModule { }
