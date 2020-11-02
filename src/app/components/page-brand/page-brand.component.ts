import { Component, OnInit, Input } from '@angular/core';
import { PostService } from 'src/app/services/post-services/post-service/post.service';
import { tap } from 'rxjs/internal/operators';
import { SeoService } from 'src/app/services/seo/seo.service';

@Component({
  selector: 'app-page-brand',
  templateUrl: './page-brand.component.html',
  styleUrls: ['./page-brand.component.scss']
})
export class PageBrandComponent implements OnInit {

  @Input() post;
  posts;

  constructor(private postService: PostService,
              private seoService: SeoService) { }

  ngOnInit(): void {
      this._getPostsByParent();
      this._setMetaInfo(this.post);
  }

  private _getPostsByParent() {
    this.postService.getPostsByParent(this.post.id).pipe(
      tap(o => this.posts = o)
    ).subscribe();
  }

  private _setMetaInfo(post) {
    this.seoService.setTitle('Las mejores camisetas blancas de la marca ' + post.title + ' · Tshirts and basics');
    this.seoService.setMetaTags({
      title: post.title,
      description: post.paragraphs[0].content,
      slug: post.slug
    });
  }

}
