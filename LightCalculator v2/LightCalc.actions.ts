import {Action} from './LightCalc.types'
export enum actionKind {
    setRoomLength = 'SET_ROOM_LENGTH',
    setRoomWidth = 'SET_ROOM_WIDTH',
    setRoomReflex = 'SET_ROOM_REFLEX',
    setRoomDust = 'SET_ROOM_DUST',
    setRoomLightFlow = 'SET_ROOM_LIGHT_FLOW',
    setRoomHeight = 'SET_ROOM_HEIGHT',
    setWorktableHeight = 'SET_WORKTABLE_HEIGHT',
    setSelectedLamp = 'SET_SELECTED_LAMP'
}

export function setRoomLength(value:number):Action{
    return {type: actionKind.setRoomLength, payload: value}
}
export function setRoomWidth(value:number):Action{
    return {type: actionKind.setRoomWidth, payload: value}
}
export function setRoomReflex(value:string):Action{
    return {type: actionKind.setRoomReflex, payload: value}
}
export function setRoomDust(value:any):Action{
    return {type: actionKind.setRoomDust, payload: value}
}
export function setRoomLightFlow(value:any):Action{
    return {type: actionKind.setRoomLightFlow, payload: value}
}
export function setRoomHeight(value:any):Action{
    return {type: actionKind.setRoomHeight, payload: value}
}
export function setWorktableHeight(value:any):Action{
    return {type: actionKind.setWorktableHeight, payload: value}
}

export function setSelectedLamp(value:any):Action{
    return {type: actionKind.setSelectedLamp, payload: value}
}

