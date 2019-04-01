import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {SignupComponent} from './components/signup/signup.component';
import {TestInstructionsComponent} from './containers/test-instructions/test-instructions.component';
import {ExamComponent} from './containers/exam/exam.component';
import {ThankYouComponent} from './containers/thank-you/thank-you.component';
import {TestEndGuard} from '../core/guards/test-end.guard';
import {TestStartGuard} from '../core/guards/test-start.guard';
import {AuthGuard} from '../core/guards/auth.guard';
import {NewUserGuard} from '../core/guards/new-user.guard';

export const routes: Routes = [
  {
    path: '', component: SignupComponent, canActivate: [NewUserGuard]
  },
  {
    path: 'instructions', component: TestInstructionsComponent, canActivate: [AuthGuard]
  },
  {
    path: 'questions', component: ExamComponent, canActivate: [TestStartGuard]
  },
  {
    path: 'thank-you', component: ThankYouComponent, canActivate: [TestEndGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule {
}
