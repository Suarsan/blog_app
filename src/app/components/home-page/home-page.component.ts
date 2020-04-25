import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post-services/post-service/post.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  posts;
  index = ['Slim fit', '100% cotton', 'High quality', 'Cheapest tshirts', 'Full white', 'Amazon', 'Casual tshirts' ];

  constructor(private postService: PostService) { }

  ngOnInit() {
    this.getMainPosts();
  }

  public getMainPosts() {
    this.postService.getMainPosts().subscribe(
      (posts) => {
        this.posts = posts;
      }
    );
  }
}
