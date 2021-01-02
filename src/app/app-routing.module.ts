import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageComponent } from './components/page/page.component';
import { PageAuthorComponent } from './components/page-author/page-author.component';
import { PageTagComponent } from './components/page-tag/page-tag.component';
import { NotfoundComponent } from './components/notfound/notfound.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', loadChildren: () => import('./components/home/home.module').then(m => m.HomeModule) },
  { path: '404', component: NotfoundComponent, pathMatch: 'full' },
  { path: 'author/:author', component: PageAuthorComponent, pathMatch: 'full' },
  { path: 'tag/:tag', component: PageTagComponent, pathMatch: 'full' },
  { path: 'privacy', pathMatch: 'full', loadChildren: () => import('./components/loyalty-privacy/loyalty-privacy.module').then(m => m.LoyaltyPrivacyModule) },
  { path: 'cookies', pathMatch: 'full', loadChildren: () => import('./components/loyalty-cookies/loyalty-cookies.module').then(m => m.LoyaltyCookiesModule) },
  { path: 'legal', pathMatch: 'full', loadChildren: () => import('./components/legal/legal.module').then(m => m.LegalModule) },
  { path: ':slug', component: PageComponent, loadChildren: () => import('./components/page/page.module').then(m => m.PageModule) },
  { path: '**', component: PageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled',
    scrollPositionRestoration: 'top',
    relativeLinkResolution: 'legacy'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
