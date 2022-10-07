import { ITodo } from './../../models/todo.model';
import { IFilterValue } from './../../models/filter.model';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { combineLatest, map, switchMap } from 'rxjs';

import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ResultComponent {
  todos$ = combineLatest([
    this.dataService.getAll(),
    this.route.queryParams,
  ]).pipe(
    switchMap(([todos, filter]) =>
      this.dataService.getFilteredTodos(todos, filter as IFilterValue),
    ),
  );

  constructor(
    private dataService: DataService,
    private route: ActivatedRoute,
  ) {}
}
