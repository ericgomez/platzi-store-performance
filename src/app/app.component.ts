import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

import { filter } from 'rxjs/operators'

declare var gtag: any;

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(
    private router: Router
  ) {
    const navEndEvents$ = this.router.events
      .pipe(
        filter(event => event instanceof NavigationEnd)
      );

      navEndEvents$.subscribe((event: any) => {
        gtag('config', 'G-KV28M9Y0Q8', {
          page_title: event.urlAfterRedirects,
          page_path: event.urlAfterRedirects
        });
      });
  }
}
