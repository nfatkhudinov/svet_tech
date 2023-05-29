import styled from "styled-components";
import RoomImage from './room.png'
export const Container = styled.div`
  width: 100%;
  height: 330px;
  background-color: #cecece;
  position: relative;
  overflow: hidden;
  background-image: url('${RoomImage.src}');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  @media (max-width: 767px){
    display: none;
  }
`

export const CentalLine = styled.div`
  position: absolute;
  left: 50%;
`

export const HeightText = styled.div`
    position: absolute;
    left: -13em;
    top: 9em;
  width: 40px;
`

export const WidthText = styled.div`
    position: absolute;
    left: 8em;
    top: 17em;
    width: 40px;
`

export const LengthText = styled.div`
    position: absolute;
    left: -8em;
    top: 17em;
  width: 40px;
`

export const WorktableText = styled.div`
    position: absolute;
    left: 1.5em;
    top: 9em;
  width: 50px;
`