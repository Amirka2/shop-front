import React from 'react';
import { observer } from "mobx-react";

import {Wrapper} from './CartPage.styles';
import {useStores} from "@/shared/libs/hooks";
import {Product} from "@/shared/components";

export const CartPage = observer(() => {
    const cartStore = useStores();
    const products = cartStore.cartStore.getProductsList;
    const productsElements = products.map(p => {
        return (
            <>
                <Product {...p}/>
                <button onClick={() => cartStore.cartStore.deleteProductToCart(p.id)}>XXX</button>
            </>
        )
    })
    return (
        <Wrapper>
            <h1>Cart Page</h1>
            <div>
                {productsElements}
            </div>
        </Wrapper>
    );
});
