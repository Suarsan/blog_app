import { Component, OnDestroy } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs/internal/Subscription';

// tslint:disable-next-line:ban-types
declare let gtag: Function;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy {

  routerSubscription: Subscription;

  constructor(private router: Router) {
    this.routerSubscription = this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
          gtag('config', 'G-MBJW38R751', { page_path: event.urlAfterRedirects });
      }
    });
  }

  ngOnDestroy() {
    this.routerSubscription.unsubscribe();
  }
}
