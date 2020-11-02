import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-page-sponsored',
  templateUrl: './page-sponsored.component.html',
  styleUrls: ['./page-sponsored.component.scss']
})
export class PageSponsoredComponent implements OnInit {

  @Input() post;

  constructor() { }

  ngOnInit(): void {
  }

}
