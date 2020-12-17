import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoyaltyCookiesComponent } from './loyalty-cookies.component';


const routes: Routes = [{ path: '', component: LoyaltyCookiesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoyaltyCookiesRoutingModule { }
