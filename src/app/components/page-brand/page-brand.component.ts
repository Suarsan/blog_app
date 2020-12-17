import { Component, OnInit, Input, OnChanges, Inject, PLATFORM_ID } from '@angular/core';
import { PostService } from 'src/app/services/post-services/post-service/post.service';
import { tap, take } from 'rxjs/internal/operators';
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
export class PageBrandComponent implements OnInit, OnChanges {

  environment;
  @Input() post;
  posts;

  constructor(private postService: PostService,
              @Inject(PLATFORM_ID) private platformId: any,
              private seoService: SeoService,
              private state: TransferState) {
                this.environment = environment;
              }

  ngOnInit(): void {
  }

  ngOnChanges() {
    this._getPostsByParent();
    this._setMetaInfo(this.post);
  }

  private _getPostsByParent() {
    this.posts = this.state.get(POSTS, null);
    if (!this.posts) {
      this.postService.getPostsByParent(this.post.id).pipe(
        take(1),
        tap(o => this.posts = o),
        tap(o => isPlatformServer(this.platformId) ? this.state.set(POSTS, o) : null)
      ).subscribe();
    } else {
      this.state.set(POSTS, null);
    }
  }

  private _setMetaInfo(post) {
    this.seoService.setMetaTags({
      title: 'Mejores camisetas básicas de la marca ' + post.title,
      description: post.paragraphs && (post.paragraphs.length > 0) ? post.paragraphs[0].content : null,
      slug: post.slug,
      parent: post.parent
    });
  }

}
