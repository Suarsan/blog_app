import { Component, Input, OnChanges, Inject, PLATFORM_ID } from '@angular/core';
import { PostService } from 'src/app/services/post-services/post-service/post.service';
import { tap, take } from 'rxjs/operators';
import { SeoService } from 'src/app/services/seo/seo.service';
import { environment } from 'src/environments/environment';
import { TransferState, makeStateKey } from '@angular/platform-browser';
import { isPlatformServer } from '@angular/common';

const POSTS = makeStateKey('posts');

@Component({
  selector: 'app-page-brand',
  templateUrl: './page-brand.component.html',
  styleUrls: ['./page-brand.component.scss']
})
export class PageBrandComponent implements OnChanges {

  @Input() post;
  environment;
  posts;

  constructor(private postService: PostService,
              @Inject(PLATFORM_ID) private platformId: any,
              private seoService: SeoService,
              private state: TransferState) {
                this.environment = environment;
              }

  ngOnChanges() {
    this._getPostsByParent();
    this._setMetaInfo(this.post);
  }

  private _getPostsByParent() {
    this.posts = this.state.get(POSTS, null);
    this.state.set(POSTS, null);
    if (!this.posts) {
      this.postService.getPostsByParent(this.post.id).pipe(
        take(1),
        tap(posts => isPlatformServer(this.platformId) ? this.state.set(POSTS, posts) : null),
        tap(posts => this.posts = posts)
      ).subscribe();
    }
  }

  private _setMetaInfo(post) {
    this.seoService.setMetaTags({
      title: post.metaTitle,
      description: post.metaDescription,
      slug: post.slug,
      parent: post.parent,
      image: post.image
    });
  }
}
