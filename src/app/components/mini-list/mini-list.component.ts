import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-mini-list',
  templateUrl: './mini-list.component.html',
  styleUrls: ['./mini-list.component.scss']
})
export class MiniListComponent implements OnInit {

  @Input() posts;

  constructor() { }

  ngOnInit() { }
}
