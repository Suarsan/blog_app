import { Component, OnInit, Input } from '@angular/core';

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
