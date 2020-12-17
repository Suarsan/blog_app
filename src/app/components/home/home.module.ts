import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { FeaturedReviewsComponent } from '../featured-reviews/featured-reviews.component';
import { CardListComponent } from '../card-list/card-list.component';
import { DirectoryComponent } from '../directory/directory.component';
import { MiniListComponent } from '../mini-list/mini-list.component';
import { TextBlockComponent } from '../../components/text-block/text-block.component';
import { MiniIndexModule } from '../mini-index/mini-index.module';

@NgModule({
  declarations: [
    HomeComponent,
    FeaturedReviewsComponent,
    CardListComponent,
    DirectoryComponent,
    MiniListComponent,
    TextBlockComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MiniIndexModule
  ]
})
export class HomeModule { }
