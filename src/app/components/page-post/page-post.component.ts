import { Component, OnInit, Input } from '@angular/core';
import { PostService } from '../../services/post-services/post-service/post.service';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { TagsService } from 'src/app/services/tags-services/tags-service/tags.service';
import { SeoService } from '../../services/seo/seo.service';
import { tap } from 'rxjs/internal/operators/tap';
import { filter } from 'rxjs/internal/operators/filter';

@Component({
  selector: 'app-page-post',
  templateUrl: './page-post.component.html',
  styleUrls: ['./page-post.component.scss']
})
export class PagePostComponent implements OnInit {

  @Input() post;
  posts;
  tags;

  constructor(private tagsService: TagsService,
              private seoService: SeoService,
              private domSanitizer: DomSanitizer) {
              }

  ngOnInit() {
    this._getTags();
    this._setMetaInfo(this.post);
  }

  public getImageMain() {
    if (this.post) {
      return this.domSanitizer.bypassSecurityTrustStyle(
        'linear-gradient(to bottom, rgba(50, 50, 50, 0) 0%, rgba(16, 15, 15, .91) 89%, rgba(16, 15, 15, .93) 93%), url(' 
        + this.post?.image + ')');
    }
  }

  private _getTags() {
    this.tagsService.getTags().subscribe(
      (tags) => {
        this.tags = tags;
      }
    );
  }

  private _setMetaInfo(post) {
    this.seoService.setTitle(post.title);
    this.seoService.setMetaTags({
      title: post.title,
      description: post.paragraphs[0].content,
      slug: post.slug,
      image: post.image
    });
  }
}
