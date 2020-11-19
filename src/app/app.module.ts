import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { FeaturedReviewsComponent } from './components/featured-reviews/featured-reviews.component';
import { MiniListComponent } from './components/mini-list/mini-list.component';
import { CardDetailComponent } from './components/card-detail/card-detail.component';
import { CardListComponent } from './components/card-list/card-list.component';
import { MiniIndexComponent } from './components/mini-index/mini-index.component';
import { ScoreCardComponent } from './components/score-card/score-card.component';
import { PagePostComponent } from './components/page-post/page-post.component';
import { LogoComponent } from './components/logo/logo.component';
import { MenuComponent } from './components/menu/menu.component';
import { DateTransformPipe } from './pipes/date-transform.pipe';
import { HttpClientModule } from '@angular/common/http';
import { GraphQLModule } from './graphql.module';
import { PageComponent } from './components/page/page.component';
import { DirectoryComponent } from './components/directory/directory.component';
import { TextBlockComponent } from './components/text-block/text-block.component';
import { PageBrandComponent } from './components/page-brand/page-brand.component';
import { PageGlosaryComponent } from './components/page-glosary/page-glosary.component';
import { PageAuthorComponent } from './components/page-author/page-author.component';
import { PageSponsoredComponent } from './components/page-sponsored/page-sponsored.component';
import { CardGridComponent } from './components/card-grid/card-grid.component';
import { PageTagComponent } from './components/page-tag/page-tag.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { LoyaltyPrivacyComponent } from './components/loyalty-privacy/loyalty-privacy.component';
import { LoyaltyCookiesComponent } from './components/loyalty-cookies/loyalty-cookies.component';
import { LegalComponent } from './components/legal/legal.component';
import { PageSomatotypeComponent } from './components/page-somatotype/page-somatotype.component';

@NgModule({
  declarations: [
    AppComponent,
    LogoComponent,
    MenuComponent,
    HomeComponent,
    FeaturedReviewsComponent,
    CardDetailComponent,
    CardListComponent,
    CardGridComponent,
    MiniIndexComponent,
    MiniListComponent,
    PageComponent,
    DirectoryComponent,
    PagePostComponent,
    ScoreCardComponent,
    PageBrandComponent,
    PageGlosaryComponent,
    PageSponsoredComponent,
    FooterComponent,
    TextBlockComponent,
    DateTransformPipe,
    PageAuthorComponent,
    PageTagComponent,
    NotfoundComponent,
    LoyaltyPrivacyComponent,
    LoyaltyCookiesComponent,
    LegalComponent,
    PageSomatotypeComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    HttpClientModule,
    GraphQLModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
