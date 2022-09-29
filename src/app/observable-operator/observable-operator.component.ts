import { Component, OnDestroy } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-observable-operator',
  templateUrl: './observable-operator.component.html',
  styleUrls: ['./observable-operator.component.css'],
})
export class ObservableOperatorComponent implements OnDestroy {
  continentSelect = new FormControl();
  currentSelection: string;
  subscription: Subscription;

  constructor() {
    this.subscription = this.continentSelect.valueChanges
      .pipe(map((continent) => continent.toUpperCase().slice(0, 3)))
      .subscribe((newValue) => {
        this.currentSelection = newValue;
      });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
