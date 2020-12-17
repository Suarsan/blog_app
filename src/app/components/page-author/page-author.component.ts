import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/services/post-services/post-service/post.service';
import { ActivatedRoute } from '@angular/router';
import { tap } from 'rxjs/internal/operators/tap';
import { SeoService } from 'src/app/services/seo/seo.service';
import { TransferState, makeStateKey } from '@angular/platform-browser';

const POSTS = makeStateKey('posts');

@Component({
  selector: 'app-page-author',
  templateUrl: './page-author.component.html',
  styleUrls: ['./page-author.component.scss']
})
export class PageAuthorComponent implements OnInit {

  posts;
  author;

  constructor(private postService: PostService,
              private seoService: SeoService,
              private activatedRoute: ActivatedRoute,
              private state: TransferState) { }

  ngOnInit(): void {
    const params = this.activatedRoute.snapshot.params['author'];
    const firstname = params.split('-')[0];
    const lastname = params.split('-')[1];
    this.author = firstname + ' ' + lastname;
    this._getPostsByAuthor(firstname, lastname);
  }

  private _getPostsByAuthor(firstname, lastname) {
    this.posts = this.state.get(POSTS, null);
    if (!this.posts) {
      this.postService.getPostsByAuthor(firstname, lastname).pipe(
        tap(o => this.posts = o),
        tap(o => this.state.set(POSTS, o)),
        tap(o => this._setMetaInfo(o))
      ).subscribe();
    }
}

private _setMetaInfo(posts) {
  this.seoService.setMetaTags({
    title: 'Articulos escritos por ' + this.author + ' sobre camisetas básicas',
    description: 'Todos los articulos escritos por ' + this.author + ' sobre camisetas básicas · Camisetas básicas online',
    slug: 'author/' + this.activatedRoute.snapshot.params['author']
  });
}
}
