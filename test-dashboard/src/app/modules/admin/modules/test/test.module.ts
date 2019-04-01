import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {TestComponent} from './components/test/test.component';
import {TestListComponent} from './components/test-list/test-list.component';
import {TestRoutingModule} from './test-routing.module';
import {TestManageComponent} from './components/test-manage/test-manage.component';
import {TestDetailsComponent} from './components/test-details/test-details.component';
import {SharedModule} from '../../../shared/shared.module';
import {QuestionModule} from '../question/question.module';
import {AdminTestContainerComponent} from './components/test-container/test-container.component';
import {TestManageContainerComponent} from './components/test-manage-container/test-manage-container.component';

const components = [
  TestComponent,
  TestListComponent,
  TestManageComponent,
  TestDetailsComponent,
  AdminTestContainerComponent,
  TestManageContainerComponent
];

@NgModule({
  declarations: [
    ...components
  ],
  imports: [SharedModule, TestRoutingModule, QuestionModule],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  entryComponents: [
    TestManageContainerComponent
  ]
})
export class TestModule {
}
