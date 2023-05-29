import React, {useContext, useEffect, useState} from 'react';

import {Context} from '../LightCalc.context'
import * as S from './digitInput.styled'
import {Props} from './digitInput.types'

const DigitInput:React.FC<Props> = (props)=>{
    const {defaultValue= 0
          , maxValue = 100
          , minValue = defaultValue
          , step = 0.1
          , action}= props;


    // @ts-ignore
    const [,dispatch] = useContext(Context)
    /** Объявление стейтов **/

    const [value, setValue] = useState({
        visibleValue: defaultValue.toString(),
        parsedValue: defaultValue,
    });
    const [error, setError] = useState(false);

    /** Запись ивента в стейт **/
    const blurHandler = (event: React.ChangeEvent<HTMLInputElement>)=>{
        isNaN(parseFloat(event.target.value))?setValue({...value, parsedValue: minValue, visibleValue: minValue.toString()}):
        setValue({...value, parsedValue: parseFloat(parseFloat(event.target.value).toFixed(2)), visibleValue: (parseFloat(parseFloat(event.target.value).toFixed(2))).toString()})
    }
    const inputHandler = (event: React.ChangeEvent<HTMLInputElement>)=>{
        setValue({...value, visibleValue: event.target.value})
        if (parseFloat(event.target.value)<minValue) setError(true)
        else if (parseFloat(event.target.value)>maxValue) setError(true)
        else setError(false)
    }
    /** Отправка данных родителю **/
    const sendData = ():any=>{
        if (value.parsedValue<minValue||value.parsedValue>maxValue) {
            return action(NaN)
        } else return action(value.parsedValue)
    }

       useEffect(()=>dispatch(sendData()), [error, value])


    /** Хендлер инкремента/декремента **/

    const decrementHandler = () => {
        if (value.parsedValue-step<minValue) {
            setValue({...value, parsedValue: minValue, visibleValue: minValue.toString()})
            setError(false);
        }
        else if (value.parsedValue-step>maxValue) {
            setValue({...value, parsedValue: maxValue, visibleValue: maxValue.toString()})
            setError(false);
        }
        else {
            setValue({
                ...value,
                parsedValue: parseFloat((value.parsedValue - step).toFixed(2)),
                visibleValue: (parseFloat((value.parsedValue - step).toFixed(2)).toString())
            })
            setError(false)
        }
    }

    const incrementHandler = () => {
        if (value.parsedValue+step<minValue) {
            setValue({...value, parsedValue: minValue, visibleValue: minValue.toString()})
            setError(false);
        }
        else if (value.parsedValue+step>maxValue) {
            setValue({...value, parsedValue: maxValue, visibleValue: maxValue.toString()})
            setError(false);
        }
        else {
            setValue({
                ...value,
                parsedValue: parseFloat((value.parsedValue + step).toFixed(2)),
                visibleValue: (parseFloat((value.parsedValue + step).toFixed(2)).toString())
            });
            setError(false);
        }
    }

    return (
        <>
        <S.Container>
            <S.DecrementButton onClick={decrementHandler}>-</S.DecrementButton>
            <S.Input error={error}
                     type={"number"}
                     onBlur={blurHandler}
                     onInput={inputHandler}
                     value={value.visibleValue}
                     max={maxValue}
                     min={minValue}/>
            <S.IncrementButton onClick={incrementHandler}>+</S.IncrementButton>
        </S.Container>
        </>
    )
}

export default DigitInput;