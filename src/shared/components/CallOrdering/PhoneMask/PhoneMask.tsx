import React from 'react';

import {StyledInputMask} from './PhoneMask.styles'

interface PhoneMaskProps {
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const PhoneMask = ({value, onChange} : PhoneMaskProps) => {
    return (
        <StyledInputMask
            mask='+7(999) 999-99-99'
            alwaysShowMask={true}
            value={value}
            onChange={onChange}
        />
    );
};
