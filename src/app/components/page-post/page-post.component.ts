import { Component, Input, OnChanges } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { SeoService } from '../../services/seo/seo.service';


@Component({
  selector: 'app-page-post',
  templateUrl: './page-post.component.html',
  styleUrls: ['./page-post.component.scss']
})
export class PagePostComponent implements OnChanges {

  @Input() post;
  tags;

  constructor(private seoService: SeoService,
              public domSanitizer: DomSanitizer) {
              }

  ngOnChanges() {
    this._setMetaInfo(this.post);
    this._setJSONLDMarkup(this.post);
  }

  public getImageMain() {
    if (this.post) {
      return this.domSanitizer.bypassSecurityTrustStyle('linear-gradient(to bottom, rgba(50, 50, 50, 0) 0%, rgba(16, 15, 15, .91) 89%, rgba(16, 15, 15, .93) 93%), url(' + this.post?.image + ')');
    }
  }

  private _setMetaInfo(post) {
    this.seoService.setMetaTags({
      title: post.metaTitle,
      description: post.metaDescription,
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
          name: 'Camisetas basicas online'
        }
      },
      brand: {
        '@type': 'Brand',
        logo: post.parent.image,
        name: post.title
      }
    };
    this.seoService.setJSONLDMarkups(json);
  }
}
