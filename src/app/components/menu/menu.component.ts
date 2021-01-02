import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post-services/post-service/post.service';
import { tap, take } from 'rxjs/operators';
import { TransferState, makeStateKey } from '@angular/platform-browser';

const BRANDS = makeStateKey('brands');

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  showMenu = false;
  brands;

  constructor(private postService: PostService,
              private state: TransferState) { }

  ngOnInit() {
    this._getBrands();
  }

  public closeMenu() {
    this.showMenu = false;
  }
  public openMenu() {
    this.showMenu = true;
  }
  public _getBrands() {
    this.brands = this.state.get(BRANDS, null);
    if (!this.brands) {
      this.postService.getBrands().pipe(
        take(1),
        tap(o => this.brands = o),
        tap(o => this.state.set(BRANDS, this.brands))
        ).subscribe();
    }
  }
}
