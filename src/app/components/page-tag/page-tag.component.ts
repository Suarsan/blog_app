import { Component, OnInit, OnDestroy } from '@angular/core';
import { tap } from 'rxjs/internal/operators/tap';
import { PostService } from 'src/app/services/post-services/post-service/post.service';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/internal/operators/filter';
import { SeoService } from 'src/app/services/seo/seo.service';
import { Subscription } from 'rxjs/internal/Subscription';
import { TransferState, makeStateKey } from '@angular/platform-browser';

const POSTS = makeStateKey('posts');

@Component({
  selector: 'app-page-tag',
  templateUrl: './page-tag.component.html',
  styleUrls: ['./page-tag.component.scss']
})
export class PageTagComponent implements OnInit, OnDestroy {

  posts;
  tag;
  routerSubscription: Subscription;

  constructor(private postService: PostService,
              private router: Router,
              private seoService: SeoService,
              private state: TransferState,
              private activatedRoute: ActivatedRoute) {
                this._routerSubscription();
              }

  ngOnInit(): void {
    this.tag = this.activatedRoute.snapshot.params['tag'];
    this._getPostsByTag(this.tag);
  }

  private _routerSubscription() {
    this.routerSubscription = this.router.events.pipe(
      filter(o => o instanceof NavigationEnd),
      tap(o => this.tag = this.activatedRoute.snapshot.params['tag']),
      tap(o => this._getPostsByTag(this.tag))
    ).subscribe();
  }

  private _getPostsByTag(tag) {
    this.posts = this.state.get(POSTS, null);
    if (!this.posts) {
      this.postService.getPostsByTag(tag).pipe(
        tap(o => this.posts = o),
        tap(o => this.state.set(POSTS, o)),
        tap(o => this._setMetaInfo(o))
      ).subscribe();
    }
  }

  private _setMetaInfo(post) {
    this.seoService.setMetaTags({
      title: 'Todas las camisetas básicas ' + this.tag,
      description: 'Las mejores camisetas blancas analizadas y filtradas por ' + this.tag,
      slug: 'tag/' + this.tag
    });
  }

  ngOnDestroy() {
    this.routerSubscription.unsubscribe();
  }
}
