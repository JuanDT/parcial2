import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AgregarRoutingModule } from './agregar-routing.module';
import { AgregarComponent } from './agregar.component';


@NgModule({
  declarations: [AgregarComponent],
  imports: [
    CommonModule,
    AgregarRoutingModule,
    FormsModule
  ], exports: [
    AgregarComponent
  ]
})
export class AgregarModule { }
