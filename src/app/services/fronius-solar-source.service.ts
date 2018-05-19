import { Injectable } from '@angular/core';
import { Observable, timer, throwError } from 'rxjs';
import { map } from 'rxjs/operators';
import { SolarSourceService } from './solar-source.service';

@Injectable({
  providedIn: 'root'
})
export class FroniusSolarSourceService implements SolarSourceService  {

  constructor() { }

  currentPower(): Observable<number> {

    // TODO
    return new Observable<number>();
  }
}