import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MiniIndexRoutingModule } from './mini-index-routing.module';
import { MiniIndexComponent } from './mini-index.component';


@NgModule({
  declarations: [MiniIndexComponent],
  imports: [
    CommonModule,
    MiniIndexRoutingModule
  ],
  exports: [MiniIndexComponent]
})
export class MiniIndexModule { }
