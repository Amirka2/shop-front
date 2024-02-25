import React, {useState} from 'react';

import {useStores} from "@/shared/hooks";
import {IProduct} from "@/entities";

import * as Styles from "./AddToCartBtn.styles";

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
        <Styles.Button
          onClick={handleClick}
          disabled={!props.inStock}
        >
            <span>{text}</span>
            <span>+</span>
        </Styles.Button>
    );
};
