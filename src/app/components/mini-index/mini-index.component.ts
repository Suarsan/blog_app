import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-mini-index',
  templateUrl: './mini-index.component.html',
  styleUrls: ['./mini-index.component.scss']
})
export class MiniIndexComponent implements OnInit {

  @Input() index;

  constructor() { }

  ngOnInit() {
  }

}
