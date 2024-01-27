import React, { useState } from 'react';
import { observer } from "mobx-react";

import { useMobileOrDesktop, useStores } from "@/shared/hooks";
import { ItemsGrid } from "@/shared/components";
import { CartProductCard } from "@/widgets/CartProductCard/CartProductCard";
import { IOrder, ProductCartCounter } from '@/entities';
import { IProductsToOrder } from "@/entities/interfaces";
import { MainLayout } from "@/shared/ui/Layouts";

import { processOrder } from "../api";

import * as Styles from './CartPage.styles';

export const CartPage = observer(() => {
    const stores = useStores();
    const isMobile = useMobileOrDesktop();
    const [name, setName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');

    const productsInCart = Array.from(stores.cartStore.getProductsCounts.keys());
    const productsCounts = Array.from(stores.cartStore.getProductsCounts.values());
    let totalSum = 0;
    for (let i = 0; i < productsInCart.length; i++) {
        totalSum += productsInCart[i].price * productsCounts[i];
    }
    const handleSubmit = function () {
        if (name.length < 2
            || phoneNumber.length < 10
            || productsInCart.length < 1)
        {
            alert("Введите корректные данные, пожалуйста!");
        }
        let mapOfProducts = stores.cartStore.getProductsCounts;
        let products: IProductsToOrder[] = [];
        mapOfProducts.forEach((n, p) => {
            let productsToOrder = {
                name: p.name,
                price: p.price,
                count: n,
            }
            products.push(productsToOrder);
        })
        let orderInfo: IOrder = {
            products: products,
            name: name,
            phoneNumber: phoneNumber,
            mail: '',
        }
        processOrder(orderInfo)
            .then(function (response) {
                if (response && response?.status === '200') {
                    alert('Ура, вы успешно совершили заказ!');
                    stores.cartStore.deleteAllProducts();
                    setName('');
                    setPhoneNumber('');
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    const productsElements = productsInCart.map(p => {
        return (
            <>
                <Styles.ProductWrapper>
                    <CartProductCard product={p} key={p.id}/>
                    <ProductCartCounter product={p} />
                </Styles.ProductWrapper>
                <Styles.Line/>
            </>
        )
    })

    return (
        <MainLayout>
            <Styles.Wrapper isMobile={isMobile}>
                <Styles.CaptionWrapper right={true}>
                    <Styles.Link to={'/'}>Вернуться к покупкам</Styles.Link>
                </Styles.CaptionWrapper>
                <Styles.CaptionWrapper>
                    <h1>Корзина</h1>
                </Styles.CaptionWrapper>
                <Styles.Flex>
                    <ItemsGrid width={isMobile ? '100%' : '65%'}>
                        {productsElements}
                    </ItemsGrid>
                    <Styles.CartInfoMenu isMobile={isMobile}>
                        <Styles.CartCaption>Ваш заказ</Styles.CartCaption>
                        <Styles.OrderFieldsList>
                            {productsInCart.map(p => {
                                return (
                                  <Styles.OrderFieldsListItem>
                                      {p.name}
                                      <span>{p.price * stores.cartStore.getProductCount(p)} ₽</span>
                                  </Styles.OrderFieldsListItem>
                                );
                            })}
                        </Styles.OrderFieldsList>
                        <Styles.Summary>
                            {'Итого:'}
                            <span>{totalSum} ₽</span>
                        </Styles.Summary>
                        <Styles.Input
                          type='text'
                          onChange={(e) => setName(e.target.value)}
                          placeholder={'Имя'}
                          value={name}
                        />
                        <Styles.Input
                          type='text'
                          onChange={(e) => setPhoneNumber(e.target.value)}
                          placeholder={'Номер телефона'}
                          value={phoneNumber}
                        />
                        <Styles.SubmitButton onClick={handleSubmit}>Оформить</Styles.SubmitButton>
                    </Styles.CartInfoMenu>
                </Styles.Flex>
            </Styles.Wrapper>
        </MainLayout>
    );
});
