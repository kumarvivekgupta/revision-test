import {Question} from './question.model';

export interface QuestionSet {
  id: number;
  title: string;
  description: string;
  questions: Question[];
}
