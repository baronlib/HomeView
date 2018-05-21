import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs-compat';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { ParameterSourceRepoService } from '../model/parameter/parameter-source-repo.service';
import { Parameter } from '../model/parameter/parameter.model';

@Component({
  selector: 'dashboard',
  template: `
  <parameter-view *ngFor="let param of parameters" [parameter]="param"></parameter-view>
  `,
  styleUrls: ['./dashboard.component.css'],
  providers: [
    { provide: ParameterSourceRepoService, useClass: ParameterSourceRepoService }
  ]
})
export class DashboardComponent 
{
  // Parameters to show in the dashboard  
  private parameters: Parameter[];

  constructor(private parameterSources: ParameterSourceRepoService)
  {
    this.parameters = new Array<Parameter>();
    // Get all parameters from all parameter sources
    parameterSources.getAllParameterSources().forEach((ps) => ps.getParameters().forEach((param)=> {this.parameters.push(param);}));
  }
}
