import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Question} from '../../../core/models/question.model';
import {YotestApiService} from '../../../core/services/yotest-api.service';
import {QuestionFiltersEnum} from '../../../core/enums/question-filters.enum';
import {ANSWERS} from '../../../../utils/constants';
import {AlertService} from '../../../core/services/alert';

@Component({
  selector   : 'yot-question',
  templateUrl: './question.component.html',
  styleUrls  : ['./question.component.scss']
})
export class QuestionComponent implements OnInit {
  @Input() question: Question;
           QuestionFiltersEnum = QuestionFiltersEnum;
           isSpinnerLoading    = false;
  @Output() questionModified   = new EventEmitter<{ id: number, type: QuestionFiltersEnum }>();

  constructor(private yotService: YotestApiService, private alert: AlertService) {
  }

  ngOnInit() {
  }

  answered(selectedOption) {
    this.isSpinnerLoading = true;
    this.yotService.answer(this.question.id, selectedOption).subscribe(res => {
      this.saveAnswerToLS(this.question.id, selectedOption);
      this.isSpinnerLoading = false;
      this.questionModified.emit({id: this.question.id, type: QuestionFiltersEnum.ANSWERED});
      this.question = {...this.question, selected_option: res.option_id, answerId: res.data.id};
    }, (error) => {
      this.isSpinnerLoading = false;
       this.alert.error(error);
    });
  }

  saveAnswerToLS(questionId: number, optionId: number) {
    let answers = JSON.parse(localStorage.getItem(ANSWERS));
    if (answers && Object.keys(answers).length > 0) {
      answers = {...answers, [questionId]: optionId};
    } else {
      answers = {[questionId]: optionId};
    }
    localStorage.setItem(ANSWERS, JSON.stringify(answers));
  }
}
