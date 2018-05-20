import { Component, OnInit, OnDestroy } from '@angular/core';
import { SolarSourceService } from '../services/solar-source.service';
import { Observable } from 'rxjs-compat';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { FroniusSolarSourceService } from '../services/fronius-solar-source.service';

@Component({
  selector: 'solar-view',
  template: `
  <div>{{solarService.currentPower | async}} W</div>
  <mat-progress-bar [value]="powerAsPercent"></mat-progress-bar>
  <p align="right">{{maxPower}} W</p>

  <div>{{solarService.dayEnergy | async}} Wh</div>
  <mat-progress-bar [value]="dayEnergyAsPercent"></mat-progress-bar>
  <p align="right">{{maxDayEnergy}} Wh</p>
  `,  
  //<div>{{power | number : '1.2'}}</div>
  styleUrls: ['./solar-view.component.css'],
  providers: [
    { provide: SolarSourceService, useClass: FroniusSolarSourceService }
  ]
})
export class SolarViewComponent {
  
  private maxPower: number = 5100; // In Watts
  private maxDayEnergy: number = 25000; // In Watt Hours

  private powerAsPercent: number;
  private dayEnergyAsPercent: number;
  //private error: boolean;

  constructor(private solarService: SolarSourceService) {

    this.solarService.currentPower.subscribe((power) =>
    {
      this.powerAsPercent = this.ValueAsPercent(power);
    });

    this.solarService.dayEnergy.subscribe((dayEnergy) =>
    {
      this.dayEnergyAsPercent = this.ValueAsPercent(dayEnergy);
    });
  }

  ValueAsPercent(power: number): number{
    return (power / this.maxPower) * 100.0;
  }
}
