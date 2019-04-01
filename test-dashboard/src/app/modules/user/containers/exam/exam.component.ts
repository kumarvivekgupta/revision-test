import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {QuestionFiltersEnum} from '../../../core/enums/question-filters.enum';
import {YotestApiService} from '../../../core/services/yotest-api.service';
import {ANSWERS, QUESTIONS, TIMER} from '../../../../utils/constants';
import {Router} from '@angular/router';
import {AlertService} from '../../../core/services/alert';

@Component({
  selector   : 'yot-exam',
  templateUrl: './exam.component.html',
  styleUrls  : ['./exam.component.scss']
})
export class ExamComponent implements OnInit {
  filters        = [
    {title: 'All', value: QuestionFiltersEnum.ALL},
    {title: 'Unanswered', value: QuestionFiltersEnum.UNANSWERED},
    {title: 'Answered', value: QuestionFiltersEnum.ANSWERED},
    {title: 'Saved', value: QuestionFiltersEnum.SAVED}
  ];
  selectedFilter = this.filters[0].value;

  constructor(public service: YotestApiService, public route: Router, public alert: AlertService) {
  }

  ngOnInit() {
    window.addEventListener('beforeunload', function (e) {
      const confirmationMessage = 'It looks like you have been editing something. '
        + 'If you leave before saving, your changes will be lost.';

      (e || window.event).returnValue = confirmationMessage;
      return confirmationMessage;
    });
  }

  submitTest() {
    // this.service.submitTest({testId: this.service.test.id, answers: JSON.parse(localStorage.getItem(ANSWERS))}).subscribe();
    const answers = JSON.parse(localStorage.getItem(ANSWERS));
    localStorage.clear();
    this.service.submitTest().subscribe(() => {
    });
    this.route.navigate(['/']);
  }
}
