import { Component, Input, OnChanges, Inject, PLATFORM_ID } from '@angular/core';
import { PostService } from 'src/app/services/post-services/post-service/post.service';
import { tap, take } from 'rxjs/operators';
import { SeoService } from 'src/app/services/seo/seo.service';
import { TransferState, makeStateKey, DomSanitizer } from '@angular/platform-browser';
import { isPlatformServer } from '@angular/common';

const POSTS = makeStateKey('posts');

@Component({
  selector: 'app-page-brand',
  templateUrl: './page-brand.component.html',
  styleUrls: ['./page-brand.component.scss']
})
export class PageBrandComponent implements OnChanges {

  @Input() post;
  posts;

  constructor(private postService: PostService,
              @Inject(PLATFORM_ID) private platformId: any,
              private seoService: SeoService,
              private state: TransferState,
              public domSanitizer: DomSanitizer) {
              }

  ngOnChanges() {
    this._getPostsByParent();
    this._setMetaInfo(this.post);
    this._setJSONLDMarkup(this.post);
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

  private _setJSONLDMarkup(post) {
    const json = {
      '@context': 'https://schema.org/',
      '@type': 'Organization',
      name: post.title,
      brand: {
        '@type': 'Brand',
        logo: post.image,
        name: post.title,
      },
      review: {
        '@type': 'Review',
        name: post.title,
        author: {
          '@type': 'Person',
          name: post.author.firstname + ' ' + post.author.lastname
        },
        reviewBody: post.paragraphs.map(p => p.content).join(''),
        publisher: {
          '@type': 'Organization',
          name: 'Camisetas basicas online'
        }
      }
    };
    this.seoService.setJSONLDMarkups(json);
  }
}
