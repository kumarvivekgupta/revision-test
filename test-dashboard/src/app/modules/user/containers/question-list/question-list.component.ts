import {Component, Input, OnInit} from '@angular/core';
import {Question} from '../../../core/models/question.model';
import {YotestApiService} from '../../../core/services/yotest-api.service';
import * as _ from 'lodash';
import {QuestionFiltersEnum} from '../../../core/enums/question-filters.enum';
import {ANSWERS, QUESTIONS} from '../../../../utils/constants';

@Component({
  selector   : 'yot-question-list',
  templateUrl: './question-list.component.html',
  styleUrls  : ['./question-list.component.scss']
})
export class QuestionListComponent implements OnInit {
  @Input()
  set filter(value: QuestionFiltersEnum) {
    this._filter = value;
    this.filterQuestions(value);
  }

  filteredQuestions: Question[] = [];
  questions: Question[]         = [];
  savedQuestionIds: number[]    = [];
  answeredQuestionIds: number[] = [];
  QuestionFiltersEnum           = QuestionFiltersEnum;
  _filter                       = QuestionFiltersEnum.ALL;

  constructor(private yotService: YotestApiService) {
  }

  ngOnInit() {
    const questions = JSON.parse(localStorage.getItem(QUESTIONS));
    if (questions && questions.length > 0) {
      this.questions = this.filteredQuestions = questions;
      console.log(questions + 'testing');
    } else {
      this.questions = this.filteredQuestions = this.yotService.questions;
    }
    this.setAnswersFromLS();
  }

  filterQuestions(filter: QuestionFiltersEnum) {
    switch (filter) {
      case QuestionFiltersEnum.UNANSWERED:
        this.filteredQuestions = this.questions.filter(({id}) => !this.answeredQuestionIds.includes(id));
        break;
      case QuestionFiltersEnum.ANSWERED:
        this.filteredQuestions = this.questions.filter(({id}) => this.answeredQuestionIds.includes(id));
        break;
      case QuestionFiltersEnum.SAVED:
        this.filteredQuestions = this.questions.filter(({id}) => this.savedQuestionIds.includes(id));
        break;
      case QuestionFiltersEnum.ALL:
      default:
        this.filteredQuestions = this.questions;
    }
  }

  onQuestionModified(event: { id: number, type: QuestionFiltersEnum }) {
    if (event.type === QuestionFiltersEnum.SAVED) {
      if (_.includes(this.savedQuestionIds, event.id)) {
        _.remove(this.savedQuestionIds, id => id === event.id);
      } else {
        this.savedQuestionIds = _.uniq([...this.savedQuestionIds, event.id]);
      }
    } else if (event.type === QuestionFiltersEnum.ANSWERED) {
      this.answeredQuestionIds = _.uniq([...this.answeredQuestionIds, event.id]);
      this.filterQuestions(this._filter);
    }
  }

  isSaved(questionId) {
    return _.includes(this.savedQuestionIds, questionId);
  }

  indexOfQuestion(question: Question) {
    return this.questions.map(q => q.id).indexOf(question.id) + 1;
  }

  deleteResponse(question) {
    console.log(question);
    const data = {
      question_id: question.id,
      option_id  : question.selected_option
    };
    this.yotService.deleteQuestionResponse(data).subscribe(() => {
      const list = JSON.parse(localStorage.getItem(ANSWERS));
      delete list[question.id];
      console.log(list);
      localStorage.setItem('answers', JSON.stringify(list));
      question.selected_option = null;
    });
  }

  setAnswersFromLS() {
    const answers = JSON.parse(localStorage.getItem(ANSWERS));
    if (answers && Object.keys(answers).length > 0) {
      Object.keys(answers).forEach((key, index) => {
        this.questions = this.questions.map(q => {
          if (q.id === parseInt(key)) {
            return {
              ...q,
              selected_option: answers[key]
            };
          }
          return q;
        });
      });
    }
    this.filterQuestions(this._filter);
  }
}
