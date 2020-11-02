import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-page-glosary',
  templateUrl: './page-glosary.component.html',
  styleUrls: ['./page-glosary.component.scss']
})
export class PageGlosaryComponent implements OnInit {

  @Input() post;

  constructor() { }

  ngOnInit(): void {
  }

}
