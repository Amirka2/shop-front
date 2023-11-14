import { useStores } from '@/shared/hooks';
import React, {useState} from 'react';

import {
    Button,
    CounterWithButtons,
    InteractionPanel,
    SumInfo
} from './ProductCartCounter.styles';
import {IProduct} from "@/entities";
import {Plus, Minus} from "@/shared/components";

interface ProductCounterProps {
    product: IProduct;
}

export const ProductCartCounter = ({product}: ProductCounterProps) => {
    const stores = useStores();
    let [counter, setCounter] = useState((stores.cartStore.getProductCount(product)));

    let sum = product.price * counter;

    const handleMinus = function () {
        stores.cartStore.decreaseProductsCount(product);
        setCounter(prevState => prevState - 1);
    }

    const handlePlus = function () {
        stores.cartStore.increaseProductsCount(product);
        setCounter(prevState => prevState + 1);
    }

    return (
        <InteractionPanel>
            <SumInfo>{sum} ₽</SumInfo>
            <CounterWithButtons>
                <Button onClick={handleMinus}>
                    <Minus />
                </Button>
                <div>{counter}</div>
                <Button onClick={handlePlus}>
                    <Plus />
                </Button>
            </CounterWithButtons>
        </InteractionPanel>
    );
};
