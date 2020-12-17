import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoyaltyPrivacyComponent } from './loyalty-privacy.component';


const routes: Routes = [{ path: '', component: LoyaltyPrivacyComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoyaltyPrivacyRoutingModule { }
