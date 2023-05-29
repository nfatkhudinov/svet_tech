import styled from "styled-components";

export const InnerContainer = styled.div`
    display: flex;
    flex-direction: row;
  gap: 40px;
`

export const ParametersContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  @media (max-width: 767px){
    width: 100%;
  }
  
`
export const ParameterBoxButton = styled.div`
  display: flex;
  flex-direction: row;
  gap: 30px;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid lightgray;
`
export const ParameterBoxSelect = styled.div`
  padding-top: 10px;
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid lightgray;
`
