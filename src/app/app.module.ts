import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { MainGridComponent } from './components/main-grid/main-grid.component';
import { MiniListComponent } from './components/mini-list/mini-list.component';
import { CardDetailComponent } from './components/card-detail/card-detail.component';
import { CardListComponent } from './components/card-list/card-list.component';
import { MiniIndexComponent } from './components/mini-index/mini-index.component';
import { ScoreCardComponent } from './components/score-card/score-card.component';
import { PostPageComponent } from './components/post-page/post-page.component';
import { LogoComponent } from './components/logo/logo.component';
import { MenuComponent } from './components/menu/menu.component';
import { DateTransformPipe } from './pipes/date-transform.pipe';
import { HttpClientModule } from '@angular/common/http';
import { GraphQLModule } from './graphql.module';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HomePageComponent,
    MainGridComponent,
    MiniListComponent,
    CardDetailComponent,
    CardListComponent,
    MiniIndexComponent,
    ScoreCardComponent,
    PostPageComponent,
    LogoComponent,
    MenuComponent,
    DateTransformPipe
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
