import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/services/post-services/post-service/post.service';
import { TagsService } from 'src/app/services/tags-services/tags-service/tags.service';
import { tap, take } from 'rxjs/internal/operators';
import { TransferState, makeStateKey } from '@angular/platform-browser';

const BEST_REVIEWS = makeStateKey('bestReviews');
const LAST_REVIEWS = makeStateKey('lastReviews');
const BRANDS = makeStateKey('brands');
const TAGS = makeStateKey('tags');


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  bestReviews;
  lastReviews;
  brands;
  tags;

  constructor(private postService: PostService,
              private tagsService: TagsService,
              private state: TransferState) { }

  ngOnInit() {
    this._getBestReviews();
    this._getLastReviews();
    this._getBrands();
    this._getTags();
  }

  private _getBestReviews() {
    this.bestReviews = this.state.get(BEST_REVIEWS, null);
    if (!this.bestReviews) {
      this.postService.getPostsByScore().pipe(
        take(1),
        tap(o => this.bestReviews = o.slice(0, 10)),
        tap(o => this.state.set(BEST_REVIEWS, o.slice(0, 10)))
      ).subscribe();
    }
  }
  private _getLastReviews() {
    this.lastReviews = this.state.get(LAST_REVIEWS, null);
    if (!this.lastReviews) {
      this.postService.getLastReviews().pipe(
        take(1),
        tap(o => this.lastReviews = o.slice(0, 4)),
        tap(o => this.state.set(LAST_REVIEWS, o.slice(0, 4)))
      ).subscribe();
    }
  }
  private _getBrands() {
    this.brands = this.state.get(BRANDS, null);
    if (!this.brands) {
      this.postService.getBrands().pipe(
        take(1),
        tap(o => this.brands = o.sort((a, b) =>  a.title.toLowerCase() === b.title.toLowerCase() ? 0 : a.title.toLowerCase() > b.title.toLowerCase() ? 1 : -1 )),
        tap(o => this.state.set(BRANDS, this.brands))
      ).subscribe();
    }
  }
  private _getTags() {
    this.tags = this.state.get(TAGS, null);
    if (!this.tags) {
      this.tagsService.getTags().pipe(
        take(1),
        tap(o => this.tags = o),
        tap(o => this.state.set(TAGS, o))
      ).subscribe();
    }
  }
}
