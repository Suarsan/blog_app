import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { PostService } from 'src/app/services/post-services/post-service/post.service';
import { tap } from 'rxjs/internal/operators';
import { SeoService } from 'src/app/services/seo/seo.service';
import { environment } from 'src/environments/environment';

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
              private seoService: SeoService) {
                this.environment = environment;
              }

  ngOnInit(): void {
      this._getPostsByParent();
      this._setMetaInfo(this.post);
  }

  ngOnChanges() {
    if (this.post) {
      this._getPostsByParent();
    }
  }
  private _getPostsByParent() {
    this.postService.getPostsByParent(this.post.id).pipe(
      tap(o => this.posts = o)
    ).subscribe();
  }

  private _setMetaInfo(post) {
    this.seoService.setTitle('Mejores camisetas básicas de la marca ' + post.title);
    this.seoService.setMetaTags({
      title: post.title,
      description: post.paragraphs[0].content,
      slug: post.slug
    });
  }

}
