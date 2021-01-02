import { BrowserTransferStateModule, BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { HttpLink } from 'apollo-angular/http';
import { InMemoryCache } from '@apollo/client/core';
import { APOLLO_OPTIONS } from 'apollo-angular';
import { GraphQLModule } from './graphql.module';
import { AppComponent } from './app.component';
import { LogoComponent } from './components/logo/logo.component';
import { MenuComponent } from './components/menu/menu.component';
import { CardDetailComponent } from './components/card-detail/card-detail.component';
import { FooterComponent } from './components/footer/footer.component';
import { NotfoundComponent } from './components/notfound/notfound.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    LogoComponent,
    CardDetailComponent,
    FooterComponent,
    NotfoundComponent
  ],
  imports: [
    AppRoutingModule,
    HttpClientModule,
    BrowserModule.withServerTransition({ appId: 'blographql' }),
    BrowserTransferStateModule,
    GraphQLModule
  ],
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory(httpLink: HttpLink) {
        return {
          cache: new InMemoryCache(),
          link: httpLink.create({
            uri: 'https://api.camisetasbasicas.online',
          }),
        };
      },
      deps: [HttpLink],
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
