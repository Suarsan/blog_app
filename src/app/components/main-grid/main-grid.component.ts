import { Component, OnInit, Input } from '@angular/core';
import { PostService } from '../../services/post-services/post-service/post.service';
import { DomSanitizer } from '@angular/platform-browser';
import { Post } from '../../models/post.model';

@Component({
  selector: 'app-main-grid',
  templateUrl: './main-grid.component.html',
  styleUrls: ['./main-grid.component.scss']
})
export class MainGridComponent implements OnInit {

  post1;
  post2;
  post3;
  post4;

  @Input('posts') set posts(posts) {
    if (posts) {
      this.post1 = posts[0];
      this.post2 = posts[1];
      this.post3 = posts[2];
      this.post4 = posts[3];
    }
  }

  constructor(private postService: PostService) { }

  ngOnInit() { }

}
