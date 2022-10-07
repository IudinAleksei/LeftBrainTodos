import { Params } from '@angular/router';

export interface IFilterValue {
  title: string;
  completed: 'all' | 'completed' | 'incompleted';
}
