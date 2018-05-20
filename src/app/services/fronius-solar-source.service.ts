import { Injectable } from '@angular/core';
import { SolarSourceService } from './solar-source.service';
import { Observable } from 'rxjs-compat';
import { HttpClient } from "@angular/common/http";

const url: string = "test";

@Injectable({
  providedIn: 'root'
})
export class FroniusSolarSourceService implements SolarSourceService  {

  constructor(private http: HttpClient) {

  }

  currentPower(): number {

    // TODO
    //let test: Observable<string> = this.http.get<any>(url).map((result)=> {return result.Power});
    // TODO
    return Math.random();
  }
}