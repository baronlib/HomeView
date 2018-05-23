import { ParameterSource } from "../parameter/parameter-source.model";
import { Parameter } from "../parameter/parameter.model";
import { OnInit } from "@angular/core";

export class WeatherSource extends ParameterSource implements OnInit {
    
    ngOnInit(): void {     

        this.maxTemp.value.next(26);
        this.minTemp.value.next(10);
    }

    protected maxTemp: Parameter;
    protected minTemp: Parameter;

    constructor() {
        super();

        this.maxTemp = new Parameter();
        this.maxTemp.name = "Max. Temp";
        this.maxTemp.unit = "C";
        this.maxTemp.minValue = 0;
        this.maxTemp.maxValue = 50;

        this.minTemp = new Parameter();
        this.minTemp.name = "Min. Temp";
        this.minTemp.unit = "C";
        this.minTemp.minValue = 0;
        this.minTemp.maxValue = 50;
    }

    getParameters(): Parameter[] {
        return new Array<Parameter>(this.minTemp, this.maxTemp);
    }
}