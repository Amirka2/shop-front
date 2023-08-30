import React from 'react';
import { Link } from 'react-router-dom';
import {Button, Wrapper} from './CartButton.styles';
import {Paths} from "@/shared/constants";

export const CartButton = () => {
    return (
        <Wrapper>
            <Button value={1}>
                <Link to={Paths.cart}>Корзина</Link>
            </Button>
        </Wrapper>
    );
};
