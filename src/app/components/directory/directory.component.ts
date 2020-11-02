import { Component, OnInit, Input } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.scss']
})
export class DirectoryComponent implements OnInit {

  environment;
  @Input() items;

  constructor() {
    this.environment = environment;
  }

  ngOnInit(): void {
  }

}
