import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LazyComponent} from './lazy.component';
import {RouterModule, Routes} from '@angular/router';
import {Lazy1Page1Component} from './lazy1-page1.component';
import {Lazy1Page2Component} from './lazy1-page2.component';

const routes: Routes = [
  {
    path: '',
    component: Lazy1Page1Component,
  },
  {
    path: 'page2',
    component: Lazy1Page2Component,
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [
    LazyComponent,
    Lazy1Page1Component,
    Lazy1Page2Component
  ],
  entryComponents: [
    LazyComponent
  ]
})
export class LazyModule {
  static entry = LazyComponent;
}
