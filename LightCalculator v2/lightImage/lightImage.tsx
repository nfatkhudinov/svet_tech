import React, {useContext} from 'react';
import * as S from './LightImage.styled'
import {Context} from '../LightCalc.context'

const LightImage = () => {
    // @ts-ignore
    const [state,,] = useContext(Context)
    return (
        <S.Container>
            <S.CentalLine>
                <S.WidthText>{state.roomWidth} м</S.WidthText>
                <S.HeightText>{state.roomHeight} м</S.HeightText>
                <S.LengthText>{state.roomLength} м</S.LengthText>
                <S.WorktableText>{state.worktableHeight} м</S.WorktableText>
            </S.CentalLine>
        </S.Container>
    );
};

export default LightImage;