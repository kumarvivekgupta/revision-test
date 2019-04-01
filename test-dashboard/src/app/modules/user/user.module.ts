import {NgModule} from '@angular/core';
import {SignupComponent} from './components/signup/signup.component';
import {HeaderComponent} from './containers/header/header.component';
import {ExamComponent} from './containers/exam/exam.component';
import {DashboardComponent} from './containers/dashboard/dashboard.component';
import {QuestionListComponent} from './containers/question-list/question-list.component';
import {CounterComponent} from './containers/counter/counter.component';
import {ThankYouComponent} from './containers/thank-you/thank-you.component';
import {TestInstructionsComponent} from './containers/test-instructions/test-instructions.component';
import {UserRoutingModule} from './user-routing.module';
import {SharedModule} from '../shared/shared.module';
import {UserComponent} from './containers/user.component';
import {QuestionComponent} from './containers/question/question.component';
import {OptionComponent} from './containers/option/option.component';

@NgModule({
  imports: [
    SharedModule,
    UserRoutingModule,
  ],
  declarations: [
    // TODO organise the container and component properly
    UserComponent,
    SignupComponent,
    HeaderComponent,
    ExamComponent,
    DashboardComponent,
    QuestionListComponent,
    QuestionComponent,
    OptionComponent,
    CounterComponent,
    ThankYouComponent,
    TestInstructionsComponent
  ],
  providers: [
  ],
  bootstrap: [UserComponent]
})
export class UserModule {
}
