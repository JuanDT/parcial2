import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SidenavVRoutingModule } from './sidenav-v-routing.module';
import { SidenavVComponent } from './sidenav-v.component';


@NgModule({
  declarations: [SidenavVComponent],
  imports: [
    CommonModule,
    SidenavVRoutingModule
  ], exports: [SidenavVComponent]
})
export class SidenavVModule { }
