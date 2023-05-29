import {Action} from "@/ui/components/LightCalculator v2/LightCalc.types";

export interface Props {
    options:{ value: string; label: string; }[];
    action: (value:string)=>Action;
    placeholder?:string;
    defaultValue: string;

}