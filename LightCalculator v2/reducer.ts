import {actionKind} from "./LightCalc.actions";
import {Action,State} from "./LightCalc.types";

export function Reducer(state:State, action:Action):State{
    switch (action.type){
        case actionKind.setRoomLength: return {...state, roomLength: action.payload}
        case actionKind.setRoomWidth: return {...state, roomWidth: action.payload}
        case actionKind.setRoomReflex: return {...state, roomReflex: action.payload}
        case actionKind.setRoomDust: return {...state, roomDust: action.payload}
        case actionKind.setRoomLightFlow: return {...state, roomLightFlow: action.payload}
        case actionKind.setRoomHeight: return {...state, roomHeight: action.payload}
        case actionKind.setWorktableHeight: return {...state, worktableHeight: action.payload}
        case actionKind.setSelectedLamp: return {...state, selectedLamp: action.payload}
        default: return state
    }
}
