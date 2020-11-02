import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { SeoService } from 'src/app/services/seo/seo.service';
import { PostService } from 'src/app/services/post-services/post-service/post.service';
import { tap, filter } from 'rxjs/internal/operators';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit, OnDestroy {

  post;
  routerSubscription;

  constructor(private activatedRoute: ActivatedRoute,
              private seoService: SeoService,
              private router: Router,
              private postService: PostService) { }

  ngOnInit(): void {
    this._getPost();
    this.routerSubscription = this.router.events.pipe(
      filter(o => o instanceof NavigationEnd),
      tap(o => this._getPost())
    ).subscribe();
  }

  private _getPost() {
    const slug = this.activatedRoute.snapshot.params['slug'];
    this.postService.getPost(slug).subscribe(
      (post) => {
        post ? this.post = post : this.router.navigate(['/404']);

      }
    );
  }

  ngOnDestroy() {
    this.routerSubscription.unsubscribe();
  }
}
