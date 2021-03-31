import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { PostService } from 'src/app/services/post-services/post-service/post.service';
import { TagsService } from 'src/app/services/tags-services/tags-service/tags.service';
import { tap, take } from 'rxjs/operators';
import { TransferState, makeStateKey } from '@angular/platform-browser';

const BRANDS = makeStateKey('brands');
const BEST_REVIEWS = makeStateKey('bestReviews');
const LAST_REVIEWS = makeStateKey('lastReviews');
const SOMATOTYPE_POSTS = makeStateKey('somatotypePosts');
const TAGS = makeStateKey('tags');


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  bestReviews;
  lastReviews;
  somatotypePosts;
  brands;
  tags;

  constructor(private postService: PostService,
              private tagsService: TagsService,
              private state: TransferState) { }

  ngOnInit() {
    this._getLastReviews();
    this._getTags();
    this._getSomatotypePosts();
    this._getBrands();
  }

  private _getLastReviews() {
    this.lastReviews = this.state.get(LAST_REVIEWS, null);
    this.bestReviews = this.state.get(BEST_REVIEWS, null);
    if (!this.lastReviews || !this.bestReviews) {
      this.postService.getLastReviews().pipe(
        take(1),
        tap(o => this.lastReviews = o.slice(0, 4)),
        tap(o => this.bestReviews = o.slice().sort((a, b) => a.analysis.score > b.analysis.score ? -1 : 1).slice(0, 10)),
        tap(o => this.state.set(LAST_REVIEWS, o.slice(0, 4))),
        tap(o => this.state.set(BEST_REVIEWS, o.slice().sort((a, b) => a.analysis.score > b.analysis.score ? -1 : a.analysis.score > b.analysis.score ? 1 : 0).slice(0, 10)))
      ).subscribe();
    }
  }
  private _getSomatotypePosts() {
    this.somatotypePosts = this.state.get(SOMATOTYPE_POSTS, null);
    if (!this.somatotypePosts) {
      this.postService.getSomatotypePosts().pipe(
        take(1),
        tap(o => this.somatotypePosts = o),
        tap(o => this.state.set(SOMATOTYPE_POSTS, o)),
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

  private _getBrands() {
    this.brands = this.state.get(BRANDS, null);
    if (!this.brands) {
      this.postService.getBrands().pipe(
        tap(brands => this.state.set(BRANDS, brands)),
        tap(brands => this.brands = brands)
      ).subscribe();
    }
  }
}
