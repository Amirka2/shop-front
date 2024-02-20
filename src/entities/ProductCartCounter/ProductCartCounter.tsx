import React from 'react';
import { observer } from "mobx-react";

import { useStores } from '@/shared/hooks';
import { IProduct } from "@/entities";

import {
    Button,
    CounterWithButtons,
    InteractionPanel,
    SumInfo
} from './ProductCartCounter.styles';

interface ProductCounterProps {
    product: IProduct;
}

export const ProductCartCounter = observer(({product}: ProductCounterProps) => {
    const stores = useStores();

    let sum = product.price * stores.cartStore.getProductCount(product);

    const handleMinus = function () {
        stores.cartStore.decreaseProductsCount(product);
    }

    const handlePlus = function () {
        stores.cartStore.increaseProductsCount(product);
    }

    return (
        <InteractionPanel>
            <SumInfo>{product.inStock ? `${sum}₽` : 'По запросу'}</SumInfo>
            <CounterWithButtons>
                <Button onClick={handleMinus}>
                    <svg width="18" height="2" viewBox="0 0 18 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g id="minus">
                            <path id="Vector" d="M17 2H1C0.734784 2 0.48043 1.89464 0.292893 1.70711C0.105357 1.51957 0 1.26522 0 1C0 0.734784 0.105357 0.48043 0.292893 0.292893C0.48043 0.105357 0.734784 0 1 0H17C17.2652 0 17.5196 0.105357 17.7071 0.292893C17.8946 0.48043 18 0.734784 18 1C18 1.26522 17.8946 1.51957 17.7071 1.70711C17.5196 1.89464 17.2652 2 17 2Z" fill="white"/>
                        </g>
                    </svg>
                </Button>
                <div>{stores.cartStore.getProductCount(product)}</div>
                <Button onClick={handlePlus}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <g id="plus">
                            <path id="Vector" d="M8.75 7.25V1C8.75 0.801088 8.67098 0.610322 8.53033 0.46967C8.38968 0.329018 8.19891 0.25 8 0.25C7.80109 0.25 7.61032 0.329018 7.46967 0.46967C7.32902 0.610322 7.25 0.801088 7.25 1V7.25H1C0.801088 7.25 0.610322 7.32902 0.46967 7.46967C0.329018 7.61032 0.25 7.80109 0.25 8C0.25 8.19891 0.329018 8.38968 0.46967 8.53033C0.610322 8.67098 0.801088 8.75 1 8.75H7.25V15C7.25259 15.1981 7.33244 15.3874 7.47253 15.5275C7.61263 15.6676 7.80189 15.7474 8 15.75C8.19891 15.75 8.38968 15.671 8.53033 15.5303C8.67098 15.3897 8.75 15.1989 8.75 15V8.75H15C15.1989 8.75 15.3897 8.67098 15.5303 8.53033C15.671 8.38968 15.75 8.19891 15.75 8C15.7474 7.80189 15.6676 7.61263 15.5275 7.47253C15.3874 7.33244 15.1981 7.25259 15 7.25H8.75Z" fill="white"/>
                        </g>
                    </svg>
                </Button>
            </CounterWithButtons>
        </InteractionPanel>
    );
});
