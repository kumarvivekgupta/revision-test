import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { SignInCallbackComponent } from './misc/sign-in-callback.component';

const appRoutes: Routes = [
  { path: 'sign-in-callack', component: SignInCallbackComponent },
  {
    path: '',
    loadChildren: './dashboard/dashboard.module#DashboardModule',
  },
  {
    path: '**',
    loadChildren: './core/core.module#CoreModule'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
