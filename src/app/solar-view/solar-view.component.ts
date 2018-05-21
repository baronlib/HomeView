import { Component, OnInit, OnDestroy } from '@angular/core';
import { SolarSourceService } from '../services/solar-source.service';
import { Observable } from 'rxjs-compat';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { FroniusSolarSourceService } from '../services/fronius-solar-source.service';
import { ParameterSource } from '../model/parameter-source.model';
import { Parameter } from '../model/parameter.model';

@Component({
  selector: 'solar-view',
  template: `
  <div>Current Power: {{solarService.currentPower | async}} W</div>
  <mat-progress-bar [value]="powerAsPercent" color='warn'></mat-progress-bar>
  <div>Daily Energy : {{solarService.dayEnergy | async | number}} Wh</div>
  <mat-progress-bar [value]="dayEnergyAsPercent" color='warn'></mat-progress-bar>
  `,  
  //<div>{{power | number : '1.2'}}</div>
  styleUrls: ['./solar-view.component.css'],
  providers: [
    { provide: SolarSourceService, useClass: FroniusSolarSourceService }
  ]
})
export class SolarViewComponent {
  
  private maxPower: number = 5100; // In Watts
  private maxDayEnergy: number = 30000; // In Watt Hours

  private powerAsPercent: number;
  private dayEnergyAsPercent: number;
  //private error: boolean;

  // TODO - refactor to pass in a instance that encapsulates either Power or DayEnergy

 // constructor(private solarService: SolarSourceService) {

 private parameters: Parameter[];

    // todo
constructor(private parameterSources: ParameterSource[])
{
  this.parameters = new Array<Parameter>();

  parameterSources.forEach((ps) => ps.getParameters().forEach((param)=> {this.parameters.push(param);}));


    // this.solarService.currentPower.subscribe((power) =>
    // {
    //   this.powerAsPercent = this.ValueAsPercent(power, this.maxDayEnergy);
    // });

    // this.solarService.dayEnergy.subscribe((dayEnergy) =>
    // {
    //   this.dayEnergyAsPercent = this.ValueAsPercent(dayEnergy, this.maxDayEnergy);
    // });
  }

  ValueAsPercent(value: number, max: number): number{
    return (value / max) * 100.0;
  }
}
