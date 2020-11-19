import { Injectable, Inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class SeoService {

  constructor(private meta: Meta,
              @Inject(DOCUMENT) private document: Document,
              private title: Title) { }

  public setTitle(title) {
    this.title.setTitle(title);
  }

  public setMetaTags(config) {
    this.meta.updateTag({ name: 'title', content: config.title});
    this.meta.updateTag({ name: 'description', content: config.description});
    this.meta.updateTag({ name: 'twitter:card', content: 'summary'});
    this.meta.updateTag({ name: 'twitter:site', content: '@camisetabasic'});
    this.meta.updateTag({ name: 'twitter:title', content: config.title});
    this.meta.updateTag({ name: 'twitter:description', content: config.description});
    this.meta.updateTag({ name: 'twitter:image', content: config.image});

    this.meta.updateTag({ name: 'og:type', content: 'article'});
    this.meta.updateTag({ name: 'og:site_name', content: 'camisetasbasicas.online/' + config.slug});
    this.meta.updateTag({ name: 'og:title', content: config.title});
    this.meta.updateTag({ name: 'og:description', content: config.description});
    this.meta.updateTag({ name: 'og:image', content: config.image});
    this._setCanonical(config.slug);
  }

  private _setCanonical(slug) {
    const link: HTMLLinkElement = this.document.createElement('link');
    link.setAttribute('rel', 'canonical');
    link.setAttribute('href', 'https://camisetasbasicas.online/' + slug);
    this.document.head.appendChild(link);
  }
}
