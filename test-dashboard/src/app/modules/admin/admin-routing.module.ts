import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {AdminAnonymousGuard} from '../core/guards/admin-anonymous.guard';
import {LoginComponent} from './components/login/login.component';
import {AdminComponent} from './containers/admin.component';
import {TestModule} from './modules/test/test.module';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login'
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [AdminAnonymousGuard]
  },
  {
    path: 'dashboard',
    component: AdminComponent,
    children: [
      {
        path: '',
        loadChildren: './modules/test/test.module#TestModule'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {
}
