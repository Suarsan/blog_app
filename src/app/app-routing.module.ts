import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PageComponent } from './components/page/page.component';
import { PageAuthorComponent } from './components/page-author/page-author.component';
import { PageTagComponent } from './components/page-tag/page-tag.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { LoyaltyPrivacyComponent } from './components/loyalty-privacy/loyalty-privacy.component';
import { LoyaltyCookiesComponent } from './components/loyalty-cookies/loyalty-cookies.component';
import { LegalComponent } from './components/legal/legal.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full'},
  { path: '404', component: NotfoundComponent },
  { path: 'author/:author', component: PageAuthorComponent },
  { path: 'tag/:tag', component: PageTagComponent },
  { path: 'privacy', component: LoyaltyPrivacyComponent },
  { path: 'cookies', component: LoyaltyCookiesComponent },
  { path: 'legal', component: LegalComponent },
  { path: ':slug', component: PageComponent },
  { path: '**', component: PageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'top',
    onSameUrlNavigation: 'reload'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
