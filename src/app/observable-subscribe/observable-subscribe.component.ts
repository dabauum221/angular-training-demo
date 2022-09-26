import { Component } from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-observable-subscribe',
  templateUrl: './observable-subscribe.component.html',
  styleUrls: ['./observable-subscribe.component.css']
})
export class ObservableSubscribeComponent {

  continentSelect = new FormControl();
  currentSelection: string;

  constructor() {
    this.continentSelect.valueChanges.subscribe((newValue) => {
        this.currentSelection = newValue;
    });
  }
}

