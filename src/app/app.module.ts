import { BrowserModule, BrowserTransferStateModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { CardDetailComponent } from './components/card-detail/card-detail.component';
import { LogoComponent } from './components/logo/logo.component';
import { MenuComponent } from './components/menu/menu.component';
import { DateTransformPipe } from './pipes/date-transform.pipe';
import { HttpClientModule } from '@angular/common/http';
import { NotfoundComponent } from './components/notfound/notfound.component';

@NgModule({
  declarations: [
    AppComponent,
    LogoComponent,
    MenuComponent,
    CardDetailComponent,
    FooterComponent,
    DateTransformPipe,
    NotfoundComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'bloggraphql' }),
    AppRoutingModule,
    HttpClientModule,
    BrowserTransferStateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
