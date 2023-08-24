import React from 'react';
import {Button, Wrapper, CounterWrapper} from './CartButton.styles';

export const CartButton = () => {
    return (
        <Wrapper>
            <Button value={1}>Корзина</Button>
        </Wrapper>
    );
};
