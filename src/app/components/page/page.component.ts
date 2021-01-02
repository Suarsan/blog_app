import { Component, OnInit, Inject, PLATFORM_ID, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { PostService } from 'src/app/services/post-services/post-service/post.service';
import { tap, take, map, flatMap, filter } from 'rxjs/operators';
import { TransferState, makeStateKey } from '@angular/platform-browser';
import { isPlatformServer } from '@angular/common';

const POST = makeStateKey('post');

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit, OnDestroy {

  post;
  routerSubscription;

  constructor(@Inject(PLATFORM_ID) private platformId: object,
              private activatedRoute: ActivatedRoute,
              private router: Router,
              private postService: PostService,
              private state: TransferState) { }

  ngOnInit() {
    this._getPost();
    this._routerSubscription();
  }

  private _routerSubscription() {
    this.routerSubscription = this.router.events.pipe(
      filter(o => o instanceof NavigationEnd),
      tap(o => this._getPost())
    ).subscribe();
  }

  private _getPost() {
    this.post = this.state.get(POST, null);
    this.state.set(POST, null);
    if (!this.post) {
      this.getPostPath().pipe(
        flatMap(path => this.postService.getPost(path)),
        tap(post => isPlatformServer(this.platformId) ? this.state.set(POST, post) : null),
        tap(post => post ? this.post = post : this.router.navigate(['/404']))
      ).subscribe();
    }
  }

  private getPostPath() {
    return this.activatedRoute.url.pipe(take(1), map(path => path[path.length - 1].path));
  }

  ngOnDestroy() {
    this.routerSubscription.unsubscribe();
  }
}
