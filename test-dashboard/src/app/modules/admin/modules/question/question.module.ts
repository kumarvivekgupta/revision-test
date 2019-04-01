import {NgModule} from '@angular/core';
import {SharedModule} from '../../../shared/shared.module';
import {QuestionManageComponent} from './components/question-manage/question-manage.component';
import {OptionManageComponent} from './components/option-manage/option-manage.component';
import {QuestionContainerComponent} from './components/question-container/question-container.component';

const components = [
  QuestionManageComponent,
  OptionManageComponent,
  QuestionContainerComponent
];

@NgModule({
  declarations: [
    ...components
  ],
  imports: [SharedModule],
  exports: [...components],
  entryComponents: [QuestionContainerComponent]
})
export class QuestionModule {
}
