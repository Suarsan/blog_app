import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post-services/post-service/post.service';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-post-page',
  templateUrl: './post-page.component.html',
  styleUrls: ['./post-page.component.scss']
})
export class PostPageComponent implements OnInit {

  posts;
  post;
  index = ['Slim fit', '100% cotton', 'High quality', 'Cheapest tshirts', 'Full white', 'Amazon', 'Casual tshirts' ];


  constructor(private postService: PostService,
              private activatedRoute: ActivatedRoute,
              private domSanitizer: DomSanitizer) { }

  ngOnInit() {
    const slug = this.activatedRoute.snapshot.params['slug'];
    this.getPost(slug);
    this.getMainPosts();
  }

  public getPost(slug) {
    this.postService.getPost(slug).subscribe(
      (post) => {
        this.post = post;
      }
    );
  }

  public getMainPosts() {
    this.postService.getMainPosts().subscribe(
      (posts) => {
        this.posts = posts;
      }
    );
  }

  public getImageMain() {
    if (this.post) {
      return this.domSanitizer.bypassSecurityTrustStyle(
        'linear-gradient(to bottom, rgba(50, 50, 50, 0) 0%, rgba(16, 15, 15, .91) 89%, rgba(16, 15, 15, .93) 93%), url(' 
        + this.post?.image + ')');
    }
  }

}
