import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export abstract class SolarSourceService {

  constructor() { }

  // Returns an observable that emits the
  // current power in Watts
  abstract currentPower(): Observable<number>;
}
