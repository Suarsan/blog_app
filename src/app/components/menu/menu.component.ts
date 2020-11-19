import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post-services/post-service/post.service';
import { tap } from 'rxjs/internal/operators/tap';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  brands;

  constructor(private postService: PostService) { }

  ngOnInit() {
    this._getBrands();
  }

  public _getBrands() {
    this.postService.getBrands().pipe(
      tap(o => this.brands = o.sort((a, b) =>  a.title.toLowerCase() === b.title.toLowerCase() ? 0 : a.title.toLowerCase() > b.title.toLowerCase() ? 1 : -1 ))
    ).subscribe();
  }
}
