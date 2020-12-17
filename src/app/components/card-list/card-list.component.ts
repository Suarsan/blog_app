import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss']
})
export class CardListComponent implements OnInit {

  @Input() posts;

  constructor() { }

  ngOnInit() { }

  public getScoreColor(analysis) {
    if (analysis.score > 7.5) {
      return 'green';
    } else if ((analysis.score >= 5) && (analysis.score <= 7.5)) {
      return 'yellow';
    } else if (analysis.score < 5 ) {
      return 'red';
    }
  }
}
