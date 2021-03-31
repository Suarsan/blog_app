import { Component, OnInit, PLATFORM_ID, Inject } from '@angular/core';
import { PostService } from 'src/app/services/post-services/post-service/post.service';
import { tap } from 'rxjs/operators';
import { makeStateKey, TransferState } from '@angular/platform-browser';
import { isPlatformServer } from '@angular/common';

const BRANDS = makeStateKey('brands');

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  brands;
  showMenu;

  constructor(@Inject(PLATFORM_ID) private platformId: object,
              private postService: PostService,
              private state: TransferState) { }

  ngOnInit() {
    this._getBrands();
  }

  private _getBrands() {
    this.brands = this.state.get(BRANDS, null);
    if (!this.brands) {
      this.postService.getBrands().pipe(
        tap(brands => isPlatformServer(this.platformId) ? this.state.set(BRANDS, brands) : null),
        tap(brands => this.brands = brands)
      ).subscribe();
    }
  }

  public closeMenu() {
    this.showMenu = false;
  }
  public openMenu() {
    this.showMenu = true;
  }

}
