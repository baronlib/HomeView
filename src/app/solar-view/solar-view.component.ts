import { Component, OnInit } from '@angular/core';
import { SolarSourceService } from '../services/solar-source.service';
import { TestSolarSourceService } from '../services/test-solar-source.service';

@Component({
  selector: 'solar-view',
  template: `<div>{{power}}</div>`,
  styleUrls: ['./solar-view.component.css'],
  providers: [
    { provide: SolarSourceService, useClass: TestSolarSourceService }
  ]
})
export class SolarViewComponent implements OnInit {

  private power: number;

  constructor(private solarService: SolarSourceService) {
    
  }

  ngOnInit() {
    this.solarService.currentPower().subscribe((p)=> this.power = p);
  }

  // TODO - unsubscribe

}
