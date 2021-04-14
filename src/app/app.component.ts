import { Component, Inject } from '@angular/core';
import {DOCUMENT} from '@angular/common';
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
    private router: Router,
    @Inject(DOCUMENT) private _doc: Document
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

  getWindow(): Window | null {
    return this._doc.defaultView;
  }
  
  getLocation(): Location {
    return this._doc.location;
  }

  createElement(tag: string): HTMLElement {
    return this._doc.createElement(tag);
  }
}
