import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { PostService } from 'src/app/services/post-services/post-service/post.service';
import { ActivatedRoute } from '@angular/router';
import { tap } from 'rxjs/operators';
import { SeoService } from 'src/app/services/seo/seo.service';
import { TransferState, makeStateKey } from '@angular/platform-browser';
import { isPlatformServer } from '@angular/common';

const POSTS = makeStateKey('posts');

@Component({
  selector: 'app-page-author',
  templateUrl: './page-author.component.html',
  styleUrls: ['./page-author.component.scss']
})
export class PageAuthorComponent implements OnInit {

  posts;
  firstname;
  lastname;

  constructor(@Inject(PLATFORM_ID) private platformId: any,
              private postService: PostService,
              private seoService: SeoService,
              private activatedRoute: ActivatedRoute,
              private state: TransferState) { }

  ngOnInit(): void {
    const params = this.activatedRoute.snapshot.params['author'];
    this.firstname = params.split('-')[0];
    this.lastname = params.split('-')[1];
    this._getPostsByAuthor(this.firstname, this.lastname);
    this._setMetaInfo(this.firstname, this.lastname);
  }

  private _getPostsByAuthor(firstname, lastname) {
    this.posts = this.state.get(POSTS, null);
    this.state.set(POSTS, null);
    if (!this.posts) {
      this.postService.getPostsByAuthor(firstname, lastname).pipe(
        tap(posts => this.posts = posts),
        tap(posts => isPlatformServer(this.platformId) ? this.state.set(POSTS, posts) : null)
      ).subscribe();
    }
  }

  private _setMetaInfo(firstname, lastname) {
    this.seoService.setMetaTags({
      title: 'Articulos escritos por ' + firstname + ' ' + lastname + ' sobre camisetas básicas',
      description: 'Todos los articulos escritos por ' + firstname + ' ' + lastname + ' sobre camisetas básicas · Camisetas básicas online',
      slug: 'author/' + firstname + '-' + lastname
    });
  }
}
