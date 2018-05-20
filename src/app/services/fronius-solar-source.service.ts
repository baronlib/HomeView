import { Injectable } from '@angular/core';
import { SolarSourceService } from './solar-source.service';
import { Observable } from 'rxjs-compat';
import { HttpClient } from "@angular/common/http";
//import { FroniusInverterData } from '../model/fronius.model';

const url: string = "http://10.1.1.234/solar_api/v1/GetInverterRealtimeData.cgi?Scope=Device&DeviceId=1&DataCollection=CommonInverterData";

@Injectable({
  providedIn: 'root'
})
export class FroniusSolarSourceService implements SolarSourceService  {

  constructor(private http: HttpClient) {

  }

  currentPower(): Observable<number> {

    // TODO
    //let test: Observable<string> = this.http.get<any>(url).map((result)=> {return result.Power});
    // TODO
    return Observable.timer(0, 2000).switchMap(
      (n)=> {
        // return Observable.timer(0,2000).map((n)=>{
        //   return Math.random() * 100.0;
        // })
        return this.http.get<Fronius.FroniusInverterData>(url).map((d) =>
        {
          return d.Body.Data.PAC.Value;
        })
      }
    );
  }
}