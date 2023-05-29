import styled from "styled-components";

import {ButtonProps} from "@/ui/components/LightCalculator v2/digitInput/digitInput.types";

const BUTTON_WIDTH = 25;
const INPUTAREA_WIDTH = 70;
const HEIGHT = 35;
const BORDER_RADIUS = 10;


export const Container = styled.div`
  display: flex;
  flex-direction: row;
  margin: 10px 0;
 /** Убираем стрелки у input number **/
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */
  input[type=number] {
    -moz-appearance:textfield;
  }
`
const Button = styled.button`
    width: ${BUTTON_WIDTH}px;
    height: ${HEIGHT}px;
    color: white;
    background: black;
     &:hover{
        background: #9e9e9e;
        cursor: pointer;
  }
`

export const DecrementButton = styled(Button)`
  border-top-left-radius: ${BORDER_RADIUS}px;
  border-bottom-left-radius: ${BORDER_RADIUS}px;
`
export const IncrementButton = styled(Button)`
  border-top-right-radius: ${BORDER_RADIUS}px;
  border-bottom-right-radius: ${BORDER_RADIUS}px;
`

export const Input = styled.input<ButtonProps>(({error})=>{
    return (
  `font-family: 'DIN Next W1G';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 120%;
  text-align: center;
  color: black;
  padding: 0 10px;
  background: ${error?'#ff3333':'#e6e6e6'};
  box-sizing: border-box;
  width: ${INPUTAREA_WIDTH}px;`
    )}
);