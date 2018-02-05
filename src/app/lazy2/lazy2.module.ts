import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Lazy2Component} from './lazy2.component';
import {RouterModule, Routes} from '@angular/router';
import {Lazy2Page1Component} from './lazy2-page1.component';
import {Lazy2Page2Component} from './lazy2-page2.component';
import {Lazy2Page3Component} from './lazy2-page3.component';

const routes: Routes = [
  {
    path: '',
    component: Lazy2Page1Component,
  },
  {
    path: 'page2',
    component: Lazy2Page2Component,
  },
  {
    path: 'page3',
    component: Lazy2Page3Component,
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [
    Lazy2Component,
    Lazy2Page1Component,
    Lazy2Page2Component,
    Lazy2Page3Component
  ],
  entryComponents: [Lazy2Component]
})
export class Lazy2Module {
  static entry = Lazy2Component;
}
