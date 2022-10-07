import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { take } from 'rxjs';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FilterComponent implements OnInit {
  form = new FormGroup({
    title: new FormControl(''),
    completed: new FormControl('all'),
  });

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.initFormValues();
  }

  initFormValues(): void {
    this.route.queryParams
      .pipe(take(2))
      .subscribe((params) => this.form.patchValue(params));
  }

  setQueries(): void {
    this.router.navigate([], {
      queryParams: this.form.value,
    });
  }
}
