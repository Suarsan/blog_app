import { Component, OnInit, OnDestroy } from '@angular/core';
import { tap } from 'rxjs/internal/operators/tap';
import { PostService } from 'src/app/services/post-services/post-service/post.service';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/internal/operators/filter';
import { SeoService } from 'src/app/services/seo/seo.service';
import { Subscription } from 'rxjs/internal/Subscription';
import { DomSanitizer } from '@angular/platform-browser';

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
              private activatedRoute: ActivatedRoute) {
                this.routerSubscription = this.router.events.pipe(
                  filter(o => o instanceof NavigationEnd),
                  tap(o => this.tag = this.activatedRoute.snapshot.params['tag']),
                  tap(o => this._getPostsByTag(this.tag))
                ).subscribe();
              }

  ngOnInit(): void {
    this.tag = this.activatedRoute.snapshot.params['tag'];
    this._getPostsByTag(this.tag);
  }

  private _getPostsByTag(tag) {
    this.postService.getPostsByTag(tag).pipe(
      tap(o => this.posts = o),
      tap(o => this._setMetaInfo(o))
    ).subscribe();
  }

  private _setMetaInfo(post) {
    this.seoService.setTitle('Todas las camisetas básicas ' + this.tag);
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
