import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { HeaderModule } from '../header/header.module';
import { SidenavVModule } from '../sidenav-v/sidenav-v.module';


@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SidenavVModule,
    HeaderModule
    
    
  ],
  exports: [DashboardComponent]
})
export class DashboardModule { }
