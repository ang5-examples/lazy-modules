import {
  Component,
  Injector, NgModuleFactory, OnInit,
  SystemJsNgModuleLoader,
  ViewChild,
  ViewContainerRef
} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Angular cli Example SystemJsNgModuleLoader.load';

  @ViewChild('container', {read: ViewContainerRef}) container: ViewContainerRef;

  constructor(private loader: SystemJsNgModuleLoader, private injector: Injector) {
  }

  ngOnInit() {
    this.onLazy1Click();
  }

  onLazy1Click() {
    this.container.clear();
    this.loader.load('app/lazy/lazy.module#LazyModule').then((moduleFactory: NgModuleFactory<any>) => {
      const entryComponent = (<any>moduleFactory.moduleType).entry;
      const moduleRef = moduleFactory.create(this.injector);

      const compFactory = moduleRef.componentFactoryResolver.resolveComponentFactory(entryComponent);
      this.container.createComponent(compFactory);
    });
  }

  onLazy2Click() {
    this.container.clear();
    this.loader.load('app/lazy2/lazy2.module#Lazy2Module').then((moduleFactory: NgModuleFactory<any>) => {
      const entryComponent = (<any>moduleFactory.moduleType).entry;
      const moduleRef = moduleFactory.create(this.injector);

      const compFactory = moduleRef.componentFactoryResolver.resolveComponentFactory(entryComponent);
      this.container.createComponent(compFactory);
    });
  }
}
