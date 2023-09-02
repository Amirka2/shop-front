import React, {useState} from 'react';
import {observer} from "mobx-react";

import {
    CaptionWrapper,
    Wrapper,
    Link,
    CartInfoMenu,
    Summary,
    SubmitButton,
    Flex,
    CartCaption,
    Line,
    ProductWrapper,
    ModifyValue
} from './CartPage.styles';
import {useStores} from "@/shared/hooks";
import {ItemsGrid} from "@/shared/components";
import {CartProductCard} from "@/widgets/CartProductCard/CartProductCard";
import { ProductCounter } from '@/entities';

export const CartPage = observer(() => {
    const cartStore = useStores();
    const products = cartStore.cartStore.getProductsList;
    const [productsAndCounts, setProductsAndCounts] = useState({
        products: products,
        counts: [],
    });

    const productsElements = products.map(p => {
        return (
            <>
                <ProductWrapper>
                    <CartProductCard product={p}/>
                    <ProductCounter productId={p.id} price={p.price}/>
                </ProductWrapper>
                <Line/>
            </>
        )
    })

    return (
        <Wrapper>
            <CaptionWrapper right>
                <Link to={'/'}>Вернуться к покупкам</Link>
            </CaptionWrapper>
            <CaptionWrapper>
                <h1>Корзина</h1>
            </CaptionWrapper>
            <Flex>
                <ItemsGrid width={'65%'}>
                    {productsElements}
                </ItemsGrid>
                <CartInfoMenu>
                    <CartCaption>your order</CartCaption>
                    <p>info</p>
                    <Summary></Summary>
                    <SubmitButton>Submit</SubmitButton>
                </CartInfoMenu>
            </Flex>
        </Wrapper>
    );
});
