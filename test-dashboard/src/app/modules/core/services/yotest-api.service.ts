import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {delay, map} from 'rxjs/operators';
import {Question} from '../models/question.model';
import {HttpService} from './http.service';
import {API_KEY, AUTH_TOKEN, HAS_READ_INSTRUCTIONS, QUESTIONS} from '../../../utils/constants';
import {Test} from '../models/test.model';

@Injectable()
export class YotestApiService extends HttpService {
  test: Test;
  questions: Question[] = [];

  constructor(protected http: HttpClient) {
    super(http);
  }

  checkTestExists(testId: string): Observable<any> {
    return super.get(`test/code/${testId}`);
  }

  signUp(data: { first_name: string, last_name: string, email: string, test_id: string }): Observable<any> {
    return super.post<any>(`candidates`, {...data})
      .pipe(map(response => {
        this.test = response.data.test;
        localStorage.setItem(AUTH_TOKEN, response.token);
      }));
  }

  getQuestions(): Observable<Question[]> {
    return super.get<CandidateApiResponse>(`me/questions`).pipe(map(response => {
      localStorage.removeItem(AUTH_TOKEN);
      localStorage.setItem(API_KEY, response.answer_token);
      localStorage.setItem(HAS_READ_INSTRUCTIONS, 'true');
      this.questions = response.questions;
      localStorage.setItem(QUESTIONS, JSON.stringify(response.questions));
      return response.questions;
    }));
  }

  answer(questionId: number, optionId: number): Observable<any> {
    const data = {question_id: questionId, option_id: optionId};
    return super.post('answers', data);
  }

  deleteQuestionResponse(data) {
    return super.post(`answers`, data);
  }

  // submitTest(data: { testId: number, answers: { [questionId: number]: number } }): Observable<any> {
  //   return of('dummy').pipe(delay(1000));
  // }
  submitTest() {
    return super.delete('me/submit');
  }
}

interface CandidateApiResponse {
  answer_token: string;
  questions: Question[];
}
