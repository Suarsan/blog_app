import { Component, OnInit, Input } from '@angular/core';
import { PostService } from '../../services/post-services/post-service/post.service';

@Component({
  selector: 'app-mini-list',
  templateUrl: './mini-list.component.html',
  styleUrls: ['./mini-list.component.scss']
})
export class MiniListComponent implements OnInit {

  _posts;

  @Input() set posts(posts) { if (posts) { this._posts = posts.slice(0, 3); } }

  constructor() { }

  ngOnInit() { }
}
