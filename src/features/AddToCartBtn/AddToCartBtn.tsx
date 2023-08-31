import React from 'react';
import {Button} from "./AddToCartBtn.styles";
import {useStores} from "@/shared/hooks";
import {IProduct} from "@/entities";

interface AddToCartBtnProps extends IProduct {
}

export const AddToCartBtn = (props: AddToCartBtnProps) => {
    const stores = useStores();
    function handleClick() {
        stores.cartStore.addProductToCart({...props});
    }
    return (
        <Button onClick={handleClick}>
            <span>Это мне нужно</span>
            <span>+</span>
        </Button>
    );
};
