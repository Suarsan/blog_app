import { isPlatformServer } from '@angular/common';
import { Component, Inject, OnDestroy, OnInit, PLATFORM_ID } from '@angular/core';
import { makeStateKey, TransferState } from '@angular/platform-browser';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter, take, tap } from 'rxjs/operators';
import { PostService } from 'src/app/services/post-services/post-service/post.service';
import { SeoService } from 'src/app/services/seo/seo.service';

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

  constructor(@Inject(PLATFORM_ID) private platformId: object,
              private postService: PostService,
              private router: Router,
              private seoService: SeoService,
              private state: TransferState,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.tag = this.activatedRoute.snapshot.params['tag'];
    this._getPostsByTag(this.tag);
    this._setMetaInfo(this.tag);
    this._routerSubscription();
  }

  private _routerSubscription() {
    this.routerSubscription = this.router.events.pipe(
      filter(o => o instanceof NavigationEnd),
      tap(o => this.tag = this.activatedRoute.snapshot.params['tag']),
      tap(o => this._getPostsByTag(this.tag))
    ).subscribe();
  }

  private _getPostsByTag(tag) {
    if (isPlatformServer(this.platformId)) {
      this.postService.getPostsByTag(tag).pipe(
        take(1),
        tap(o => this.posts = o),
        tap(o => this.state.set(POSTS, o))
      ).subscribe();
    } else {
      if (this.state.get(POSTS, null)) {
        this.posts = this.state.get(POSTS, null);
      } else {
          this.postService.getPostsByTag(tag).pipe(
            take(1),
            tap(o => this.posts = o),
            tap(o => this.state.set(POSTS, null)),
          ).subscribe();
      }
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
