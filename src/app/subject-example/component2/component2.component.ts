import {Component, Input} from '@angular/core';
import {Country} from '../../countries';
import {CountryService} from '../country.service';

@Component({
  selector: 'app-component2',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.css']
})
export class Component2Component  {

  @Input() index;

  currentCountry: Country;

  constructor(private countryService: CountryService) {
    countryService.getCurrentCountry().subscribe(c => {
      console.log(`CARD ${this.index} received ${c.name}`);
      this.currentCountry = c;
    });
  }

}
