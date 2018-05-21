import { Component, OnInit, Input } from '@angular/core';
import { Parameter } from '../model/parameter/parameter.model';

@Component({
  selector: 'parameter-view',
  template: `
  <div>{{parameter.name}}: {{parameter.value | async | number}} {{parameter.unit}}</div>
  <mat-progress-bar [value]="valueAsPercent" color='warn'></mat-progress-bar>  
  `
  ,
  styleUrls: ['./parameter-view.component.css']
})
export class ParameterViewComponent implements OnInit {

  @Input("parameter") parameter: Parameter;

  private valueAsPercent: number;

  constructor() { }

  ngOnInit() {
        this.parameter.value.subscribe((val) =>
        {
          this.valueAsPercent = this.ValueAsPercent(val, this.parameter.minValue, this.parameter.maxValue);
        });
  }

  ValueAsPercent(value: number, min: number, max: number): number{
    // TODO - use min
    //return ((max-min/max) * value) + min;
    return (value / max) * 100.0;
  }
}
