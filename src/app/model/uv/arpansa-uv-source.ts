import { UvSource } from "./uv-source";
import { Observable } from "rxjs-compat";
import { HttpClient } from "@angular/common/http";

const url: string = "uv/api/UV";
// Every two minutes
const pollTime: number = 120000; // Poll time in milliseconds

export class ArpansaUvSource extends UvSource{

    constructor(
      private http: HttpClient) {
        super();

        Observable.timer(0, pollTime).subscribe(
            (n)=>
            {
              // Test
              this.uvIndex.value.next(Math.floor(Math.random()* 15));

              // this.http.get<number>(url).subscribe((index) =>
              // {
              //   this.uvIndex.value.next(index);
              // });
            }
          );            
    }
}