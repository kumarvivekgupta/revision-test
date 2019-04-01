import {NgModule, Optional, SkipSelf} from '@angular/core';
import {AuthGuard} from './guards/auth.guard';
import {TestStartGuard} from './guards/test-start.guard';
import {TestEndGuard} from './guards/test-end.guard';
import {AdminAnonymousGuard} from './guards/admin-anonymous.guard';
import {YotestApiService} from './services/yotest-api.service';
import {YotestAdminApiService} from './services/yotest-admin-api.service';
import {NewUserGuard} from './guards/new-user.guard';
import {AlertService} from './services/alert';

@NgModule({
  declarations: [],
  imports: [],
  providers: [
    AuthGuard,
    TestStartGuard,
    TestEndGuard,
    AdminAnonymousGuard,
    YotestApiService,
    YotestAdminApiService,
    NewUserGuard,
    AlertService
  ]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() core: CoreModule) {
    if (core) {
      throw new Error('Core module has already been imported');
    }
  }
}
