import { Injectable } from '@angular/core';
import { Observable, timer } from 'rxjs';
import { map } from 'rxjs/operators';
import { SolarSourceService } from './solar-source.service';

@Injectable({
  providedIn: 'root'
})
export class TestSolarSourceService implements SolarSourceService  {

  constructor() { }

  currentPower(): Observable<number> {

    return timer(0, 2000);//.map((n) => return 2000.0);
    
    //map((n) => 2000.0);
  }
}