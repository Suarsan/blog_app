import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.scss']
})
export class DirectoryComponent implements OnInit {

  @Input() items;

  constructor() { }

  ngOnInit() { }

}
