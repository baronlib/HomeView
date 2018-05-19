import { Component, OnInit, OnDestroy } from '@angular/core';
import { SolarSourceService } from '../services/solar-source.service';
import { TestSolarSourceService } from '../services/test-solar-source.service';
import { Observable } from 'rxjs-compat';

@Component({
  selector: 'solar-view',
  template: `
  <ng-content></ng-content>
  <div>{{power | number : '1.2'}}</div>`,
  styleUrls: ['./solar-view.component.css'],
  providers: [
    { provide: SolarSourceService, useClass: TestSolarSourceService }
  ]
})
export class SolarViewComponent implements OnInit, OnDestroy {
  private power: number;
  private error: boolean;

  private powerObservable: Observable<number>;

  constructor(private solarService: SolarSourceService) {
    this.powerObservable = Observable.timer(0, 2000).map(
      () => this.power = this.solarService.currentPower()
    );
  }

  ngOnInit() {
    this.powerObservable.subscribe();
  }

  ngOnDestroy(): void {
    // TODO - unsubscribe ?
  }
}
