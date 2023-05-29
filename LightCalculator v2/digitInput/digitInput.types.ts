import {Action} from '../LightCalc.types'
export interface Props {
    defaultValue?: number;
    maxValue?: number;
    minValue?: number;
    step?:number;
    action: (arg0:any)=>Action;
}

export interface ButtonProps {
    error?: boolean;
}