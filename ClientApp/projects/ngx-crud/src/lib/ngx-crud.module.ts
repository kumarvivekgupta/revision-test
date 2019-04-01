import { NgModule, ModuleWithProviders } from '@angular/core';
import { CrudService } from './service/crud.service';
import { NgxCrudConfig } from './ngx-crud-config';

@NgModule()
export class NgxCrudModule {
  static forRoot(config: NgxCrudConfig): ModuleWithProviders {
    return {
      ngModule: NgxCrudModule,
      providers: [{
        provide: CrudService,
        useValue: config
      }]
    };
  }

}
