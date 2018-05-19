import { Injectable } from '@angular/core';
import { SolarSourceService } from './solar-source.service';
import { Observable } from 'rxjs-compat';

@Injectable({
  providedIn: 'root'
})
export class FroniusSolarSourceService implements SolarSourceService  {

  constructor() { }

  currentPower(): number {

    // TODO
    return Math.random();
  }
}