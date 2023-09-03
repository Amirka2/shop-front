import React, {useState} from 'react';
import {Button} from "./AddToCartBtn.styles";
import {useStores} from "@/shared/hooks";
import {IProduct} from "@/entities";
import {observer} from "mobx-react";

interface AddToCartBtnProps extends IProduct {
}

export const AddToCartBtn = (props: AddToCartBtnProps) => {
    const stores = useStores();
    const [text, setText] = useState('Это мне нужно')
    function handleClick() {
        stores.cartStore.increaseProductsCount({...props});
        setText('Я это куплю');
    }

    return (
        <Button onClick={handleClick}>
            <span>{text}</span>
            <span>+</span>
        </Button>
    );
};
