import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { PostService } from 'src/app/services/post-services/post-service/post.service';
import { tap } from 'rxjs/internal/operators';
import { SeoService } from 'src/app/services/seo/seo.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-page-somatotype',
  templateUrl: './page-somatotype.component.html',
  styleUrls: ['./page-somatotype.component.scss']
})
export class PageSomatotypeComponent implements OnInit, OnChanges {

  environment;
  @Input() post;
  posts;

  constructor(private postService: PostService,
              private seoService: SeoService) {
                this.environment = environment;
              }

  ngOnInit(): void {
      this._getPostsByTags();
      this._setMetaInfo(this.post);
  }

  ngOnChanges() {
    if (this.post) {
      this._getPostsByTags();
    }
  }
  private _getPostsByTags() {
    this.postService.getPostsByTags(this.post.tags.map(t => t.content)).pipe(
      tap(o => this.posts = o)
    ).subscribe();
  }

  private _setMetaInfo(post) {
    // this.seoService.setTitle('Mejores camisetas básicas de la marca ' + post.title);
    // this.seoService.setMetaTags({
    //   title: post.title,
    //   description: post.paragraphs[0].content,
    //   slug: post.slug
    // });
  }

}
