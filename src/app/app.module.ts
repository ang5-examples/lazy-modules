import { BrowserModule } from '@angular/platform-browser';
import {NgModule, SystemJsNgModuleLoader} from '@angular/core';


import { AppComponent } from './app.component';
import {provideRoutes} from '@angular/router';

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [
    SystemJsNgModuleLoader,
    provideRoutes([
      { loadChildren: 'app/lazy/lazy.module#LazyModule' },
      { loadChildren: 'app/lazy2/lazy2.module#Lazy2Module' }
    ])
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
