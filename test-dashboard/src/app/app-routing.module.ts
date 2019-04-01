import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './home/home.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'admin',
    loadChildren: './modules/admin/admin.module#AdminModule'
  },
  {
    path: 'test/:testCode',
    loadChildren: './modules/user/user.module#UserModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
