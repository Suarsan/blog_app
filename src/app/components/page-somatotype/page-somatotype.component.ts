import { Component, OnInit, Input, OnChanges, PLATFORM_ID, Inject } from '@angular/core';
import { PostService } from 'src/app/services/post-services/post-service/post.service';
import { tap, take } from 'rxjs/internal/operators';
import { SeoService } from 'src/app/services/seo/seo.service';
import { environment } from 'src/environments/environment';
import { TransferState, makeStateKey } from '@angular/platform-browser';
import { Subscription } from 'rxjs/internal/Subscription';
import { isPlatformServer } from '@angular/common';

const POSTS = makeStateKey('posts');

@Component({
  selector: 'app-page-somatotype',
  templateUrl: './page-somatotype.component.html',
  styleUrls: ['./page-somatotype.component.scss']
})
export class PageSomatotypeComponent implements OnInit, OnChanges {

  @Input() post;
  posts;
  environment;
  routerSubscription: Subscription;

  constructor(private postService: PostService,
              @Inject(PLATFORM_ID) private platformId: any,
              private seoService: SeoService,
              private state: TransferState) {
                this.environment = environment;
              }

  ngOnInit() {
  }

  ngOnChanges() {
    this._getPostsByTags();
    this._setMetaInfo(this.post);
  }

  private _getPostsByTags() {
    this.posts = this.state.get(POSTS, null);
    if (!this.posts) {
      this.postService.getPostsByTags(this.post.tags.map(t => t.content)).pipe(
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
      title: post.title,
      description: post.paragraphs && (post.paragraphs.length > 0) ? post.paragraphs[0].content : null,
      slug: post.slug,
      parent: post.parent
    });
  }

}
