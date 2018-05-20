import { Injectable } from '@angular/core';
import { SolarSourceService } from './solar-source.service';
import { Observable } from 'rxjs-compat';
import { HttpClient } from "@angular/common/http";

const url: string = "/inverter/solar_api/v1/GetInverterRealtimeData.cgi?Scope=Device&DeviceId=1&DataCollection=CommonInverterData";

@Injectable({
  providedIn: 'root'
})
export class FroniusSolarSourceService implements SolarSourceService  {

  constructor(private http: HttpClient) {  }

  currentPower(): Observable<number> {

    return Observable.timer(0, 2000).switchMap(
      (n)=> {
        return this.http.get<Fronius.FroniusInverterData>(url).map((d) =>
        {
          // The current power in Watts
          return d.Body.Data.PAC.Value;
        })
      }
    );
  }
}