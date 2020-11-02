import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/services/post-services/post-service/post.service';
import { TagsService } from 'src/app/services/tags-services/tags-service/tags.service';
import { SeoService } from 'src/app/services/seo/seo.service';
import { tap } from 'rxjs/internal/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  lastReviews;
  brands;
  tags;

  constructor(private postService: PostService,
              private tagsService: TagsService,
              private seoService: SeoService) { }

  ngOnInit() {
    this._getLastReviews();
    this._getBrands();
    this.getTags();
    this._setMetaInfo();
  }

  public _getLastReviews() {
    this.postService.getLastReviews().pipe(
      tap(o => this.lastReviews = o)
    ).subscribe();
  }
  public _getBrands() {
    this.postService.getBrands().pipe(
      tap(o => this.brands = o)
    ).subscribe();
  }
  public getTags() {
    this.tagsService.getTags().subscribe(
      (o) => this.tags = o
    );
  }

  private _setMetaInfo() {
    this.seoService.setTitle('Tshirts and Basics · Analizamos camisetas blancas');
    this.seoService.setMetaTags({
      title: 'Tshirts and Basics · Analizamos camisetas blancas',
      description: '👕 Encuentra las mejores camisetas basicas blancas al mejor precio. Analizamos su calidad y su durabilidad. Encuentra tu camiseta basica ideal. ¡Gratis!',
      slug: ''
    });
  }
}
