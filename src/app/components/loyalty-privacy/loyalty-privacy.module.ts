import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoyaltyPrivacyRoutingModule } from './loyalty-privacy-routing.module';
import { LoyaltyPrivacyComponent } from './loyalty-privacy.component';


@NgModule({
  declarations: [LoyaltyPrivacyComponent],
  imports: [
    CommonModule,
    LoyaltyPrivacyRoutingModule
  ]
})
export class LoyaltyPrivacyModule { }
