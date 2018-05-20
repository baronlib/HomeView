import { Component, OnInit, OnDestroy } from '@angular/core';
import { SolarSourceService } from '../services/solar-source.service';
import { Observable } from 'rxjs-compat';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { FroniusSolarSourceService } from '../services/fronius-solar-source.service';

@Component({
  selector: 'solar-view',
  template: `
  <ng-content></ng-content>
  <mat-progress-bar [value]="power">{{power}}</mat-progress-bar>
  `,  
  //<div>{{power | number : '1.2'}}</div>
  styleUrls: ['./solar-view.component.css'],
  providers: [
    { provide: SolarSourceService, useClass: FroniusSolarSourceService }
  ]
})
export class SolarViewComponent implements OnInit, OnDestroy {
  private power: number;
  private error: boolean;

  constructor(private solarService: SolarSourceService) {
  }

  ngOnInit() {
    this.solarService.currentPower().subscribe((power)=> 
    {
      this.power = power;
    },
    (error) => this.power = -1);
  }

  ngOnDestroy(): void {
    // TODO - unsubscribe ?
  }
}
