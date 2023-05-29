import React, {useReducer} from "react";

import Container from "@/ui/components/Container/Container";
import {
    selectDustOptions,
    selectReflexOptions,
    selectRoomOptions
} from "@/ui/components/LightCalculator v2/_selectOptions.var";
import DigitInput from "@/ui/components/LightCalculator v2/digitInput/digitInput";
import {
    setRoomDust, setRoomHeight,
    setRoomLength, setRoomLightFlow,
    setRoomReflex,
    setRoomWidth, setSelectedLamp, setWorktableHeight
} from "@/ui/components/LightCalculator v2/LightCalc.actions";
import LightImage from "@/ui/components/LightCalculator v2/lightImage/lightImage";
import LightSelect from "@/ui/components/LightCalculator v2/lightSelect/lightSelect";
import LampCatalogue from "@/ui/components/LightCalculator v2/modalCatalog/lampCatalogue";
import {Box} from "~primitives/Box";
import {Flex} from "~primitives/Flex";
import Typography from "~primitives/Typography/Typography";

import { Context } from './LightCalc.context'
import * as S from './LightCalc.styled'
import {State} from './LightCalc.types'
import {Reducer} from "./reducer";


const LighCalcV2 = () => {

    const initialState:State = {
        roomLength: 3,
        roomWidth: 3,
        roomHeight: 2.5,
        worktableHeight: 0.7,
        roomLightFlow: '500',
        roomDust: '1.1',
        roomReflex: '80 50 30',
        selectedLamp: undefined,
    }

  const [state, dispatch]=useReducer(Reducer, initialState)


    return (
        <Context.Provider value={[state, dispatch]}>
            <Container background={'white'} padding={32}>



                <Box marginBottom={10} marginTop={15}>
                    <Typography variant={['headline_h2_mobile', 'headline_h2']}>
                        Калькулятор освещенности
                    </Typography>
                </Box>
                <Box>
                <Typography variant={['headline_h3_mobile', 'headline_h3']}>
                    Настройки помещения
                </Typography>
                </Box>

            <S.InnerContainer>
                <S.ParametersContainer>
                    <S.ParameterBoxButton>
                        <Box>
                            <Typography variant={['headline_h4_mobile', 'headline_h4']}>
                                Длина помещения, м
                            </Typography>
                        </Box>
                         <DigitInput action={setRoomWidth} minValue={0.5} maxValue={200} defaultValue={state.roomWidth}/>
                    </S.ParameterBoxButton>

                    <S.ParameterBoxButton>
                        <Box>
                            <Typography variant={['headline_h4_mobile', 'headline_h4']}>
                                Ширина помещения, м
                            </Typography>
                        </Box>
                        <DigitInput action={setRoomLength} minValue={0.5} maxValue={200} defaultValue={state.roomLength}/>
                    </S.ParameterBoxButton>

                    <S.ParameterBoxButton>
                        <Box>
                            <Typography variant={['headline_h4_mobile', 'headline_h4']}>
                                Высота помещения, м
                            </Typography>
                        </Box>
                        <DigitInput action={setRoomHeight} minValue={0} maxValue={200} step={0.1} defaultValue={state.roomHeight}/>
                    </S.ParameterBoxButton>

                    <S.ParameterBoxButton>
                        <Box>
                            <Typography variant={['headline_h4_mobile', 'headline_h4']}>
                                Высота рабочей<br/>поверхности, м
                            </Typography>
                        </Box>
                        <DigitInput action={setWorktableHeight} minValue={0} maxValue={199} step={0.01}  defaultValue={state.worktableHeight}/>
                    </S.ParameterBoxButton>

                    <S.ParameterBoxSelect>
                        <Box>
                            <Typography variant={['headline_h4_mobile', 'headline_h4']}>
                                Укажите тип помещения
                            </Typography>
                        </Box>
                        <Typography variant={['bodycopy_b2']}>От этого параметра зависит нормативная освещенность по международным нормам (МКО)</Typography>
                        <LightSelect options={selectRoomOptions} action={setRoomLightFlow} defaultValue={state.roomLightFlow}/>
                    </S.ParameterBoxSelect>

                    <S.ParameterBoxSelect>
                        <Box>
                            <Typography variant={['headline_h4_mobile', 'headline_h4']}>
                                Укажите загрязненность помещения
                            </Typography>
                        </Box>
                        <Typography variant={['bodycopy_b2']}>Коэффициент учитывается при подсчете количества светильников</Typography>
                        <LightSelect options={selectDustOptions} action={setRoomDust} defaultValue={state.roomDust}/>
                    </S.ParameterBoxSelect>

                    <S.ParameterBoxSelect>
                        <Box>
                            <Typography variant={['headline_h4_mobile', 'headline_h4']}>
                                Опишите поверхности помещения
                            </Typography>
                        </Box>
                        <Typography variant={['bodycopy_b2']}>При подсчете учитывается коэффициент отражения поверхностей помещения. Выберите вариант, максимально близко описывающий Ваше помещение</Typography>
                        <LightSelect options={selectReflexOptions} action={setRoomReflex} defaultValue={state.roomReflex}/>
                    </S.ParameterBoxSelect>

                </S.ParametersContainer>
            <Flex flexDirection={"column"} flex={1} gap={20}>
            <LightImage/>
                <LampCatalogue action={setSelectedLamp}/>
                DETECTED DATA:
                Length: {state.roomLength}
                Width: {state.roomWidth}
                Height: {state.roomHeight}
                Reflex: {state.roomReflex}
                RoomDust: {state.roomDust}
                RoomLightFlow: {state.roomLightFlow}
                WorktableHeight: {state.worktableHeight}
            </Flex>
            </S.InnerContainer>
           </Container>
         </Context.Provider>
    );
};

export default LighCalcV2;

/**            <LightSelect options={selectReflexOptions}/>
 <LightSelect options={selectDustOptions}/>
 <LightSelect options={selectRoomOptions}/> **/