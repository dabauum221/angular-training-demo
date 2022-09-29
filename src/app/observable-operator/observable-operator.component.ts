import { Component, OnDestroy } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, Subscription } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-observable-operator',
  templateUrl: './observable-operator.component.html',
  styleUrls: ['./observable-operator.component.css'],
})
export class ObservableOperatorComponent implements OnDestroy {
  continentSelect = new FormControl();
  currentSelection: string;
  subscription: Subscription;
  content$: Observable<string>;

  constructor() {
    this.content$ = this.continentSelect.valueChanges.pipe(
      tap((data) => (this.currentSelection = data)),
      map((continent) => continent.toUpperCase().slice(0, 3)),
      tap((data) => console.log(data))
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
