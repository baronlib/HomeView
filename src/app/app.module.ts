import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { HttpClientModule } from '@angular/common/http';
import { ParameterViewComponent } from './components/parameter-view.component';
import { DashboardComponent } from './components/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ParameterViewComponent
  ],
  imports: [
    BrowserModule,
    MatProgressBarModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
