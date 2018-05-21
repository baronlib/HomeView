import { Subject } from "rxjs-compat";

export class Parameter
{
    public name: string;

    public value: Subject<number>;

    public unit: string;
    // TODO - perform unit conversions

    public minValue: number;

    public maxValue: number;

    constructor() {
        
        this.value = new Subject<number>();
    }
}