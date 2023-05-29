import styled from "styled-components";


export const customStyles = {
    option: (defaultStyles:any, state:any) => ({
        ...defaultStyles,
        color: state.isSelected ? "white" : "black",
        backgroundColor: state.isSelected ? "black" : "white",
    }),

    control: (defaultStyles:any) => ({
        ...defaultStyles,
        backgroundColor: "black",
        padding: "0 15px ",
        border: "none",
        boxShadow: "none",
        borderRadius: "10px",
        caretColor: "transparent",
        height: '35px',
    }),
    singleValue: (defaultStyles:any) => ({ ...defaultStyles, color: "#fff" }),
};

export const SelectContainer = styled.div`
    width: 100%;
  margin: 10px 0;
`