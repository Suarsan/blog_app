import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageRoutingModule } from './page-routing.module';
import { PageComponent } from './page.component';
import { PagePostComponent } from '../page-post/page-post.component';
import { ScoreCardComponent } from '../score-card/score-card.component';
import { PageBrandComponent } from '../page-brand/page-brand.component';
import { PageGlosaryComponent } from '../page-glosary/page-glosary.component';
import { PageSponsoredComponent } from '../page-sponsored/page-sponsored.component';
import { PageAuthorComponent } from '../page-author/page-author.component';
import { PageTagComponent } from '../page-tag/page-tag.component';
import { PageSomatotypeComponent } from '../page-somatotype/page-somatotype.component';
import { CardGridComponent } from '../card-grid/card-grid.component';
import { MiniIndexModule } from '../mini-index/mini-index.module';


@NgModule({
  declarations: [
    PageComponent,
    PagePostComponent,
    ScoreCardComponent,
    PageBrandComponent,
    PageGlosaryComponent,
    PageSponsoredComponent,
    PageAuthorComponent,
    PageTagComponent,
    PageSomatotypeComponent,
    CardGridComponent
  ],
  imports: [
    CommonModule,
    PageRoutingModule,
    MiniIndexModule
  ]
})
export class PageModule { }
