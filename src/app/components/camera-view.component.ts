import { Component, OnInit, OnDestroy } from '@angular/core';
import { Camera } from '../model/camera/camera';
import { CameraService } from '../model/camera/camera.service';

@Component({
  selector: 'camera-view',
  templateUrl: 'camera-view.component.html'
})
export class CameraViewComponent 
{
  private cameras: Camera[];
  private currentUrl: string;

  constructor(private cameraService: CameraService)
  {
    this.cameras = new Array<Camera>();
  }

  ngOnInit(){

    this.cameras = this.cameraService.getCameras();
  }

  changeCamera(){
      alert('change');
  }
}