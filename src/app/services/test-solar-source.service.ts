import { Injectable } from '@angular/core';
import { SolarSourceService } from './solar-source.service';

import { Observable, Subscription } from 'rxjs-compat';

@Injectable({
  providedIn: 'root'
})
export class TestSolarSourceService implements SolarSourceService  {

  constructor() { }

  currentPower(): number {

    return Math.random()*100;
  }
}