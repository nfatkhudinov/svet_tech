import {actionKind} from "./LightCalc.actions";

export type State = {
    roomLength: number;
    roomWidth: number;
    roomReflex: string;
    roomDust: string;
    roomLightFlow: string;
    roomHeight: number;
    worktableHeight: number;
    selectedLamp: undefined|{};
}

export type Action = {
    type: actionKind,
    payload: any,
}
