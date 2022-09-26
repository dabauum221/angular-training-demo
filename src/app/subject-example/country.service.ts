import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable, ReplaySubject, Subject} from 'rxjs';
import {Country, FRANCE} from '../countries';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  country$ = new Subject<Country>();
  //country$ = new BehaviorSubject<Country>(FRANCE);
  //country$ = new ReplaySubject<Country>(2);

  setCurrentCountry(country: Country): void {
    this.country$.next(country);
  }

  getCurrentCountry(): Observable<Country> {
    return this.country$.asObservable();
  }
}
