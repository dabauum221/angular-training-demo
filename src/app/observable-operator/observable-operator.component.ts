import { Component } from '@angular/core';
import {FormControl} from '@angular/forms';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-observable-operator',
  templateUrl: './observable-operator.component.html',
  styleUrls: ['./observable-operator.component.css']
})
export class ObservableOperatorComponent {

  continentSelect = new FormControl();
  currentSelection: string;

  constructor() {
    this.continentSelect.valueChanges.pipe(
      map(continent => continent.toUpperCase().slice(0, 3))
    ).subscribe((newValue) => {
      this.currentSelection = newValue;
    });
  }

}
