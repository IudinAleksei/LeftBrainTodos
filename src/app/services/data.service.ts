import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from './../../environments/environment.prod';
import { ITodo } from '../models/todo.model';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<ITodo[]> {
    return this.http.get<ITodo[]>(environment.apiUrl);
  }
}
