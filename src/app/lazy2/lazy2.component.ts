import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-lazy2-comp',
  template: `
      <h2>Lazy 2</h2>
      <a routerLink="/">Page 1</a>
      <a routerLink="/page2">Page 2</a>
      <a routerLink="/page3">Page 3</a>
      <div>Outlet</div>
      <router-outlet></router-outlet>
    `
})
export class Lazy2Component implements OnInit {
  constructor(private router: Router) {}
  ngOnInit() {
    this.router.navigate(['/']);
  }
}
