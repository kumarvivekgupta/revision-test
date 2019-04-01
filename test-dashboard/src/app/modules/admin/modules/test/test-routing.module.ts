import {NgModule} from '@angular/core';
import {Route, RouterModule} from '@angular/router';
import {TestManageComponent} from './components/test-manage/test-manage.component';
import {AdminTestContainerComponent} from './components/test-container/test-container.component';
import {TestListComponent} from './components/test-list/test-list.component';

export const routes: Route[] = [
  {
    path: '',
    component: AdminTestContainerComponent,
    children: [
      {path: '', component: TestListComponent},
      {path: 'tests/:testId', component: TestManageComponent},
      {path: 'tests/create', component: TestManageComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TestRoutingModule {
}
