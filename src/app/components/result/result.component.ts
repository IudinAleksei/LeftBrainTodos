import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';

import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ResultComponent {
  todos$ = this.dataService
    .getAll()
    .pipe(map((todos) => todos.filter((todo) => todo.completed)));

  constructor(private dataService: DataService, private route: ActivatedRoute) {
    route.queryParams.subscribe((params) => console.log(params));
  }
}
