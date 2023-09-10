import React from 'react';
import {Button, Counter, Wrapper, Link} from './CartButton.styles';
import {Paths} from "@/shared/routing";
import {useStores} from "@/shared/hooks";
import {observer} from "mobx-react";

export const CartButton = observer(() => {
    const stores = useStores();

    return (
        <Wrapper>
            <Button value={1}>
                <Link to={Paths.cart}>
                    <span>Корзина</span>
                    <Counter>{stores.cartStore.cartProductsCounts.size}</Counter>
                </Link>
            </Button>
        </Wrapper>
    );
});
