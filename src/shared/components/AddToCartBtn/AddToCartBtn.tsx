import React from 'react';
import {Button} from "./AddToCartBtn.styles";

export const AddToCartBtn = () => {
    function handleClick() {
    }
    return (
        <Button onClick={handleClick}>
            <span>Это мне нужно</span>
            <span>+</span>
        </Button>
    );
};
