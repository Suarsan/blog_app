import { Component, Input, OnChanges, PLATFORM_ID, Inject } from '@angular/core';
import { PostService } from 'src/app/services/post-services/post-service/post.service';
import { tap, take } from 'rxjs/operators';
import { SeoService } from 'src/app/services/seo/seo.service';
import { TransferState, makeStateKey } from '@angular/platform-browser';
import { Subscription } from 'rxjs';
import { isPlatformServer } from '@angular/common';

const POSTS = makeStateKey('posts');

@Component({
  selector: 'app-page-somatotype',
  templateUrl: './page-somatotype.component.html',
  styleUrls: ['./page-somatotype.component.scss']
})
export class PageSomatotypeComponent implements OnChanges {

  @Input() post;
  posts;
  routerSubscription: Subscription;

  constructor(private postService: PostService,
              @Inject(PLATFORM_ID) private platformId: any,
              private seoService: SeoService,
              private state: TransferState) { }

  ngOnChanges() {
    this._getPostsByTags();
    this._setMetaInfo(this.post);
  }

  private _getPostsByTags() {
    this.posts = this.state.get(POSTS, null);
    this.state.set(POSTS, null);
    if (!this.posts) {
      this.postService.getPostsByTags(this.post.tags.map(t => t.content)).pipe(
        take(1),
        tap(posts => isPlatformServer(this.platformId) ? this.state.set(POSTS, posts) : null),
        tap(posts => this.posts = posts),
      ).subscribe();
    }
  }

  private _setMetaInfo(post) {
    this.seoService.setMetaTags({
      title: post.metaTitle,
      description: post.metaDescription,
      slug: post.slug,
      parent: post.parent
    });
  }

}
