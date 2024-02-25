import React, {useState} from 'react';
import {Button} from "./AddToCartBtn.styles";
import {useStores} from "@/shared/hooks";
import {IProduct} from "@/entities";
import {observer} from "mobx-react";

interface AddToCartBtnProps extends IProduct {
}

export const AddToCartBtn = (props: AddToCartBtnProps) => {
    const stores = useStores();
    const [text, setText] = useState('В корзину')
    function handleClick() {
        stores.cartStore.increaseProductsCount({...props});
        setText('Добавлено');
    }

    return (
        <Button
          onClick={handleClick}
          disabled={!props.inStock}
        >
            <span>{text}</span>
            <span>+</span>
        </Button>
    );
};
