import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-lazy-comp',
  template: `
        <h2>Lazy 1</h2>
        <a routerLink="/">Page 1</a>
        <a routerLink="/page2">Page 2</a>
        <div>Outlet</div>
        <router-outlet></router-outlet>
    `
})
export class LazyComponent implements OnInit {
  constructor(private router: Router, private route: ActivatedRoute) {}
  ngOnInit() {
    this.router.navigate([window.location.pathname]);
    console.log('URL:' + window.location.href);
    console.log('Path:' + window.location.pathname);
    console.log('Host:' + window.location.host);
    console.log('Hostname:' + window.location.hostname);
    console.log('Origin:' + window.location.origin);
    console.log('Port:' + window.location.port);
    console.log('Search String:' + window.location.search);
  }
}
