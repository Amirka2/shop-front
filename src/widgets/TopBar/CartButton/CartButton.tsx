import React from 'react';
import { Link } from 'react-router-dom';
import {Button, Counter, Wrapper} from './CartButton.styles';
import {Paths} from "@/shared/constants";
import {useStores} from "@/shared/hooks";
import {observer} from "mobx-react";

export const CartButton = observer(() => {
    const stores = useStores();

    return (
        <Wrapper>
            <Button value={1}>
                <Link to={Paths.cart}>Корзина</Link>
                <Counter>{stores.cartStore.cartProductsCounts.size}</Counter>
            </Button>
        </Wrapper>
    );
});
