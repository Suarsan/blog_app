import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoyaltyCookiesRoutingModule } from './loyalty-cookies-routing.module';
import { LoyaltyCookiesComponent } from './loyalty-cookies.component';


@NgModule({
  declarations: [LoyaltyCookiesComponent],
  imports: [
    CommonModule,
    LoyaltyCookiesRoutingModule
  ]
})
export class LoyaltyCookiesModule { }
