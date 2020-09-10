import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { HttpClientModule } from '@angular/common/http';
import { ParameterViewComponent } from './components/parameter-view.component';
import { DashboardComponent } from './components/dashboard.component';
import { ParameterSourceRepoService } from './model/parameter/parameter-source-repo.service';
import { CameraViewComponent } from './components/camera-view.component';
import { AlertComponent } from './components/alert.component';


import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ParameterViewComponent,
    CameraViewComponent,
    AlertComponent,
  ],
  imports: [
    BrowserModule,
    MatProgressBarModule,
    HttpClientModule,
    MatSnackBarModule,
    BrowserAnimationsModule
  ],
  entryComponents: [AlertComponent],
  providers: [ParameterSourceRepoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
