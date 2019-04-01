import {Option} from './option.model';

export interface Question {
  id: number;
  question: string;
  diagram: string;
  created_at: string;
  updated_at: string;
  options: any[];
  selected_option?: number;
  answerId?: number;
  correct_option?: number;
}
