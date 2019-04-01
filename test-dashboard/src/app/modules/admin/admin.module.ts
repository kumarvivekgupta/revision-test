import {NgModule} from '@angular/core';
import {AdminRoutingModule} from './admin-routing.module';
import {LoginComponent} from './components/login/login.component';
import {AdminComponent} from './containers/admin.component';
import {SharedModule} from '../shared/shared.module';
import {TestModule} from './modules/test/test.module';

@NgModule({
  imports: [
    SharedModule,
    AdminRoutingModule,
    TestModule
  ],
  declarations: [
    LoginComponent,
    AdminComponent
  ],
  providers: [

  ],
  bootstrap: [AdminComponent]
})
export class AdminModule {
}
