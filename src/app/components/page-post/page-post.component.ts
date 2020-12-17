import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { TagsService } from 'src/app/services/tags-services/tags-service/tags.service';
import { SeoService } from '../../services/seo/seo.service';
import { environment } from 'src/environments/environment';
import { TransferState, makeStateKey } from '@angular/platform-browser';
import { tap } from 'rxjs/internal/operators/tap';

const TAGS = makeStateKey('tags');

@Component({
  selector: 'app-page-post',
  templateUrl: './page-post.component.html',
  styleUrls: ['./page-post.component.scss']
})
export class PagePostComponent implements OnInit {

  @Input() post;
  tags;
  environment;

  constructor(private tagsService: TagsService,
              private seoService: SeoService,
              private state: TransferState,
              private domSanitizer: DomSanitizer) {
                this.environment = environment;
              }

  ngOnInit() {
    this._getTags();
    this._setMetaInfo(this.post);
    this._setJSONLDMarkup(this.post);
  }

  public getImageMain() {
    if (this.post) {
      return this.domSanitizer.bypassSecurityTrustStyle(
        'linear-gradient(to bottom, rgba(50, 50, 50, 0) 0%, rgba(16, 15, 15, .91) 89%, rgba(16, 15, 15, .93) 93%), url(' 
        + this.post?.image + ')');
    }
  }

  private _getTags() {
    this.tags = this.state.get(TAGS, null);
    if (!this.tags) {
      this.tagsService.getTags().pipe(
        tap(o => this.tags = o),
        tap(o => this.state.set(TAGS, o))
      ).subscribe();
    }
  }

  private _setMetaInfo(post) {
    this.seoService.setMetaTags({
      title: post.title,
      description: post.paragraphs[0].content,
      parent: post.parent,
      slug: post.slug,
      image: post.image
    });
  }

  private _setJSONLDMarkup(post) {
    const json = {
      '@context': 'https://schema.org/',
      '@type': 'Product',
      image: post.image,
      name: post.title,
      review: {
        '@type': 'Review',
        reviewRating: {
          '@type': 'Rating',
          ratingValue: post.analysis.score,
          bestRating: 10,
          worstRating: 0
        },
        name: post.title,
        author: {
          '@type': 'Person',
          name: post.author.firstname + ' ' + post.author.lastname
        },
        reviewBody: post.paragraphs.map(p => p.content).join(''),
        publisher: {
          '@type': 'Organization',
          name: 'Camisetasbasicas.online'
        }
      },
      brand: {
        '@type': 'Brand',
        logo: this.environment.staticURL + post.parent.image
      }
    };
    this.seoService.setJSONLDMarkups(json);
  }
}
