import { Injectable } from '@angular/core';
import { Subject } from 'rxjs-compat';

@Injectable({
  providedIn: 'root'
})
export abstract class SolarSourceService implements ParameterSource {

  // Currently generated Power in Watts
  public currentPower: Subject<number>;

  // Total energy generated today
  public dayEnergy: Subject<number>;

  constructor() { }
}
