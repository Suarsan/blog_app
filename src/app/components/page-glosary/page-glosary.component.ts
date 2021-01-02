import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-page-glosary',
  templateUrl: './page-glosary.component.html',
  styleUrls: ['./page-glosary.component.scss']
})
export class PageGlosaryComponent {

  @Input() post;

  constructor() { }


}
