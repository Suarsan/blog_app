import { Component, OnInit, Input } from '@angular/core';
import { PostService } from '../../services/post-services/post-service/post.service';

@Component({
  selector: 'app-featured-reviews',
  templateUrl: './featured-reviews.component.html',
  styleUrls: ['./featured-reviews.component.scss']
})
export class FeaturedReviewsComponent implements OnInit {

  @Input() featuredReviews;

  constructor() { }

  ngOnInit() { }

}
