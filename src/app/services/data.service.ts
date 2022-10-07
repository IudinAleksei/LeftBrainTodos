import { IFilterValue } from './../models/filter.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { environment } from './../../environments/environment.prod';
import { ITodo } from '../models/todo.model';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}

  defaultFilter: IFilterValue = {
    title: '',
    completed: 'all',
  };

  getAll(): Observable<ITodo[]> {
    return this.http.get<ITodo[]>(environment.apiUrl);
  }

  getFilteredTodos(
    todos: ITodo[],
    filter: IFilterValue = this.defaultFilter,
  ): Observable<ITodo[]> {
    return of(todos.filter((todo) => this.matcher(todo, filter)));
  }

  matcher(
    todo: ITodo,
    { title = '', completed = 'all' }: IFilterValue,
  ): boolean {
    const matchedByTitle = todo.title.includes(title);
    let matchedByCompleted = false;
    if (completed === 'all') {
      matchedByCompleted = true;
    }
    if (completed === 'completed') {
      matchedByCompleted = todo.completed === true;
    }
    if (completed === 'incompleted') {
      matchedByCompleted = todo.completed === false;
    }
    return matchedByCompleted && matchedByTitle;
  }
}
