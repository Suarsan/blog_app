import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PageComponent } from './components/page/page.component';
import { PageAuthorComponent } from './components/page-author/page-author.component';
import { PageTagComponent } from './components/page-tag/page-tag.component';
import { NotfoundComponent } from './components/notfound/notfound.component';


const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full'},
  { path: '404', component: NotfoundComponent },
  { path: 'author/:author', component: PageAuthorComponent },
  { path: 'tag/:tag', component: PageTagComponent },
  { path: ':slug', component: PageComponent },
  { path: '**', redirectTo: '/404' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'top',
    onSameUrlNavigation: 'reload'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
