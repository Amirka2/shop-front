import React, {useEffect, useState} from 'react';
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
    ModifyValue,
    OrderFieldsList,
    OrderFieldsListItem, Input
} from './CartPage.styles';
import {processOrder} from "@/pages/Cart/api";

import {useStores} from "@/shared/hooks";
import {ItemsGrid} from "@/shared/components";
import {CartProductCard} from "@/widgets/CartProductCard/CartProductCard";
import {ProductCounter} from '@/entities';

export const CartPage = observer(() => {
    const stores = useStores();
    const [name, setName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');

    const products = Array.from(stores.cartStore.getProductsCounts.keys());
    const productsCounts = Array.from(stores.cartStore.getProductsCounts.values());
    let totalSum = 0;
    for (let i = 0; i < products.length; i++) {
        totalSum += products[i].price * productsCounts[i];
    }
    const handleSubmit = function () {
        if (name.length < 2
            || phoneNumber.length < 10
            || products.length < 1)
        {
            alert("Введите корректные данные, пожалуйста!");
        }
        let orderInfo = {
            productsAndCounts: {...stores.cartStore.getProductsCounts},
            name: name,
            phoneNumber: phoneNumber,
        }
        processOrder(orderInfo);
    }

    const productsElements = products.map(p => {
        return (
            <>
                <ProductWrapper>
                    <CartProductCard product={p} key={p.id}/>
                    <ProductCounter product={p} />
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
                    <CartCaption>Ваш заказ</CartCaption>
                    <OrderFieldsList>
                        {products.map(p => {
                            return (
                                <OrderFieldsListItem>
                                    {p.name}
                                    <span>{p.price * stores.cartStore.getProductCount(p)} ₽</span>
                                </OrderFieldsListItem>
                            );
                        })}
                    </OrderFieldsList>
                    <Summary>
                        {'Итого:'}
                        <span>{totalSum} ₽</span>
                    </Summary>
                    <Input type='text' onChange={(e) => setName(e.target.value)} placeholder={'Имя'}/>
                    <Input type='text' onChange={(e) => setPhoneNumber(e.target.value)} placeholder={'Номер телефона'}/>
                    <SubmitButton onClick={handleSubmit}>Оформить</SubmitButton>
                </CartInfoMenu>
            </Flex>
        </Wrapper>
    );
});
