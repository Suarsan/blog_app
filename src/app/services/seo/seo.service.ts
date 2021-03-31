import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class SeoService {

  constructor(private meta: Meta,
              @Inject(DOCUMENT) private document: Document,
              private title: Title) { }

  public setMetaTags(config) {
    this.title.setTitle(config.title);
    this.meta.updateTag({ name: 'title', content: config.title});
    this.meta.updateTag({ name: 'description', content: config.description});
    this.meta.updateTag({ name: 'twitter:card', content: 'summary'});
    this.meta.updateTag({ name: 'twitter:site', content: '@camisetabasic'});
    this.meta.updateTag({ name: 'twitter:title', content: config.title});
    this.meta.updateTag({ name: 'twitter:description', content: config.description});
    this.meta.updateTag({ name: 'twitter:image', content: config.image});
    this.meta.updateTag({ name: 'og:type', content: 'article'});
    this.meta.updateTag({ name: 'og:url', content: 'camisetasbasicas.online/' + (config.parent ? config.parent.slug + '/' : '') + config.slug });
    this.meta.updateTag({ name: 'og:title', content: config.title});
    this.meta.updateTag({ name: 'og:description', content: config.description});
    this.meta.updateTag({ name: 'og:image', content: config.image});
    this._setCanonical(config);
    this._setHrefLang(config);
  }

  private _setCanonical(config) {
    this.document.querySelectorAll('link[rel=canonical]').forEach(l => l.remove());
    const link: HTMLLinkElement = this.document.createElement('link');
    link.setAttribute('rel', 'canonical');
    link.setAttribute('href', 'https://camisetasbasicas.online/' + (config.parent ? config.parent.slug + '/' : '') + config.slug);
    this.document.head.appendChild(link);
  }

  private _setHrefLang(config) {
    this.document.querySelectorAll('link[rel=alternate]').forEach(l => l.remove());
    const link: HTMLLinkElement = this.document.createElement('link');
    link.setAttribute('rel', 'alternate');
    link.setAttribute('hreflang', 'es');
    link.setAttribute('href', 'https://camisetasbasicas.online/' + (config.parent ? config.parent.slug + '/' : '') + config.slug);
    this.document.head.appendChild(link);
  }

  public setJSONLDMarkups(json) {
    const oldScripts = this.document.getElementsByClassName('structured-data');
    Array.from(oldScripts).forEach(os => this.document.body.removeChild(os));
    const script: HTMLScriptElement = this.document.createElement('script');
    script.setAttribute('type', 'application/ld+json');
    script.setAttribute('class', 'structured-data');
    script.innerHTML = JSON.stringify(json);
    this.document.body.appendChild(script);
  }

}
