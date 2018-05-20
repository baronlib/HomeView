import { Injectable, OnInit } from '@angular/core';
import { SolarSourceService } from './solar-source.service';
import { Observable, Subject } from 'rxjs-compat';
import { HttpClient } from "@angular/common/http";

const url: string = "/inverter/solar_api/v1/GetInverterRealtimeData.cgi?Scope=Device&DeviceId=1&DataCollection=CommonInverterData";
const pollTime: number = 2000; // Poll time in milliseconds

@Injectable({
  providedIn: 'root'
})
export class FroniusSolarSourceService implements SolarSourceService {

  public currentPower: Subject<number>;
  public dayEnergy: Subject<number>;

  private inverterDataObservable: Observable<Fronius.FroniusInverterData>;

  constructor(private http: HttpClient) {

    this.currentPower = new Subject<number>();
    this.dayEnergy = new Subject<number>();

    // Poll the interver every set ms
    Observable.timer(0, pollTime).subscribe(
          (n)=> {
            this.http.get<Fronius.FroniusInverterData>(url).subscribe((data) =>
            {
              let power: number = 0.0;
              if(data.Body.Data.PAC)
              {
                power = data.Body.Data.PAC.Value;
              }
              this.currentPower.next(power);
              this.dayEnergy.next(data.Body.Data.DAY_ENERGY.Value);
            });
          }
        );
  }
}