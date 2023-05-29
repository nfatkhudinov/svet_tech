import React, {useContext} from 'react';
import Select from "react-select";

import {Context} from "@/ui/components/LightCalculator v2/LightCalc.context";
import {customStyles} from "@/ui/components/LightCalculator v2/lightSelect/lightSelect.styled";

import * as S from './lightSelect.styled'
import {Props} from './lightSelect.types'



const LightSelect:React.FC<Props> = (props) => {
    const {options,
            action,
            placeholder= "Выберите...",
            defaultValue} = props

    // @ts-ignore
    const [,dispatch] = useContext(Context)
    const handleChange = (event:any)=>{
        dispatch(action(event.value))
    }

   //    dispatch(action(options[defaultValue].value))
    const getDefault = ()=>{
        const defVal = options.filter((i)=>i.value===defaultValue)
        return defVal[0]
    }

    // @ts-ignore
    return (
        <>
        <S.SelectContainer>
        <Select options={options}
                isSearchable={false}
                isClearable={false}
                styles={customStyles}
                onChange={handleChange}
                placeholder={placeholder}
                defaultValue={()=> getDefault()}/>

        </S.SelectContainer>
        </>
    );
};

export default LightSelect;