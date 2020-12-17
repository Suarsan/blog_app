import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MiniIndexComponent } from './mini-index.component';


const routes: Routes = [{ path: '', component: MiniIndexComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MiniIndexRoutingModule { }
