import { Injectable } from '@angular/core';
import { Subject } from 'rxjs-compat';
import { ParameterSource } from '../model/parameter-source.model';
import { Parameter } from '../model/parameter.model';

@Injectable({
  providedIn: 'root'
})
export abstract class SolarSourceService implements ParameterSource {

  abstract getParameters(): Parameter[];
  
  // Currently generated Power in Watts
  public currentPower: Subject<number>;

  // Total energy generated today
  public dayEnergy: Subject<number>;

  constructor() { }
}
